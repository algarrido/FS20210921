import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ActoresViewModelService } from './servicios.service';
@Component({
  templateUrl: 'actor.component.html'
})
export class ActoresComponent {
  public page: number = 0;
  constructor(protected vm: ActoresViewModelService) {

  }
  public get VM(): ActoresViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }

}

@Component({
  selector: 'app-actores-view',
  templateUrl: './actorView.component.html',
})

export class ActoresViewComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(
    protected vm: ActoresViewModelService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {}
  public get VM(): ActoresViewModelService {
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

@Component({
  selector: 'app-actores-add',
  templateUrl: './actorEdit.component.html',
})
export class ActoresAddComponent implements OnInit {
  constructor(protected vm: ActoresViewModelService) {}
  public get VM(): ActoresViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.add(); //new
  }
}
@Component({
  selector: 'app-actores-edit',
  templateUrl: './actorEdit.component.html',
})
export class ActoresEditComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(
    protected vm: ActoresViewModelService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {}
  public get VM(): ActoresViewModelService {
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
