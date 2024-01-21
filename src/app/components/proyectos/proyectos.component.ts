import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../service/proyectos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']  // Corregido a 'styleUrls'
})
export class ProyectosComponent implements OnInit {

  public proyectos: any[] = [];
  public proyectosAMostrar: number = 4;
  public proyectosPorClick: number = 2;

  constructor(
    private _proyectosService: ProyectosService,
    private modalService: NgbModal
    ) {}

  ngOnInit(): void {
    this._proyectosService.getProyectos().subscribe((proyectos) => {
      this.proyectos = proyectos;
    })
  }

  verMasProyectos() {
    this.proyectosAMostrar += this.proyectosPorClick;
  }

  abrirModal(proyecto: any) {
    this._proyectosService.abrirModal(proyecto);
  }
}
