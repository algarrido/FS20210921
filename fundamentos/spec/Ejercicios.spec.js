fdescribe('Ejercicios', () =>{
    describe('Ejercicio 1', () =>{

        it('Es entero', ()=> {

            let enteroPositivo = numAleatorio();
            expect(enteroPositivo).toBeTruthy();

        })

    })

    describe('Ejercicio 2', () =>{

        it('Es entero positivo', ()=> {

            let enteroPositivo = 50;
            expect(enteroPositivo).toBeTruthy();

        })

        it('Es negativo', ()=> {

            let negativo = -50;
            expect(negativo).toBeFalsy;

        })

        it('Es letra', ()=> {

            let letra = '-50';
            expect(letra).toBeFalse;

        })

        it('Es indefinido', ()=> {

            let ind = undefined;
            expect(ind).toBeFalsy;

        })


    })

    describe('Ejercicio 3', () =>{
        
        it('nElementos', ()=> {
            
            let size = 5;

            let resul = devolverArray(1,size);

            expect(resul).toHaveSize(size);

        })

    })

    describe('Ejercicio 5', () =>{
        
        it('DNI valido', ()=> {

            let dniValido = validaDNI("20621513N");
            expect(dniValido).toBeTrue();

        })

        it('DNI invalido', ()=> {

            let dniValido = validaDNI("20621513Y");
            expect(dniValido).toBeFalse();

        })

        it('DNI invalido2', ()=> {

            let dniValido = validaDNI("N");
            expect(dniValido).toBeFalse();

        })

    })

    describe('Ejercicio 6', () =>{
        
        it('palindromo correcto', ()=> {

            let p = palindromo("oso");
            expect(p).toBeTrue;

        })

        it('palindromo incorrecto', ()=> {

            let p = palindromo("Lidia");
            expect(p).toBeTrue;

        })
    })
})
