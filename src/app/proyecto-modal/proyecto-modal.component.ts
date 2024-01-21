// proyecto-modal.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-proyecto-modal',
  templateUrl: './proyecto-modal.component.html',
  styleUrls: ['./proyecto-modal.component.css']
})
export class ProyectoModalComponent implements OnInit {
  @Input() proyecto: any;
  images: any[] = [];

  constructor(public activeModal: NgbActiveModal, private lightbox: Lightbox) {}

  ngOnInit() {
  if (this.proyecto && this.proyecto.imagenes) {
    this.proyecto.imagenes.forEach((imagenInfo: any, index: number) => {
      
      this.images.push({
        src: imagenInfo.ruta,
        thumb: imagenInfo,
        caption: imagenInfo.descripcion || `Imagen ${index + 1}` // Puedes personalizar las leyendas de las imágenes
      });
    });
  }
}

  

abrirModal(index: number): void {
  // Abre el cuadro de luz con la imagen seleccionada y ajusta el tamaño
  this.lightbox.open(this.images, index);
}
  cerrarModal() {
    this.lightbox.close();
    this.activeModal.close();
  }
}
