package com.example.infrastructure.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.domains.entities.Actor;
import com.example.domains.entities.Category;
import com.example.domains.entities.Film;
import com.example.domains.entities.Language;

public interface IFilmRepository extends JpaRepository<Film, Integer>{
	<T> List<T> findByFilmIdIsNotNull(Class<T> type);
	<T> Iterable<T> findByFilmIdIsNotNull(Sort sort, Class<T> type);
	<T> Page<T> findByFilmIdIsNotNull(Pageable pageable, Class<T> type);
	
	@Query("SELECT x.actor FROM FilmActor x WHERE x.film.filmId = ?1 ")
	List<Actor> getFilmActores(int id);
	
	@Query("SELECT x.language FROM Film x WHERE x.filmId = ?1 ")
	List<Language> getFilmLanguages(int id);
	
	@Query("SELECT x.category FROM FilmCategory x WHERE x.film.filmId = ?1 ")
	List<Category> getFilmCategory(int id);
}
