import { DataService } from './../../services/data.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rest-dialog',
  templateUrl: './rest-dialog.component.html',
  styleUrls: ['./rest-dialog.component.css']
})
export class RestDialogComponent implements OnInit {
  randomData: { phrase: string, gifUrl: string };
  randomPhrase: string = '';
  randomGifUrl: string = '';


  constructor(
    public dialogRef: MatDialogRef<RestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService : DataService
  ) {}

  ngOnInit() {
    //
    console.log("El componente modal se ha inicializado");
    //Pillar los datos del servicio
    this.randomData = this.dataService.getRandomData();
    this.randomPhrase = this.randomData.phrase;
    this.randomGifUrl = this.randomData.gifUrl;
    this.closeDialog();

  }

  closeDialog(){
    console.log("El componente modal ha finalizado");
    setTimeout(() => {
      this.dialogRef.close();
    }, 4000); // Cierra el modal después de 1 minuto (60,000 milisegundos)
  }

}
