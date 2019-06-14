import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {
 botonHabilitado = true;
 hiddeElement1 = true;
 hiddeElement2 = true;
 hiddeElement3 = true;
 hiddeElement4 = true;
 cajasDisponibles = ["1", "2", "3", "4"];
 cajasOcupadas = [];
 cajas = [
   {estado: "Disponible", numero: "1", turnoAsignado: 0},
   {estado: "Disponible", numero: "2", turnoAsignado: 0},
   {estado: "Disponible", numero: "3", turnoAsignado: 0},
   {estado: "Disponible", numero: "4", turnoAsignado: 0}
 ]
 turnoActual = 0;
 turnoSiguiente = this.turnoActual + 1;
 estadoCaja1b = true;
 estadoCaja1= "Disponible";
 turnoCaja1 = 0;
 estadoCaja2b = true;
 estadoCaja2 = "Disponible";
 turnoCaja2 = 0;
 estadoCaja3b = true;
 estadoCaja3 = "Disponible";
 turnoCaja3 = 0;
 estadoCaja4b = true;
 estadoCaja4 = "Disponible";
 turnoCaja4 = 0;
 timeLeft: number = 20;
 interval;
 

  constructor() { }

  ngOnInit() {
    //this.reiniciar();
  }


  getBotonHabilitado():boolean{
    return this.botonHabilitado;
  }

  comprobarYtimer(){
    this.comprobar();
    this.iniciarTimer();
  }



  comprobar(){
    var index = 0;

    if ( this.cajasDisponibles.includes( '1' ) ) {
      index = this.cajasDisponibles.indexOf('1');
      this.turnoCaja1 = this.turnoActual;
      this.estadoCaja1b = false;
      this.estadoCaja1 ="Ocupada";
      this.cajasOcupadas.push("1");
      this.cajasDisponibles.splice(index,1);
      this.hiddeElement1=false;
      console.log(this.cajasOcupadas);
      console.log(this.cajasDisponibles);
  }
  else if(this.cajasDisponibles.includes('2')){
    index = this.cajasDisponibles.indexOf('2');
      this.turnoCaja2 = this.turnoActual;
      this.estadoCaja2b = false;
      this.estadoCaja2 = "Ocupada";
      this.cajasOcupadas.push("2");
      this.cajasDisponibles.splice(index,1);
      this.hiddeElement2=false;
      console.log(this.cajasOcupadas);
      console.log(this.cajasDisponibles);
  }
  else if(this.cajasDisponibles.includes('3')){
      index = this.cajasDisponibles.indexOf('3');
      this.turnoCaja3 = this.turnoActual;
      this.estadoCaja3b = false;
      this.estadoCaja3 = "Ocupada";
      this.cajasOcupadas.push("3");
      this.cajasDisponibles.splice(index,1);
      this.hiddeElement3=false;
      console.log(this.cajasOcupadas);
      console.log(this.cajasDisponibles);
  }
  else if(this.cajasDisponibles.includes('4')){
      index = this.cajasDisponibles.indexOf('4');
      this.turnoCaja4 = this.turnoActual;
      this.estadoCaja4b = false;
      this.estadoCaja4 = "Ocupada";
      this.cajasOcupadas.push("4");
      this.cajasDisponibles.splice(index,1);
      this.hiddeElement4=false;
      console.log(this.cajasOcupadas);
      console.log(this.cajasDisponibles);
    }
  else if(this.cajasDisponibles.length == 0){
    this.botonHabilitado = false;
  }
    this.turnoActual++;
    this.turnoSiguiente++;
  }

  iniciarTimer(){
    var index = 0 ;

    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else if(this.timeLeft == 0){
        if(this.cajasOcupadas.includes('1')){
          index = this.cajasOcupadas.indexOf('1');
          this.estadoCaja1b = true;
          this.estadoCaja1 = "Disponible";
          this.cajasDisponibles.push('1');
          this.cajasOcupadas.splice(index,1);
          this.hiddeElement1 = true;
          this.timeLeft = 20;
        }
        else if(this.cajasOcupadas.includes('2')){
          index = this.cajasOcupadas.indexOf('2');
          this.estadoCaja2b = true;
          this.estadoCaja2 = "Disponible";
          this.cajasDisponibles.push('2');
          this.cajasOcupadas.splice(index,1);
          this.hiddeElement2 = true;
          this.timeLeft = 13;
        }
        else if(this.cajasOcupadas.includes('3')){
          index = this.cajasOcupadas.indexOf('3');
          this.estadoCaja3b = true;
          this.estadoCaja3 = "Disponible";
          this.cajasDisponibles.push('3');
          this.cajasOcupadas.splice(index,1);
          this.hiddeElement3 = true;
          this.timeLeft = 10;
        }
        else if(this.cajasOcupadas.includes('4')){
          index = this.cajasOcupadas.indexOf('4');
          this.estadoCaja4b = true;
          this.estadoCaja4 = "Disponible";
          this.cajasDisponibles.push('4');
          this.cajasOcupadas.splice(index,1);
          this.hiddeElement4 = true;
          this.timeLeft = 7;
        }
      }
      else {
        this.timeLeft = 20;
      }
    },2000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  reiniciar(){
    this.hiddeElement1= true;
    this.hiddeElement2 = true;
    this.hiddeElement3 = true;
    this.hiddeElement4 = true;
    this.cajasDisponibles = ["1, 2, 3, 4"];
    this.cajas = [
      {estado: "Disponible", numero: "1", turnoAsignado: 0},
      {estado: "Disponible", numero: "2", turnoAsignado: 0},
      {estado: "Disponible", numero: "3", turnoAsignado: 0},
      {estado: "Disponible", numero: "4", turnoAsignado: 0}
    ]
    this.turnoActual = 1;
    this.turnoSiguiente = this.turnoActual + 1;
    this.estadoCaja1b = true;
    this.estadoCaja1 = "Disponible";
    this.turnoCaja1 = 0;
    this.estadoCaja2b = true;
    this.estadoCaja2 = "Disponible";
    this.turnoCaja2 = 0;
    this.estadoCaja3b = true;
    this.estadoCaja3 = "Disponible";
    this.turnoCaja3 = 0;
    this.estadoCaja4b = true;
    this.estadoCaja4 = "Disponible";
    this.turnoCaja4 = 0;
    this.timeLeft= 60;
  }



 
}
