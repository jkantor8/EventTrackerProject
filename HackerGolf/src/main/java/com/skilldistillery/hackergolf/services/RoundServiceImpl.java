package com.skilldistillery.hackergolf.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.hackergolf.entities.Round;
import com.skilldistillery.hackergolf.repositories.RoundRepository;


@Service
public class RoundServiceImpl implements RoundService {

	@Autowired
	private RoundRepository roundRepo;
	
	@Override
	public List<Round> listAllRounds() {
		return roundRepo.findAll();
	}

	@Override
	public Round getRound(int roundId) {
		 Round round = null;
	        if (roundRepo.existsById(roundId)) {
	            round = roundRepo.findById(roundId);
	        }
	        return round;
	}

	@Override
	public Round createRound(Round round) {
		return roundRepo.saveAndFlush(round);
	}

	@Override
	public Round updateRound(int roundId, Round round) {
		Round updatedRound = roundRepo.findById(roundId);
		if (roundRepo.existsById(roundId)) {
			
			updatedRound.setDate(round.getDate());
			updatedRound.setStart(round.getStart());
			updatedRound.setEnd(round.getEnd());
			updatedRound.setNotes(round.getNotes());
			updatedRound.setHolesPlayed(round.getHolesPlayed());
		
			
			roundRepo.saveAndFlush(updatedRound);
		}
		return updatedRound;
	}

	@Override
	public boolean deleteRoundById(int roundId) {
		boolean deleted = false;
		if (roundRepo.existsById(roundId)) {
			roundRepo.deleteById(roundId);
		deleted = true;
		}
		return deleted;
	}

}
