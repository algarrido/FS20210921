import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services/common-services.module';
import { BLOG_COMPONENTES } from './componente.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { InplaceModule } from 'primeng/inplace';


@NgModule({
  declarations: [
    BLOG_COMPONENTES,
  ],
  imports: [
    CommonModule,FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule,NgxPaginationModule,InplaceModule,

  ],
  exports: [ BLOG_COMPONENTES ]
})
export class BlogModule { }
