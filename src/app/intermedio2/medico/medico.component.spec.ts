import { TestBed, ComponentFixture } from '@angular/core/testing';

import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';


describe('Medico component', () => {

    let componente: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>; // para navegor por el DOM tipo jquery :)

    beforeEach ( () => {

        TestBed.configureTestingModule({
            declarations: [ MedicoComponent ],
            providers: [ MedicoService],
            imports: [ HttpClientModule ]
        });

        fixture = TestBed.createComponent( MedicoComponent );
        componente = fixture.componentInstance;

    });

    it('Debe de crearse el componente', () => {
        expect( componente ).toBeTruthy();
    });

    it('Debe de retornar el nombre del médico', () => {

        const nombre = 'cachorrus';
        const res = componente.saludarMedico( nombre );

        expect( res ).toContain( nombre );
    });

});
