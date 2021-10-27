package com.example;


import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.oas.annotations.EnableOpenApi;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@SpringBootApplication
@EnableOpenApi
public class SwaggerConfig {

	@Bean
	public Docket api() {                
   	    return new Docket(DocumentationType.OAS_30)          
	      .select()
	      .apis(RequestHandlerSelectors.basePackage("com.example.application.controller"))
	      .paths(PathSelectors.ant("/**"))
	      .build()
	      .apiInfo(new ApiInfoBuilder()
	                .title("Microservicio: Catalogo de peliculas")
	                .description("Ejemplo de Microservicio utilizando la base de datos **Sakila**.")
	                .version("1.0")
	                .license("Apache License Version 2.0")
	                .contact(new Contact("Lidia", "http://www.example.com", "myeaddress@example.com"))
	                .build());
	}
}