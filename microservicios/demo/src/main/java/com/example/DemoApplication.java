package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.infrastructure.repositories.IActorRepository;

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
	public void run(String... args) throws Exception {
		//ejecuta esto antes del main
		System.out.println("Soy "+ name);
		
		//System.out.println("UNO -"+dao.getById(1));
		dao.findAll().forEach(System.out::println);
	}

}
