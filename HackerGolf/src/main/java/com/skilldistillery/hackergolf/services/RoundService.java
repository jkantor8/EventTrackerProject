package com.skilldistillery.hackergolf.services;

import java.util.List;

import com.skilldistillery.hackergolf.entities.Round;

public interface RoundService {

	List<Round> listAllRounds();
	
	Round getRound (int roundId);
	
	Round createRound(Round round);
	
	Round updateRound(int roundId, Round round);
	
	boolean deleteRoundById(int roundId);
	
}
