package com.example;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.example.domains.contracts.services.ICategoryService;
import com.example.domains.contracts.services.ILanguageService;
import com.example.domains.entities.Category;
import com.example.domains.entities.Language;
import com.example.domains.entities.dtos.CategoryDTO;
import com.example.domains.entities.dtos.FilmDTO;
import com.example.domains.entities.dtos.LanguageDTO;
import com.example.infrastructure.repositories.ICategoryRepository;
import com.example.infrastructure.repositories.IFilmRepository;
import com.example.infrastructure.repositories.ILanguageRepository;
import com.example.ioc.Servicio;

import ch.qos.logback.core.joran.conditional.IfAction;
import io.swagger.annotations.Api;
import springfox.boot.starter.autoconfigure.SpringfoxConfigurationProperties.OpenApiConfigurationProperties;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.oas.annotations.EnableOpenApi;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@SpringBootApplication
@EnableOpenApi
public class DemoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

//	@Value("${spring.datasource.username}")
//	String name;
//	
	
	@Autowired
	ICategoryRepository daoC;

	@Autowired
	ILanguageRepository daoL;

	@Autowired
	IFilmRepository daoF;

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
		
		//Category category = new Category(0,"name");
	/*	if(category.isInvalid())
			category.getErrors().forEach(item->
			System.out.println(item.getPropertyPath()+" : " + item.getMessage()));
		else {
			System.out.println("Valido");*/
			//srvC.add(category);
		
			//daoC.findByCategoryIdNotNull(CategoryDTO.class).forEach(item -> System.out.println(item));

		
			//dao.save(actor);
		//	srv.add(actor);
		//Language l = new Language(0,"name");
		//srvL.add(l);
		 //srvL.getAll().forEach(System.out::println);
		 //srvL.getAll().forEach(Item->System.out.println(LanguageDTO.from(Item)));
	//	 daoL.findByLanguageIdIsNotNull(LanguageDTO.class).forEach(item -> System.out.println(item));
	//	 daoF.findByFilmIdIsNotNull(FilmDTO.class).forEach(item -> System.out.println(item));

	}
//	@Bean
//	public Docket api() {                
//   	    return new Docket(DocumentationType.OAS_30)          
//	      .select()
//	      .apis(RequestHandlerSelectors.basePackage("com.example.application.resource"))
//	      .paths(PathSelectors.ant("/**"))
//	      .build()
//	      .apiInfo(new ApiInfoBuilder()
//	                .title("Microservicio: Catalogo de peliculas")
//	                .description("Ejemplo de Microservicio utilizando la base de datos **Sakila**.")
//	                .version("1.0")
//	                .license("Apache License Version 2.0")
//	                .contact(new Contact("Lidia", "http://www.example.com", "myeaddress@example.com"))
//	                .build());
//   	 
//     
//      
//     
//	}
}
