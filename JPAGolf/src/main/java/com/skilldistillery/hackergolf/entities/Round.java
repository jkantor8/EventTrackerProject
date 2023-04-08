package com.skilldistillery.hackergolf.entities;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Round {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private LocalDate date;
	
	private LocalTime start;
	
	private LocalTime end;
	
	private String notes;
	
	@Column(name="holes_played")
	private int holesPlayed;

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

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public LocalTime getStart() {
		return start;
	}


	public void setStart(LocalTime start) {
		this.start = start;
	}


	public LocalTime getEnd() {
		return end;
	}


	public void setEnd(LocalTime end) {
		this.end = end;
	}


	public String getNotes() {
		return notes;
	}


	public void setNotes(String notes) {
		this.notes = notes;
	}


	public int getHolesPlayed() {
		return holesPlayed;
	}


	public void setHolesPlayed(int holesPlayed) {
		this.holesPlayed = holesPlayed;
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
