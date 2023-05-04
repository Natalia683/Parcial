import { Component , OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit{
  displayedColumns: string[] ;

  dataSource: MatTableDataSource<any>;
  
   data:any []

  constructor(public api:ApiService){
    this.dataSource = new MatTableDataSource();
  }
  
    ngOnInit(): void{
      this.GetClientes();
    }
    public async GetClientes(){
      this.api.Get("Clientes").then((res) => {
        this.dataSource.data =res
        this.data = res;
      });
      }

  }