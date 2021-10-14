import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LibrosViewModelService } from './servicios.service';

@Component({
  selector: 'app-libros',
  templateUrl: './tmpl-anfitrion.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class LibrosComponent implements OnInit {
  constructor(protected vm: LibrosViewModelService) {}
  public get VM(): LibrosViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }
}
@Component({
  selector: 'app-libros-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class LibrosListComponent implements OnInit {
  public page: number = 0;
  constructor(protected vm: LibrosViewModelService) {}
  public get VM(): LibrosViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list(); //nuevo añadido
  }
}
@Component({
  selector: 'app-libros-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class LibrosAddComponent implements OnInit {
  constructor(protected vm: LibrosViewModelService) {}
  public get VM(): LibrosViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.add(); //new
  }
}
@Component({
  selector: 'app-libros-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class LibrosEditComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(
    protected vm: LibrosViewModelService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {}
  public get VM(): LibrosViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params?.get('id') ?? '');
      if (id) {
        this.vm.edit(id);
      } else {
        this.router.navigate(['/404.html']);
      }
    });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}

@Component({
  selector: 'app-libros-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class LibrosViewComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(
    protected vm: LibrosViewModelService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {}
  public get VM(): LibrosViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params?.get('id') ?? '');
      if (id) {
        this.vm.view(id);
      } else {
        this.router.navigate(['/404.html']);
      }
    });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}

export const LIBROS_COMPONENTES = [
  LibrosComponent,
  LibrosListComponent,
  LibrosAddComponent,
  LibrosEditComponent,
  LibrosViewComponent,
];
