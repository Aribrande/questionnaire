import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-testas',
  templateUrl: './testas.component.html',
  styleUrls: ['./testas.component.css']
})
export class TestasComponent implements OnInit, OnDestroy {

  private prenumerata:Subscription; 

  constructor() { }

  ngOnInit(): void {
    const laikmatis=new Observable((observer)=>{
      let sk:number=0;
      setInterval(()=>{
        sk++;
        if (sk<=10){
          observer.next(sk);
        }else{
          observer.complete();
        }
      },1000);
    });
   

    this.prenumerata=laikmatis.pipe(filter((sk:number)=>{
      return sk%2==0;
    }), map((sk)=>{
      return "["+sk+"]";
    })
    ).subscribe((s)=>{
       console.log("Praėjo ",s," sekundžių");
    },()=>{},()=>{
      console.log("Observable baigė darbą");
    });

  }

  ngOnDestroy(){
    this.prenumerata.unsubscribe();

  }

}
