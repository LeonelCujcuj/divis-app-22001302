import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor-monedas',
  templateUrl: './convertidor-monedas.component.html',
  styleUrls: ['./convertidor-monedas.component.scss'],
})
export class ConvertidorMonedasComponent {
    cantidadEnQuetzales: number = 0;
    resultadoEnDolares: number = 0; // Initialize resultadoEnDolares with a default value
  
    tipoCambio = 8;
  
    constructor() {
      this.cantidadEnQuetzales = 0;
      this.resultadoEnDolares = 0; // Assign a value to resultadoEnDolares in the constructor
    }
  
    convertirADolares() {
      this.resultadoEnDolares = this.cantidadEnQuetzales / this.tipoCambio;
    }
}
