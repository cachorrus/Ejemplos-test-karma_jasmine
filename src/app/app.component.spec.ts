import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      schemas: [
        NO_ERRORS_SCHEMA // ignorar errores por selectores desconocidos <app-navbar>
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

  }));

  it('should create the app', async(() => {

    expect(component).toBeTruthy();

  }));

  it(`should have as title 'app'`, async(() => {

    expect(component.title).toEqual('app');

  }));

  it('Debe de tener el router-outlet', () => {

    const routerOutlet = fixture.debugElement.query( By.directive( RouterOutlet ) );

    expect(routerOutlet).not.toBeNull();

  });

});
