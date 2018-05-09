import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, Router, ActivatedRoute } from '@angular/router';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('Debe de tener un routerLink a medicos', () => {

    const rutas = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref ));

    // console.log(rutas);

    const existe = rutas.some( (val, i) => { // some es igual al forEach con la excepción de poder hacer break con return true

      if (val.attributes.routerLink === '/medicos') {
        return true; // break
      }

    });

    expect( existe ).toBeTruthy();

  });
});
