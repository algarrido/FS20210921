package com.example.domains.entities.dtos;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.example.domains.entities.Actor;
import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
@ApiModel(value = "Actor", description = "Datos del actor para su edición")
public class ActorDTO {
//define los fatos que quieres que se vean/envien
	
	@JsonProperty("id")
	private int actorId;
	
	@NotBlank
	@Size(max=45)
	@ApiModelProperty(name = "Nombre", value = "Nombre de pila del actor",required = true)
	@JsonProperty("nombre")
	private String firstName;
	
	@JsonProperty("apellidos")
	private String lastName;
	
	public static ActorDTO from(Actor source) {
		return new ActorDTO(source.getActorId(),source.getFirstName(),source.getLastName());
	}
	public static Actor from(ActorDTO source) {
		return new Actor(source.getActorId(),source.getFirstName(),source.getLastName());
	}
	
}
