import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services/common-services.module';
import { CONTACTOS_COMPONENTES } from './componente.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    CONTACTOS_COMPONENTES,
  ],
  imports: [
    CommonModule,FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule,NgxPaginationModule,
  ],
  exports: [ CONTACTOS_COMPONENTES ]
})
export class ContactosModule { }
