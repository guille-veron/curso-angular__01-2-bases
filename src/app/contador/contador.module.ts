import { NgModule } from '@angular/core';
import { ContadorComponente } from './contador/contador.component';



@NgModule({
  declarations: [ContadorComponente],
  exports:[ContadorComponente],
  imports: []
})
export class ContadorModule { }
