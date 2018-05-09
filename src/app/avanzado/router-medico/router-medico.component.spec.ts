import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import { empty } from 'rxjs/observable/empty';
import { Subject } from 'rxjs/Subject';

class FakeRouter {
  navigate(params) {}
}

class FakeActivatedRoute {
  // params: Observable<any> =  empty();

  private subject = new Subject();

  push( valor ) {
    this.subject.next( valor );
  }

  get params() {
    return this.subject.asObservable();
  }

}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar a la ruta medicos/:id cuando se guarde', () => {

    const ruta = TestBed.get(Router);

    const spy = spyOn( ruta, 'navigate' );

    component.guardarMedico();

    expect( spy ).toHaveBeenCalledWith( ['/medicos', '654']);

  });

  it('debe de asignar el id = nuevo', () => {

    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);

    activatedRoute.push( { id: 'nuevo' } );

    expect(component.id).toBe('nuevo');

  });

});
