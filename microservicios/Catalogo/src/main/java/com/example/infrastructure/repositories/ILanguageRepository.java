package com.example.infrastructure.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.domains.entities.Language;


public interface ILanguageRepository extends JpaRepository<Language, Integer> {

	List<Language> findByLastUpdateGreaterThan(LocalDate fecha);
	
	<T> List<T> findByLanguageIdIsNotNull(Class<T> type);
	<T> Iterable<T> findByLanguageIdIsNotNull(Sort sort, Class<T> type);
	<T> Page<T> findByLanguageIdIsNotNull(Pageable pageable, Class<T> type);

}
