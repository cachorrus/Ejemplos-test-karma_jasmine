import { mensaje } from './string';


describe('Pruebas de string', () => {

    it('Debe de retornar un string', () => {

        const respuesta = mensaje('Cachorro');
        expect( typeof respuesta ).toBe('string');

    });

    it('Debe de retornar un saludo con el nombre enviado', () => {

        const nombre = 'Cachorro';
        const respuesta = mensaje(nombre);
        expect( respuesta ).toContain(nombre);

    });

});


