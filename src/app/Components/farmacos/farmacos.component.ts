import { Component , OnInit} from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-farmacos',
  templateUrl: './farmacos.component.html',
  styleUrls: ['./farmacos.component.css']
})

export class FarmacosComponent implements OnInit{
  displayedColumns: string[] ;
  dataSource: MatTableDataSource<any>;
   data:any []

  constructor(public api:ApiService){
    this.dataSource = new MatTableDataSource();
  }
  
    ngOnInit(): void{
      this.GetFarmacoes();
     
    }

    public async GetFarmacoes() {
      this.api.Get('Farmacoes').then((res) => {
        this.dataSource.data =res
        this.data = res;
        
      });
    }

  }