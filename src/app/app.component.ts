import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicaCalculadora';
  numero1:number=0;
  numero2:number=0;
  resultadoSuma:number=0;
  resultadoResta:number=0;
  resultadoMultiplicacion:number=0;
  resultadoDivision:number=0;



  suma():void
    {
      this.resultadoSuma = this.numero1+this.numero2;
    }

    resta():void
    {
      this.resultadoResta = this.numero1-this.numero2;
    }
    multiplicacion():void
    {
      this.resultadoMultiplicacion = this.numero1*this.numero2;
    }
    division():void
    {
      this.resultadoDivision = this.numero1/this.numero2;
    }
}
