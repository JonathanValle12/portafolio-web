import { Component, OnInit, HostListener } from '@angular/core';
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
  public mostrarFlechaArriba: boolean = false;

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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Verifica la posición del scroll y actualiza la propiedad mostrarFlechaArriba
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.mostrarFlechaArriba = scrollPosition > 650; // Cambia 100 según tu necesidad

    console.log(scrollPosition);
  }
  irArriba() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
