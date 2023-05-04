import { Component , OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia.component.html',
  styleUrls: ['./farmacia.component.css']
})

export class FarmaciaComponent implements OnInit{

  displayedColumns: string[] ;

  dataSource: MatTableDataSource<any>;
  
   data:any []


  constructor(public api:ApiService){
    this.dataSource = new MatTableDataSource();


  }
  
    ngOnInit(): void{
      this.GetFarmacia();
    }

    public async GetFarmacia(){
    this.api.Get("Farmaciums").then((res) => {
      this.dataSource.data =res
      this.data = res;
    });
    }
  }