import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Observable, throwError } from 'rxjs';
// import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable()
export class PersonaService {
  private urlEndPoint = 'http://localhost:8080/api/persona';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Persona[])
    );
  }

  createPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.urlEndPoint, persona, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        Swal.fire('Error al crear', e.error.mensajeError, 'error');
        return throwError(e);
      })
    );
  }

  getPersona(id: number): Observable<Persona>{
    return this.http.get<Persona>(`${this.urlEndPoint}/${id}`);
  }

  updatePersona(persona: Persona): Observable<Persona>{
    return this.http.put<Persona>(`${this.urlEndPoint}`, persona, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        Swal.fire('Error al actualizar', e.error.mensajeError, 'error');
        return throwError(e);
      })
    );
  }

  borrarPersona(id: number | undefined): Observable<Persona>{
    return this.http.delete<Persona>(`${this.urlEndPoint}/${id}`);
  }


}
