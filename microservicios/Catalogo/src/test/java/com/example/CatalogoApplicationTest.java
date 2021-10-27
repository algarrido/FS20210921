package com.example;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.mockito.internal.verification.api.VerificationDataInOrderImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.example.application.controller.ActorController;
import com.example.domains.contracts.services.IActorService;
import com.example.domains.contracts.services.ILanguageService;
import com.example.domains.entities.Actor;
import com.example.domains.entities.Language;
import com.example.domains.services.ActorServiceImpl;
import com.example.exceptions.DuplicateKeyException;
import com.example.exceptions.InvalidDataException;
import com.example.exceptions.NotFoundException;
import com.example.infrastructure.repositories.IActorRepository;
import com.example.infrastructure.repositories.ICategoryRepository;
import com.example.infrastructure.repositories.IFilmRepository;
import com.example.infrastructure.repositories.ILanguageRepository;
import com.mysql.cj.util.DnsSrv.SrvRecord;

import lombok.experimental.var;

class CatalogoApplicationTest {
	@Autowired
	ICategoryRepository daoC;

	@Autowired
	ILanguageRepository daoL;

	@Autowired
	IFilmRepository daoF;
	
	@Autowired
	ILanguageService srv;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
	}

	@AfterEach
	void tearDown() throws Exception {
	}


	@Nested
	class Entidad {
		@Test
		public void actor_valido() {
			Actor actor = new Actor(1,"Pepito","Grillo");
			assertTrue(actor.isValid());
		}
		@Test
		public void actor_inValido() {
			Actor actor = new Actor(1,"","Grillo");
			assertTrue(actor.isInvalid());
		}
	}
	@Nested
	class Repositorio {
		
		@Autowired
		IActorRepository dao;
		
		@Test
		public void findByFirstNameStartingWithOrderByLastNameDesc() {
			var rslt = dao.findByFirstNameStartingWithOrderByLastNameDesc("a");
			assertNotNull(rslt);
			
		}
		
	}
	
	@Nested
	class ServicioDominio {
		
	@MockBean
	IActorRepository dao;
	@Autowired
	ActorServiceImpl srv;
		
		@Test
		public void getAll() {

			when(dao.findAll()).thenReturn(List.of(new Actor(1,"Pepito","Grillo")));
			assertEquals(1, srv.getAll());
			
		}
		
	}
	@Nested
	class Controller {
		
	@MockBean
	IActorService srv;
	@Autowired
	ActorController rest;
		
		@Test
		public void getAll() {

			when(srv.getAll()).thenReturn(List.of(new Actor(1,"Pepito","Grillo")));
			assertEquals(1, rest.getAll(null));
			
		}
		
	}
	
}
