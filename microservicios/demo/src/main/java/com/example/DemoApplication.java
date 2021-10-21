package com.example;

import java.util.Optional;

import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.domains.contracts.services.IActorService;
import com.example.domains.contracts.services.ICategoryService;
import com.example.domains.entities.Actor;
import com.example.domains.entities.Category;
import com.example.domains.entities.Film;
import com.example.domains.entities.dtos.ActorDTO;
import com.example.domains.entities.dtos.CategoryDTO;
import com.example.domains.entities.dtos.IActorShort;
import com.example.infrastructure.repositories.IActorRepository;
import com.example.infrastructure.repositories.ICategoryRepository;
import com.example.ioc.Servicio;

import ch.qos.logback.core.joran.conditional.IfAction;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

//	@Value("${spring.datasource.username}")
//	String name;
//	
	@Autowired
	IActorRepository dao;

	@Autowired
	ICategoryRepository daoC;

	@Autowired
	IActorService srv;
	
	@Autowired
	ICategoryService srvC;

	@Override
	public void run(String... args) throws Exception {// ejecuta esto antes del main

//		Optional<Actor> a = dao.findById(1);
//		//Actor o = dao.getById(1);
//		
//		if(a.isPresent()) {
//			
//		System.out.println("Optional "+a.get());
//		
//		
//		}else {
//			System.out.println("No encontrado");
//		}
//		
//		System.out.println("Soy "+ name);
//		
//		Actor actor = new Actor(0,"pepito","grillo");
//		actor.setFirstName(actor.getFirstName().toUpperCase());
		// dao.save(actor);

		// dao.findAll().forEach(System.out::println);
//		srv.deleteById(203);
//		srv.deleteById(204);
//		srv.deleteById(205);

		// srv.getAll().forEach(System.out::println);

//		var fuera = new ActorDTO(202, "pepito Modificado", "grillo");
//		System.out.println(srv.modify(ActorDTO.from(fuera)));
//		
//		srv.getAll().forEach(Item->System.out.println(ActorDTO.from(Item))); //lee todo y lo combierte a dto
		// srv.modify(new Actor(333));
		// dao.findByactorIdNotNull().forEach(System.out::println);
		// dao.findByactorIdNotNull().forEach(Item->System.out.println(item.getNombreCompleto()));

	//	dao.findByActorIdNotNull(IActorShort.class).forEach(item -> System.out.println(item.getNombreCompleto()));
		
	//	dao.findByActorIdNotNull(ActorDTO.class).forEach(item -> System.out.println(item));
		
	//	dao.findByActorIdNotNull(Actor.class).forEach(item -> System.out.println(item));
		
		
//		Actor actor = new Actor(0,"","");
//			if(actor.isInvalid())
//				actor.getErrors().forEach(item->
//				System.out.println(item.getPropertyPath()+" : " + item.getMessage()));
//			else {
//				System.out.println("Valido");
//			}
		
		Category category = new Category(0,"name");
	/*	if(category.isInvalid())
			category.getErrors().forEach(item->
			System.out.println(item.getPropertyPath()+" : " + item.getMessage()));
		else {
			System.out.println("Valido");*/
			srvC.add(category);
			//daoC.findByCategoryIdNotNull(CategoryDTO.class).forEach(item -> System.out.println(item));

		
			//dao.save(actor);
		//	srv.add(actor);
	}

}
