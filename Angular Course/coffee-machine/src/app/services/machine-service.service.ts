import { Injectable } from '@angular/core';
import { IMachineOperation } from '../machine/imachine-operation';
import { ICoffee } from '../model/icoffee';

export class MachineService {

  constructor(private machineOperation: IMachineOperation) { }

  prepareCoffee(type: string): void{
    this.machineOperation.prepareCoffee(type);
  }

}
