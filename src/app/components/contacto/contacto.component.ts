import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as emailjs from 'emailjs-com';

declare var iziToast: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {

  public enviarForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

    this.enviarForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    })
  }
  ngOnInit(): void {
  }

  onSubmitForm() {
    if (this.enviarForm.valid) {
        const params = {
          to_name: 'Destinatario',  // Puedes personalizar según tu plantilla
          from_name: this.enviarForm.value.name,
          message_html: this.enviarForm.value.message,
          subject: this.enviarForm.value.subject,
          reply_to: this.enviarForm.value.email
        };
        

        emailjs.send("service_em8tgrd", "template_hhp2kks", params, 'lKK99BxN9KkK-KQ5F')
          .then(response => {
            iziToast.show({
              title: 'SUCCESS',
              titleColor: '#1DC74C',
              color: '#FFF',
              class: 'text-success',
              position: 'topRight',
              message: 'Se ha enviado tu mensaje correctamente.'
            })

            this.enviarForm.reset()
          })
        
        .catch(error => {
          iziToast.show({
            title: 'ERROR',
            titleColor: '#FF0000',
            color: '#FFF',
            class: 'text-danger',
            position: 'topRight',
            message: 'Error al enviar tu mensaje al servidor'
          })
        })
    } else {
      // Marcar todos los campos como tocados para mostrar mensajes de error
      this.enviarForm.markAllAsTouched()
      iziToast.show({
        title: 'ERROR',
        titleColor: '#FF0000',
        color: '#FFF',
        class: 'text-danger',
        position: 'topRight',
        message: 'Los datos del formulario no son validos'
      })
  }
  }

  hasError(controlName: string): boolean {
    const control = this.enviarForm.get(controlName);
  
    // Verificar si control no es nulo
    if (control) {
      return control.invalid && (control.touched || control.dirty);
    }
  
    // Si control es nulo, retornar false (sin errores)
    return false;
  }
  
}
