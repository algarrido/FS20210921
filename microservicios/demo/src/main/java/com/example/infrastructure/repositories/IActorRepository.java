package com.example.infrastructure.repositories;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.domains.entities.Actor;

public interface IActorRepository extends JpaRepository<Actor, Integer> {
	// crea el prototipo de las consultas aqui

	List<Actor> findByFirstNameStartingWithOrderByLastNameDesc(String prefijo);
	
	List<Actor> findByLastUpdateGreaterThan(LocalDate fecha);

	
	@Query("FROM Actor a WHERE a.lastUpdate > '2021-10-21'")
	List<Actor> laMia();
	
	@Query("FROM Actor a WHERE a.lastUpdate > ?0")
	List<Actor> laMia(LocalDate fecha);
}
