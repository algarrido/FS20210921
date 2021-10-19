package com.examples;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class CalculadoraTest {
	Calculadora calc;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		// crea una nueva instancia para cada prueba (test)
		calc = new Calculadora();
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	void testSumar() {
		assertEquals(4, calc.sumar(2, 2));

	}
//
	@Nested
	@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
	class Divisiones {
		@Test
		void test_Divide_Double_Double() {
			
			//assertThrows(Exception.class, () -> calc.divide(1.0, 0));
			
			//var d = 1 / 0;
			
			assertAll("Divisiones Double",
				() -> assertEquals(0.5, calc.divide(1.0, 2.0), "Primera"),
				//() -> assertEquals(0.5, calc.divide(1, 2), "Entera"),
				() -> assertEquals(Double.POSITIVE_INFINITY, calc.divide(1.0, 0))
			);
		}

		@Test
		@DisplayName("Division entera")
		void testDivideIntInt() {
			assertEquals(0, calc.divide(1, 2), "la primera");
			
			//assertEquals(0, calc.divide(1, 0), "la segunda");
			//assertEquals(0, calc.divide(0, 0), "la tercera");

			assertThrows(Exception.class, () -> calc.divide(1, 0));

		}
	}

}
