package com.example;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.domains.entities.Actor;
import com.example.infrastructure.repositories.IActorRepository;

import antlr.collections.List;
import net.bytebuddy.agent.builder.AgentBuilder.LambdaInstrumentationStrategy;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	
	@Value("${spring.datasource.username}")
	String name;
	
	@Autowired
	IActorRepository dao;
	
	@Override
	public void run(String... args) throws Exception {//ejecuta esto antes del main
		
		Optional<Actor> a = dao.findById(1);
		//Actor o = dao.getById(1);
		
		if(a.isPresent()) {
			
		System.out.println("Optional "+a.get());
		
		
		}else {
			System.out.println("No encontrado");
		}
		
		System.out.println("Soy "+ name);
		
		Actor actor = new Actor(0,"pepito","grillo");
		actor.setFirstName(actor.getFirstName().toUpperCase());
		dao.save(actor);
		
		dao.findAll().forEach(System.out::println);
		
		
	}

}
