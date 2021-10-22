package com.example.infrastructure.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.domains.entities.Category;
import com.example.domains.entities.dtos.CategoryDTO;

public interface ICategoryRepository extends JpaRepository<Category, Integer>{

		// crea el prototipo de las consultas aqui

		//List<Category> findByFirstNameStartingWithOrderByLastNameDesc(String prefijo);
		
	
		List<Category> findByLastUpdateGreaterThan(LocalDate fecha);

		List<CategoryDTO> findBycategoryIdNotNull();
		//List<ActorShort> findByactorIdNotNull();
		
		<T> List<T> findByCategoryIdNotNull(Class<T> type);
		
		@Query("FROM Category a WHERE a.lastUpdate > '2021-10-21'")
		List<Category> laMia();
//		
		@Query("FROM Category a WHERE a.lastUpdate > ?0")
		List<Category> laMia(LocalDate fecha);
	
}
