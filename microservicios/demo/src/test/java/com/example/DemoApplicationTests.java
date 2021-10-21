package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import com.example.ioc.Calculadora;
import com.example.ioc.Formato;
import com.example.ioc.Servicio;

@SpringBootTest
@ActiveProfiles("Test")
class DemoApplicationTests {
	
	@Autowired
	//@Qualifier("uno")
	Servicio srv;
	@Autowired
	Formato formato;
	
	@Test
	void inyeccionesTaza() {
		assertEquals("SOY UNA TAZA", srv.saluda());
		
	}

	@Test
	void inyeccionesTetera() {
		assertEquals("SOY UNA TAZA", srv.saluda());
		assertEquals("HOLA", formato.formatea("hola"));
		assertEquals(1, formato.getCont());

		assertEquals("Soy una tetera", srv.saluda());
	}
	
	@Nested
	class CalculadoraTest{
		
		@Mock
		Calculadora calculadora;
		
		@Test
		void contextLoads() {
			when(calculadora.suma(0, 0)).thenReturn(2.0); //sin necesidad de funcionamiento del metodo, interface
			when(calculadora.suma(1, 0)).thenReturn(5.0);
			assertEquals(2.0, calculadora.suma(0, 0));
			assertEquals(5.0, calculadora.suma(1, 0));

		}
	}
}
