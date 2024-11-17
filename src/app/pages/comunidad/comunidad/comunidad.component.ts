import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../../../services/rest-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrl: './comunidad.component.css'
})
export class ComunidadComponent implements OnInit {
  public comunidades: any = [];
  public agComunidad: FormGroup;
  private selectedFile: File | null = null;
  public isFormValid = false;
  public comunidadSeleccionada: any;
  public isComunidadOpen = false;

  constructor( private rest: RestServiceService, private fb: FormBuilder ){

    this.agComunidad = this.fb.group({
      tema: ['', Validators.required],
      contenido: ['', Validators.required],
      imagen: [null],
      categoria: ['', Validators.required],
      fecha: ['', Validators.required],
      nombre_usuario: ['', Validators.required],
    });

    this.agComunidad.valueChanges.subscribe(() => {
      this.checkFormValidity();
    });
  }

  ngOnInit() {
    this.getComunidades();
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.agComunidad.patchValue({
        imagen: file
      });
    }
  }
  checkFormValidity() {
    this.isFormValid = this.agComunidad.valid && this.selectedFile !== null;
  }

  public getComunidades() {
    this.rest.get('https://starwikibackend-dbg8hkhzf3cad2h3.eastus2-01.azurewebsites.net/api/v1/comunidad').subscribe((respuesta) => {
      this.comunidades = respuesta;
    });
  }

  
  public createComunidad() {
    if (this.isFormValid) {
      const formData = new FormData();
      formData.append('tema', this.agComunidad.get('tema')?.value);
      formData.append('contenido', this.agComunidad.get('contenido')?.value);
      formData.append('categoria', this.agComunidad.get('categoria')?.value);
      formData.append('fecha', this.agComunidad.get('fecha')?.value);
      formData.append('nombre_usuario', this.agComunidad.get('nombre_usuario')?.value);
      if (this.selectedFile) {
        formData.append('imagen', this.selectedFile);
      }
      this.rest.post('https://starwikibackend-dbg8hkhzf3cad2h3.eastus2-01.azurewebsites.net/api/v1/comunidad', formData).subscribe(
        (respuesta) => {
          console.log('Comunidad Creada', respuesta);
          this.closeModal();
          this.agComunidad.reset();
          this.getComunidades();
        },
        (error) => {
          console.error('Error al crear la comunidad', error);
        }
      );
    }
  }

  /* MODAL PARA CERRAR O ABRIR EL FORMULARIO DE AGREGAR */
  public closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }
  public openModal() {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }
  /* FIN DEL MODAL FORMULARIO */

  async openVerComunidadModal(comunidad: any) {
    this.comunidadSeleccionada = comunidad;
    const modal = document.getElementById('ModalC');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  public closeComunidadModal() {
    const modal = document.getElementById('ModalC');
    if (modal) {
      modal.classList.add('hidden');
    }
    this.comunidadSeleccionada = null; // Limpia la comunidad seleccionada
  }

}
