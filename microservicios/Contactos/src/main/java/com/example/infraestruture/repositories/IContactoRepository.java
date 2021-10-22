package com.example.infraestruture.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.domain.entities.Contacto;

public interface IContactoRepository extends MongoRepository<Contacto, Integer> {

}