package com.examples;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

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

}
