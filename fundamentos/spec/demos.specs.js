 /*describe('Demos de las pruebas', function(){
    describe('uno anidado', function(){
        it('suma 2 + 2',function(){
            let a = 2, b = 2;
            let rslt;

            rslt = suma(a, b)

            expect(rslt).toBe(4)
        })

        it('suma negativa',function(){
            let a = 2, b = -2;
            let rslt;

            rslt = suma(a, b)

            expect(rslt).toBe(0) 
          //  if(a != 2 || b != 2 || rslt != 0) {
          //      fail('No pasa ...')
          //  }
        })

        it('Esto queda pendiente')

        describe('sumas', function(){
            [[2,2,4], [-1,2,1],[2,-1,1],[0,0,0],['a','b','ab']].forEach(caso =>{
                it(`Suma ${caso[0]} mas ${caso[1]} debe ser ${caso[2]}`, function(){
                    expect(suma(caso[0],caso[1])).toBeCloseTo(caso[2],10) //el 10 son los decimales
                })
            });
        })
     
         //   [['a', 'b']].forEach(caso =>{
          //      it(`Suma erronea ${caso[0]} mas ${caso[1]}`, function(){
            //        expect(suma(caso[0],caso[1])).toThrow()
              //  })
            //});
       // })

        describe('divisiones', function(){
            [[4,2,2]].forEach(caso =>{
                it(`Division ${caso[0]} dividido ${caso[1]} debe ser ${caso[1]}`, function(){
                    expect(divide(caso[0],caso[1])).toBeCloseTo(caso[2],10) //el 10 son los decimales
                })
            })
        })
    })

    it('Este funciona siempre', function(){
        expect(true).toBeTruthy()
    })

    xit('Este falla siempre', function(){
        expect(true).not.toBeTruthy()
    })
})

fdescribe('Sintaxis', function(){
    describe('Ejemplos 1', () => {
        it('Operadores',()=>{
            a = 1
            b = 2
            expect(a = b).toBeTruthy()   // es verdadero
            expect(a = b).not.toBeTrue() //no es true
            a = 2
            b = '2'
            expect(a + b == 22).toBeTruthy()
            b = 2
            expect(a + b).toEqual(4)
            expect(a * b).toEqual(4)
        })
        
    });

})*/