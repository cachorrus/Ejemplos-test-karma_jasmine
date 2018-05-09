import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {

        component.leyenda = 'Progreso de carga';

        fixture.detectChanges(); // Trigger a change detection cycle for the component.

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect( elem.innerHTML ).toContain('Progreso de carga');

    });

    it('Debe de mostrar en el Input el valor del progreso', () => {

        component.cambiarValor(5);
        fixture.detectChanges();

        fixture.whenStable().then( () => { // se usa cuando detectChanges ha sido llamada

            const input: HTMLInputElement = fixture.debugElement.query( By.css('input') ).nativeElement;

            expect( input.value ).toBe('55');

        });

    });

    it('Debe de haber dos botones para incrementar/decrementar', () => {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );

        expect(botones.length).toBe(2);

    });

    it('Progreso debe de incrementar/decrementar en 5, con un click en el botón', () => {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );

        botones[0].triggerEventHandler('click', null);
        expect( component.progreso ).toBe(45); // primero: se ejecuta el boton decrementar

        botones[1].triggerEventHandler('click', null);
        expect( component.progreso ).toBe(50); // segundo: se ejecuta el boton incrementar

    });

    it('Debe de cambiar el progreso en la vista cuando se haga click en el boton decrementar', () => {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
        botones[0].triggerEventHandler('click', null);

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;
        fixture.detectChanges();

        const contenidoH3 = elem.innerHTML.split('-'); // separar el contendio de h3 pot '-'

        expect( contenidoH3[1] ).toContain('45'); // posicion 1 del arreglo hace referencia al progreso

    });

});
