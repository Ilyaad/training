import { Component, OnInit } from '@angular/core';
import { MachineService } from '../services/machine-service.service';
import { ICoffee } from '../model/icoffee';

@Component({
  selector: 'app-body-button',
  templateUrl: './body-button.component.html',
  styleUrls: ['./body-button.component.css']
})
export class BodyButtonComponent implements OnInit {

  constructor(private service: MachineService) { }

  ngOnInit() {
  }

  onSelectCoffee(type: string){

    this.service.prepareCoffee(type);

  }

}
