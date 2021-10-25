package com.example.application.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.domains.entities.Actor;
import com.example.domains.entities.dtos.ActorDTO;

@RestController
public class DemosController {

	@GetMapping("/params/{id}")
	public String cotilla(
	        @PathVariable String id,
	        @RequestParam(required=false,defaultValue = "valor por defecto") String nom,
	        @RequestHeader("Accept-Language") String language) { 
	    StringBuilder sb = new StringBuilder();
	    sb.append("id: " + id + "\n");
	    sb.append("nom: " + nom + "\n");
	    sb.append("language: " + language + "\n");
	    return sb.toString();
	}
	
	@GetMapping(path = "/params/{id}",produces= { "text/xml" })
	public String cotillaXML(
	        @PathVariable String id,
	        @RequestParam(required=false,defaultValue = "valor por defecto") String nom,
	        @RequestHeader("Accept-Language") String language) { 
	    StringBuilder sb = new StringBuilder();
	    sb.append("<raiz>\n<id>" + id + "</id>\n");
	    sb.append("<nom>" + nom + "</nom>\n");
	    sb.append("<language>" + language + "</language>\n</raiz>\n");
	    return sb.toString();
	}
	
	@GetMapping(path = "/salida")
	@ResponseStatus(code = HttpStatus.OK)
	public ActorDTO salida() {
		return ActorDTO.from(new Actor(0,"Pepito","Grillo"));
	}
	
	@PostMapping(path = "/salida")
	@ResponseStatus(code = HttpStatus.ACCEPTED)
	public ActorDTO salidaPost(@RequestBody ActorDTO item) {
		item.setFirstName(item.getFirstName().toUpperCase());
		return item;
	}
	
	
}