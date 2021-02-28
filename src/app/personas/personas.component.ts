import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from './persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html'
})
export class PersonasComponent implements OnInit {

  personas: Persona[] ;

  constructor(private personaService: PersonaService) {
    this.personas = [];
  }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(
      personas => this.personas = personas
    );
  }

  borrarPersona(persona: Persona): void {
    Swal.fire({
      title: 'Esta seguro que desea eliminar esta persona?',
      text: 'Esta accion no se puede reversar!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrarlo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.personaService.borrarPersona(persona.id).subscribe(
          response => {
            this.personas = this.personas.filter(pers => pers !== persona);
            Swal.fire(
              'Accion Realizada',
              'Persona Borrada',
              'success'
            );
          });
      }
    });
  }

}
