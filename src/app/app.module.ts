import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmaciaComponent } from './Components/farmacia/farmacia.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { FarmacosComponent } from './Components/farmacos/farmacos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './Components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './Components/login/login.component';

import { ReactiveFormsModule } from "@angular/forms";
import { FormularioFarmaciaComponent } from './Components/Formularios/formulario-farmacia/formulario-farmacia.component';
import { MatCardModule } from '@angular/material/card';
import { FormularioClientesComponent } from './Components/Formularios/formulario-clientes/formulario-clientes.component';
import { FormularioFarmacosComponent } from './Components/Formularios/formulario-farmacos/formulario-farmacos.component';

@NgModule({
  declarations: [
    
    AppComponent,
    FarmaciaComponent,
    ClientesComponent,
    FarmacosComponent,
    MenuComponent,
    TableComponent,
    LoginComponent,
    FormularioFarmaciaComponent,
    FormularioClientesComponent,
    FormularioFarmacosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
