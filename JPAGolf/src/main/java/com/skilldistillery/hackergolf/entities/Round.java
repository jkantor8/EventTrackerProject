package com.skilldistillery.hackergolf.entities;

import java.time.LocalDateTime;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Round {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private LocalDateTime date;

	@Override
	public int hashCode() {
		return Objects.hash(date, id);
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	public Round() {
		super();
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Round other = (Round) obj;
		return Objects.equals(date, other.date) && id == other.id;
	}
	
	@Override
	public String toString() {
		return "Round [id=" + id + ", date=" + date + "]";
	}
}
