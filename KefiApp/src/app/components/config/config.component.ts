import { Component, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {
  @Output() configSaved = new EventEmitter<boolean>();

constructor(){

}

  shortBreakDuration: number;
  longBreakDuration: number;
  shortBreakInterval: number;
  longBreakInterval: number;

  saveConfig() {
    // Validar y guardar la configuración
    const showAlert = true; // Mostrar alerta después de guardar la configuración
    this.configSaved.emit(showAlert);
    // Guardar los valores de configuración en el TimerService
    ////////////////
    console.log("configuracion guardada");
  }

}
