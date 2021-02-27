import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonasComponent } from './personas/personas.component';
import { FormPersonaComponent } from './personas/form.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: '/personas', pathMatch: 'full'},
  {path: 'personas', component: PersonasComponent},
  {path: 'personas/form', component: FormPersonaComponent},
  {path: 'persona/form/:id', component: FormPersonaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PersonasComponent,
    FormPersonaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
