package com.skilldistillery.hackergolf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.hackergolf.entities.Round;

public interface RoundRepository extends JpaRepository<Round, Integer>{
	Round findById(int roundId);
}
