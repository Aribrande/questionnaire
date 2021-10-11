import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-klausimai',
  templateUrl: './klausimai.component.html',
  styleUrls: ['./klausimai.component.css']
})
export class KlausimaiComponent implements OnInit {

  public klausimai;    // Visi klausimai
  public ak:number=0;  // Aktyvus klausimas
  public teisingi:number=0;
  public viso:number=0; //Kiek iš viso yra klausimų
  public pabaiga=false;
  public cdObservable:Observable<number>; 
  public laikas:number=0;
  private subscribtion:Subscription;

  constructor(private dataService:DataService ) { 

  }

  private createCountdounObeservable(){
    this.cdObservable=new Observable( (observer)=>{
      let count:number=5;
      setInterval(()=>{
        if (count<0){
          observer.complete();
        }else{
          observer.next(count);
        }
        count--;
      },1000);
    });
  }

  private startCountDown(){
    this.createCountdounObeservable();
    this.subscribtion=this.cdObservable.subscribe( (count:number)=>{
      console.log(count);
      this.laikas=count;
    }, ()=>{}, ()=>{
      this.speti(-1);
      console.log(this.ak, this.viso)
      if ( !this.pabaiga ){
        this.startCountDown();
      }
    });
  }

  ngOnInit(): void {
    this.klausimai=this.dataService.klausimai;
    this.viso=this.klausimai.length;
    this.startCountDown();
    
  }

  speti(i:number){
    
    if (this.klausimai[this.ak].teisingas==i){
      this.teisingi++;
    }
    if (this.ak<this.viso-1){
      this.ak++;
    }else{
      this.pabaiga=true;
    }
    if (i!=-1){
      this.subscribtion.unsubscribe();
     
      if (!this.pabaiga){
        this.laikas=5;
        this.startCountDown();
      }
    }
  }

}
