import { Component , OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';


@Component({
  selector: 'app-farmacos',
  templateUrl: './farmacos.component.html',
  styleUrls: ['./farmacos.component.css']
})

export class FarmacosComponent implements OnInit{
  constructor(public api:ApiService){}
  
    ngOnInit(): void{
      var response = this.api.getAll("Farmacoes")
      console.log(response);
    }
  }