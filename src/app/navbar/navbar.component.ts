import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  seleccionado: string = 'home'; // Página seleccionada por defecto

  seleccionar(seccion: string) {
    this.seleccionado = seccion;
  }

}
