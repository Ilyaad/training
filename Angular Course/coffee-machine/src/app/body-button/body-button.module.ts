import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MachineService } from '../services/machine-service.service';
import { IMachineOperation } from '../model/imachine-operation';
import { ICoffee } from '../model/icoffee';
import { Expresso } from '../model/expresso';
import { Latte } from '../model/latte';
import { Capuccino } from '../model/capuccino';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: MachineService,

      useFactory() {

        const implementation: IMachineOperation = {

          prepareCoffee: (type: string): void => {
            
            let coffeeChosen : ICoffee;

            switch (type) {
                case 'Expresso':
                    coffeeChosen = new Expresso();
                    break;
                case 'Latte':
                    coffeeChosen = new Latte();
                    break;
                /*case 'Capuccino':
                    coffeeChosen = new Capuccino();
                    break;*/    
                default:
                    break;
            }
            console.log("Your " + coffeeChosen.name + " is ready.");
          }
        };
        return new MachineService(implementation);
      }
    },
  ],
  declarations: [ ]
})
export class MachineModule { }
