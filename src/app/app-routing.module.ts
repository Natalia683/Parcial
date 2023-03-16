import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { FarmaciaComponent } from './Components/farmacia/farmacia.component';
import { FarmacosComponent } from './Components/farmacos/farmacos.component';

const routes: Routes = [

  {path: "Farmacia",component:FarmaciaComponent},
  {path: "Farmacos",component:FarmacosComponent},
  {path: "Clientes",component:ClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
