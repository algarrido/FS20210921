package com.example.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.application.proxies.CatalogoProxy;
import com.example.domains.entities.Actor;
import com.example.domains.entities.dtos.ActorDTO;
import com.example.domains.entities.dtos.CategoryDTO.Categorias;
import com.example.domains.entities.dtos.FilmShort;

import lombok.Data;

@RestController
public class DemosController {

	@GetMapping("/params/{id}")
	public String cotilla(@PathVariable String id,
			@RequestParam(required = false, defaultValue = "valor por defecto") String nom,
			@RequestHeader("Accept-Language") String language) {
		StringBuilder sb = new StringBuilder();
		sb.append("id: " + id + "\n");
		sb.append("nom: " + nom + "\n");
		sb.append("language: " + language + "\n");
		return sb.toString();
	}

	@GetMapping(path = "/params/{id}", produces = { "text/xml" })
	public String cotillaXML(@PathVariable String id,
			@RequestParam(required = false, defaultValue = "valor por defecto") String nom,
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
		return ActorDTO.from(new Actor(0, "Pepito", "Grillo"));
	}

	@PostMapping(path = "/salida")
	@ResponseStatus(code = HttpStatus.ACCEPTED)
	public ActorDTO salidaPost(@RequestBody ActorDTO item) {
		item.setFirstName(item.getFirstName().toUpperCase());
		return item;
	}

	@Autowired
	@Qualifier("directo")
	RestTemplate rest;

	@Autowired
	@Qualifier("balanceado")
	RestTemplate restLB;

	@Autowired
	CatalogoProxy proxy;

	@GetMapping("/categorias")
	public List<Categorias> traeDatos() {
//		ResponseEntity<List<Categorias>> response = rest.exchange("http://localhost:8010/categorias", 
//				HttpMethod.GET,
//				HttpEntity.EMPTY, 
//				new ParameterizedTypeReference<List<Categorias>>() {}
//		);
//		return response.getBody();
		return proxy.getCategorias();
	}

	@GetMapping("/categorias/{id}")
	public Categorias traeDatos(@PathVariable int id) {
		// return rest.getForObject("http://host.docker.internal:8010/categorias/{id}",
		// Categorias.class, id);
		return proxy.getCategoria(id);
	}

	@GetMapping("/servicio")
	public String traeHateoas() {
		return rest.getForObject("lb://catalogo-service/", String.class);
	}

	@GetMapping("/categorias/{id}/pelis")
	public List<FilmShort> traePelis(@PathVariable int id) {
//		return rest.getForObject("http://host.docker.internal:8010/categorias/{id}", Categoria.class, id);
		return proxy.getPeliculasDeLaCategoria(id);
	}

	@GetMapping("/directo")
	public String traeDirecto() {
		return rest.getForObject("http://host.docker.internal:8010/", String.class);
	}

	@GetMapping("/balanceado")
	public String traeBalanceado() {
//		return restLB.getForObject("lb://catalogo-service/", String.class);
		return proxy.getRaiz();
	}

	@Value("${jwt.secret}")
	String secreto;

	@GetMapping("/config")
	public String traeConfig() {
		return secreto;
	}

}
