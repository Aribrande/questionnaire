import { Component, OnInit } from '@angular/core';
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
  constructor(private dataService:DataService ) { 

  }

  ngOnInit(): void {
    this.klausimai=this.dataService.klausimai;
    this.viso=this.klausimai.length;
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
    


  }

}
