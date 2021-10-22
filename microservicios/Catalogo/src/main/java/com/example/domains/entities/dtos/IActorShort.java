package com.example.domains.entities.dtos;

import org.springframework.beans.factory.annotation.Value;

public interface IActorShort {
	
	int getActorId();
	@Value("#{target.lastName + ', ' + target.firstName}")
	String getNombreCompleto();
}
