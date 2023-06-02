import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent {

  @Output() activated = new EventEmitter<void>();

  constructor(){

  }

  activate() {
    this.activated.emit();
  }
  config(){

  }

}
