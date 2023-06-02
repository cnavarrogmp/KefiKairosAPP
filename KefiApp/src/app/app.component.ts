import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RestDialogComponent } from './components/rest-dialog/rest-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'kefiApp';

  intervalId: any;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {

  }
  startRestTimer(){
    this.intervalId = setInterval(() => {
      this.openRestDialog();
    }, 8 * 1000); // Intervalo de 20 minutos (en milisegundos = 20 * 60 * 1000)
    console.log("Mandada la señal de inicio");
  }

  stopInterval() {
    clearInterval(this.intervalId);
    console.log("Mandada la señal de final");
  }

  openRestDialog() {
    console.log("Intentando abrir el modal");
    const dialogRef = this.dialog.open(RestDialogComponent, {
      width: '60%', // Tamaño personalizado del modal
      data: { message: '¡Es hora de tomar un descanso de 1 minuto!' } // Puedes pasar datos personalizados al componente del modal
    });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId); // Detener el intervalo al destruir el componente
  }

}
