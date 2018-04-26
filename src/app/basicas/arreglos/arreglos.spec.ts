import { obtenerRobots } from './arreglos';


describe('Pruba de arreglos', () => {

    it('Debe de retornar un arreglo', () => {

        const resp = obtenerRobots();
        expect( typeof resp ).toBe('object');

    });

    it('Debe de retornar al menos 3 robots', () => {

        const resp = obtenerRobots();
        expect( resp.length ).toBeGreaterThanOrEqual(3);

    });

    it('Debe de existir Megaman y Robocop', () => {

        const resp = obtenerRobots();
        expect( resp ).toContain('Megaman');
        expect( resp ).toContain('Robocop');

    });

});
