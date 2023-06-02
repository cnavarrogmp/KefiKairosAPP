import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  randomData: { phrase: string, gifUrl: string };
  randomPhrase: string = '';
  randomGifUrl: string = '';

  constructor(private dataService: DataService) {}


    @Input() alertMessage: string = '';
    @Input() alertGifUrl: string = '';
    @Input() showAlert: boolean = false;

    ngOnInit() {
      this.randomData = this.dataService.getRandomData();
    }


}
