package com.example.domains.entities.dtos;

import com.example.application.controller.DemosController;
import com.example.domains.entities.Category;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class CategoryDTO {

	@JsonProperty("id")
	private int categoryId;
	
	@JsonProperty("nombre")
	private String name;
	
	public static CategoryDTO from(Category source) {
		return new CategoryDTO(source.getCategoryId(),source.getName());
	}
	public static Category from(CategoryDTO source) {
		return new Category(source.getCategoryId(),source.getName());
	}
	
	@Data
	public static class Categorias {
		private int id;
		private String categoria;
	}
	
}
