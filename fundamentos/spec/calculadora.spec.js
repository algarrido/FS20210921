fdescribe('Calculadora', function(){
    describe('Suma', function(){
        it('suma 2 + 2',function(){
             
             let a = 2, b = 2;
             let rslt;
             rslt = suma(a,b)
             console.log("suma: "+rslt)
             expect(rslt).toBe(4)

        })
    })

    describe('Resta', function(){
        it('resta 2 - 2',function(){
             
             let a = 2, b = 2;
             let rslt;
             rslt = resta(a,b)
             console.log("resta: "+rslt)
             expect(rslt).toBe(0)

        })
    })

    describe('Divide', function(){
        it('divide 2 / 2',function(){
             
             let a = 2, b = 2;
             let rslt;
             rslt = divide(a,b)
             console.log("dividido: "+rslt)
             expect(rslt).toBe(1)

        })
    })

    describe('Multiplicado', function(){
        it('multiplica 2 * 2',function(){

             let a = 2, b = 2;
             let rslt;
             rslt = multiplica(a,b)
             console.log("multiplicado: "+rslt)
             expect(rslt).toBe(4)

        })
    })

    describe('Signos', function(){

        it('definir teclas',function(){
            let signo;
            signo = handleSymbol("C");
            let c;
            c = document.textContent = "C";
            console.log("c: "+c); 

            expect(c).toBe(signo)    
        })

    describe("Signo = ", function () {
        it('igual', () => {
         
        })
    })
      
    })
})