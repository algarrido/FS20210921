package com.example.domains.entities.dtos;

import com.example.domains.entities.Language;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class LanguageDTO {
	
	@JsonProperty("language_id")
	private int languageId;
	
	@JsonProperty("nombre")
	private String name;
	
	
	public static LanguageDTO from(Language source) {
		return new LanguageDTO(source.getLanguageId(),source.getName());
	}
	public static Language from(LanguageDTO source) {
		return new Language(source.getLanguageId(),source.getName());
	}
}