import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  beforeEach(async(() => {

    // No es necesario que sea async por que se está usuando webpack(todos los archivos están en la misma ruta)

    // TestBed.configureTestingModule({
    //  declarations: [ HospitalComponent ]
    // })
    // .compileComponents();

  }));

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ HospitalComponent ]
    });

    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crear el HospitalComponent', () => {
    expect(component).toBeTruthy();
  });
});
