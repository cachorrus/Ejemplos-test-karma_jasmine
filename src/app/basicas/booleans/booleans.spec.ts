import { usuarioLoguedo } from './booleans';


describe('Prueba de booleans', () => {

    it('Debe de regresar true', () => {

        const resp = usuarioLoguedo();
        expect( resp ).toBeTruthy();

    });

});
