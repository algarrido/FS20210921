package com.example.application.proxies;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.example.domains.entities.dtos.CategoryDTO.Categorias;
import com.example.domains.entities.dtos.FilmShort;

@FeignClient(name="catalogo-service")
public interface CatalogoProxy {

	@GetMapping
	String getRaiz();
	
	@GetMapping
	(path = "/categorias")
	List<Categorias> getCategorias();
	
	@GetMapping
	(path = "/categorias/{id}")
	Categorias getCategoria(@PathVariable int id);
	
	@PostMapping(path = "/categorias")
	void addCategoria(Categorias item);
	
	@PutMapping(path = "/categorias/{id}")
	void modifyCategoria(@PathVariable int id,Categorias item);
	
	@DeleteMapping(path = "/categorias/{id}")
	void deleteCategoria(@PathVariable int id);
	
	@GetMapping(path = "/categorias/{id}/peliculas")
	List<FilmShort> getPeliculasDeLaCategoria(@PathVariable int id);
	
	
	
	
}
