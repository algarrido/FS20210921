package com.examples;

import static org.junit.jupiter.api.Assertions.*;

import javax.xml.validation.Validator;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EmptySource;
import org.junit.jupiter.params.provider.NullSource;
import org.junit.jupiter.params.provider.ValueSource;

class DniTest {
	Dni dni;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		dni = new Dni();

	}

	@AfterEach
	void tearDown() throws Exception {
	}

	
	@Test
	@DisplayName("Comprobacion DNI")
	void compruebaDNI() {
		assertAll("DNIs",
				
				() -> assertTrue(dni.DNI("20621513N"),"1.- DNI true"),
				() -> assertFalse(dni.DNI("2062113N"),"2.- DNI false - 8 dígitos"),
				() -> assertFalse(dni.DNI("20621513Y"),"3.- DNI false - Letra inválida"),
				() -> assertFalse(dni.DNI(""),"4.- DNI false - Vacio")
				//() -> assertThrows(Exception.class, () -> dni.DNI(null))

			);
		
	}
	
	/*
	 * EJEMPLO JAVIER
	 */
		@ParameterizedTest(name="NIF Valido: {0}")
		@NullSource
		@ValueSource(strings = { "12345678z", "12345678Z", "1234S" })
		void valid_test(String value) {
			assertTrue(dni.isValid(value));
		}
		
		@ParameterizedTest(name="NIF Invalido: {0}")
		@EmptySource
		@ValueSource(strings = { "12345678", "Z", "1234J", "''" })
		void invalid_test(String value) {
			assertFalse(dni.isValid(value));
		}

}
