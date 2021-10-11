import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestasComponent } from './testas/testas.component';
import { TusciasComponent } from './tuscias/tuscias.component';
import { KlausimaiComponent } from './klausimai/klausimai.component';

const appRoutes:Routes=[
  {path:'', component:AppComponent},
  {path:'testas', component:TestasComponent},
  {path:'tuscias', component:TusciasComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TestasComponent,
    TusciasComponent,
    KlausimaiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
