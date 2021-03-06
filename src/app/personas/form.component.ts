import { Component, OnInit } from '@angular/core';
import {Persona} from './persona';
import {PersonaService} from './persona.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form.component',
  templateUrl: './form.component.html'
})
export class FormPersonaComponent implements OnInit {

  public persona: Persona = new Persona();
  public titulo = 'Crear Persona';

  constructor(private personaService: PersonaService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.cargarPersona();
  }

  cargarPersona(): void{
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id){
        this.personaService.getPersona(id).subscribe( (persona) => this.persona = persona);
      }
    });
  }

  create(): void {
    this.personaService.createPersona(this.persona)
      .subscribe(persona => {
          this.router.navigate(['/personas']);
          Swal.fire('Nuevo persona', `Persona creada con éxito!`, 'success');
        }
      );
  }

  updatePersona(): void{
    this.personaService.updatePersona(this.persona)
      .subscribe( persona => {
          this.router.navigate(['/personas']);
          Swal.fire('Persona Actualizada', `Persona actualizada con éxito!`, 'success');
        }
      );
  }

}
