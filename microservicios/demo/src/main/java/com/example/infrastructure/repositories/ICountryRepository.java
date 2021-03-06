package com.example.infrastructure.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import com.example.domains.entities.Country;

@RepositoryRestResource(path="paises", itemResourceRel = "pais", collectionResourceRel = "paises")
public interface ICountryRepository extends JpaRepository<Country, Integer>{
	
	@Override
	@RestResource(exported = false)
	void deleteById(Integer id);

}
