package com.example.infrastructure.repositories;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import com.example.domains.entities.Actor;

@RepositoryRestResource(exported = false)
public interface IActorRepository extends JpaRepository<Actor, Integer> {
	// crea el prototipo de las consultas aqui

	//List<Actor> findByFirstNameStartingWithOrderByLastNameDesc(String prefijo);
	
	//List<Actor> findByLastUpdateGreaterThan(LocalDate fecha);

//	List<ActorDTO> findByactorIdNotNull();
//	List<ActorShort> findByactorIdNotNull();
//	
	<T> List<T> findByActorIdIsNotNull(Class<T> type);
	<T> Iterable<T> findByActorIdIsNotNull(Sort sort, Class<T> type);
	<T> Page<T> findByActorIdIsNotNull(Pageable pageable, Class<T> type);
	//<T> List<T> findByActorIdNotNull(Class<T> type);
	
//	@Query("FROM Actor a WHERE a.lastUpdate > '2021-10-21'")
//	List<Actor> laMia();
//	
//	@Query("FROM Actor a WHERE a.lastUpdate > ?0")
//	List<Actor> laMia(LocalDate fecha);
}
