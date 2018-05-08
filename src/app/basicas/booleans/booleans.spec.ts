import { usuarioLoguedo } from './booleans';


xdescribe('Prueba de booleans', () => {

    it('Debe de regresar true', () => {

        const resp = usuarioLoguedo();
        expect( resp ).toBeTruthy();

    });

});
