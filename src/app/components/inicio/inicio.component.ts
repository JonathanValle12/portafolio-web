import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    
  }

  descargarCV() {
    const url = 'assets/Curriculum_Vitae_extenso.pdf'; // Reemplaza esto con la ruta real de tu archivo PDF
  
    // Realiza una solicitud GET para obtener el archivo
    this.http.get(url, { responseType: 'arraybuffer' }).subscribe((data: ArrayBuffer) => {
      // Crea un Blob a partir de los datos del array buffer
      const blob = new Blob([data], { type: 'application/pdf' });
  
      // Crea un objeto URL para el Blob y crea un enlace para descargar el archivo
      const downloadLink = document.createElement('a');
      const objectURL = URL.createObjectURL(blob);
  
      downloadLink.href = objectURL;
      downloadLink.download = 'curriculum_vitae_extenso.pdf'; // Nombre que tendrá el archivo al descargarlo
  
      // Anexa el enlace al DOM y simula el clic para iniciar la descarga
      document.body.appendChild(downloadLink);
      downloadLink.click();
  
      // Limpia el enlace y el objeto URL
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(objectURL);
    });
  }
  
}
