import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from './persona.service';
// import swal from 'sweetalert2';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html'
})
export class PersonasComponent implements OnInit {

  personas: Persona[] | undefined;

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(
      personas => this.personas = personas
    );
  }

}
