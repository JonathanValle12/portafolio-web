import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ProyectoModalComponent } from '../proyecto-modal/proyecto-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private proyectosUrl = 'assets/data/proyectos.json'

  constructor(private http: HttpClient, private modalService: NgbModal) { }

  getProyectos(): Observable<any[]> {
    return this.http.get<any[]>(this.proyectosUrl);
  }

  abrirModal(proyecto: any) {
    const modalRef = this.modalService.open(ProyectoModalComponent, { size: 'lg' });
    modalRef.componentInstance.proyecto = proyecto;
  }
}
