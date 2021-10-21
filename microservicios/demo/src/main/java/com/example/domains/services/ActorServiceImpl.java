package com.example.domains.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domains.contracts.services.IActorService;
import com.example.domains.entities.Actor;
import com.example.exceptions.DuplicateKeyException;
import com.example.exceptions.InvalidDataException;
import com.example.exceptions.NotFoundException;
import com.example.infrastructure.repositories.IActorRepository;

@Service
public class ActorServiceImpl implements IActorService {
	
	//esta clase implementa los metodos de la interfaz y llama al repositorio que es donde esta las consultas
	
	@Autowired
	private IActorRepository dao;
	
	@Override
	public List<Actor> getAll() {

		return dao.findAll();
		
	}

	@Override
	public Optional<Actor> getOne(Integer id) {

		return dao.findById(id);
	}

	@Override
	public Actor add(Actor item) throws DuplicateKeyException, InvalidDataException {
		
		if(item == null)
			throw new InvalidDataException("Faltan los datos");
		if(item.isInvalid())
			throw new InvalidDataException("Errores de validacion: ");

		if(getOne(item.getActorId()).isPresent())
			throw new DuplicateKeyException();
		return dao.save(item);
	}

	@Override
	public Actor modify(Actor item) throws NotFoundException,InvalidDataException {
		if(item == null)
			throw new InvalidDataException("Faltan los datos");
		if(item.isInvalid())
			throw new InvalidDataException("Errores de validacion: ");
		
		if(getOne(item.getActorId()).isEmpty())
			throw new NotFoundException();
		return dao.save(item);
	}
	
	@Override
	public void deleteById(Integer id) {
		
		dao.deleteById(id);

	}
	
	@Override
	public void delete(Actor item) throws InvalidDataException {
		if(item == null)
			throw new InvalidDataException("Faltan los datos");
		dao.deleteById(item.getActorId());
	}
}
