import { incrementar } from './numeros';


describe('Prueba de números', () => {

    it('Debe de retornar 100, si el numero enviado es mayor que 100', () => {

        const resp = incrementar(500);
        expect( resp ).toBe(100);

    });

    it('Debe de retornar el numero ingresado + 1 si es menor o igual 100', () => {

        const numero = 80;
        const resp = incrementar(numero);
        expect( resp ).toBe(numero + 1);

    });

});
