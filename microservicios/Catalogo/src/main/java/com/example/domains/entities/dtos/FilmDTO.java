package com.example.domains.entities.dtos;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;

import com.example.domains.entities.Actor;
import com.example.domains.entities.Film;
import com.example.domains.entities.FilmActor;
import com.example.domains.entities.FilmCategory;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class FilmDTO {

	@JsonProperty("id")
	private int filmId;
	
	@JsonProperty("title")
	private String filmTitle;
	
	@JsonProperty("description")
	private String filmDescription;
	
	@JsonProperty("year")
	private Short filmYear;
	
	public static Film from(FilmDTO source) {
		return new Film(source.getFilmId(),source.getFilmTitle(),source.getFilmDescription(),source.getFilmYear());
	}
	
	public static FilmDTO from(Film source) {
		return new FilmDTO(source.getFilmId(),source.getTitle(),source.getDescription(),source.getReleaseYear());
	}
	
}
