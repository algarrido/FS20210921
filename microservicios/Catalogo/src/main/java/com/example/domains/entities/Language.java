package com.example.domains.entities;

import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import com.example.domains.core.EntityBase;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Timestamp;
import java.util.List;
import java.util.Objects;


/**
 * The persistent class for the language database table.
 * 
 */
@Entity
@Table(name="language")
@NamedQuery(name="Language.findAll", query="SELECT l FROM Language l")
public class Language extends EntityBase<Language> implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="language_id",insertable=false, updatable=false)
	private int languageId;

	@Column(name="last_update",insertable=false, updatable=false)
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Timestamp lastUpdate;


	@NotBlank
	@Length(min=2, max = 20)
	@JsonProperty("nombre")
	private String name;

	//bi-directional many-to-one association to Film
	@OneToMany(mappedBy="language")
	@JsonIgnore
	private List<Film> films1;

	//bi-directional many-to-one association to Film
	@OneToMany(mappedBy="languageVO")
	@JsonIgnore
	private List<Film> filmsVO;

	public Language() {
	}

	public Language(int languageId, String name) {
		super();
		this.languageId = languageId;
		this.name = name;
	}

	public int getLanguageId() {
		return this.languageId;
	}

	public void setLanguageId(int languageId) {
		this.languageId = languageId;
	}

	public Timestamp getLastUpdate() {
		return this.lastUpdate;
	}

	public void setLastUpdate(Timestamp lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Film> getFilms1() {
		return this.films1;
	}

	public void setFilms1(List<Film> films1) {
		this.films1 = films1;
	}

	public Film addFilms1(Film films1) {
		getFilms1().add(films1);
		films1.setLanguage(this);

		return films1;
	}

	public Film removeFilms1(Film films1) {
		getFilms1().remove(films1);
		films1.setLanguage(null);

		return films1;
	}

	public List<Film> getFilmsVO() {
		return this.filmsVO;
	}

	public void setFilmsVO(List<Film> filmsVO) {
		this.filmsVO = filmsVO;
	}

	public Film addFilmsVO(Film filmsVO) {
		getFilmsVO().add(filmsVO);
		filmsVO.setLanguageVO(this);

		return filmsVO;
	}

	public Film removeFilmsVO(Film filmsVO) {
		getFilmsVO().remove(filmsVO);
		filmsVO.setLanguageVO(null);

		return filmsVO;
	}

	@Override
	public int hashCode() {
		return Objects.hash(languageId);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Language other = (Language) obj;
		return languageId == other.languageId;
	}

	@Override
	public String toString() {
		return "Language [languageId=" + languageId + ", lastUpdate=" + lastUpdate + ", name=" + name + ", films1="
				+ films1 + ", filmsVO=" + filmsVO + "]";
	}

}