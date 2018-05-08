import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from } from 'rxjs/observable/from';
import { empty } from 'rxjs/observable/empty';
import { _throw } from 'rxjs/observable/throw';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: Debe de cargar los médicos', () => {

        const medicos = ['medico1', 'medico2', 'medico3'];

        spyOn(servicio, 'getMedicos').and.callFake( () => {

            return from( [ medicos ]);

        });

        componente.ngOnInit();

        expect( componente.medicos.length ).toBeGreaterThan(0);

    });

    it('Debe de llamar al servidor para agregar un médico', () => {

        const espia = spyOn(servicio, 'agregarMedico').and.callFake( merdico => {
            return empty();
        });

        componente.agregarMedico();

        expect( espia ).toHaveBeenCalled();

    });

    it('Debe de agregar un nuevo médico al arreglo de médicos', () => {

        const medico = { id: 1, nombre: 'Mario' };

        spyOn(servicio, 'agregarMedico').and.returnValue( from( [ medico ] ) );

        componente.agregarMedico();

        expect( componente.medicos.indexOf( medico ) ).toBeGreaterThanOrEqual(0);

    });

    it('Si falla agregarMedico, la propiedad mensajeError debe ser igual al error del servicio', () => {

        const miError = 'Error al agregar el médico';

        spyOn(servicio, 'agregarMedico').and.returnValue( _throw( miError ) );

        componente.agregarMedico();

        expect( componente.mensajeError ).toBe(miError);

    });

    it('Debe de llamar borrarMedico para borrar un médico', () => {

        spyOn( window, 'confirm').and.returnValue( true ); // simular la funcionalidad confirm

        const espia = spyOn(servicio, 'borrarMedico').and.returnValue( empty());

        componente.borrarMedico('1');

        expect(espia).toHaveBeenCalledWith('1');

    });

    it('NO debe de llamar borrarMedico para borrar un médico', () => {

        spyOn( window, 'confirm').and.returnValue( false ); // simular la funcionalidad confirm

        const espia = spyOn(servicio, 'borrarMedico').and.returnValue( empty());

        componente.borrarMedico('1');

        expect(espia).not.toHaveBeenCalledWith('1');

    });


});
