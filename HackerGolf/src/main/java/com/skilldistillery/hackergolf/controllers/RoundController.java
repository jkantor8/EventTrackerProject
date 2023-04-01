package com.skilldistillery.hackergolf.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.hackergolf.entities.Round;
import com.skilldistillery.hackergolf.services.RoundService;

@RestController
@RequestMapping("api")
public class RoundController {

	@Autowired
	private RoundService roundService;

	@GetMapping("rounds")
	public List<Round> getRoundList() {
		return roundService.listAllRounds();
	}

	@GetMapping("rounds/{roundId}")
	public Round getRound(@PathVariable Integer roundId, HttpServletResponse res) {
		Round round = roundService.getRound(roundId);
		if (round == null) {
			res.setStatus(404);
		}
		return round;
	}

	@PostMapping("rounds")
	public Round createRound(@RequestBody Round round, HttpServletResponse res, HttpServletRequest req) {
		try {
			round = roundService.createRound(round);
		res.setStatus(201);
		StringBuffer url = req.getRequestURL();
		System.out.println(round);
		
		url.append("/").append(round.getId());
		res.setHeader("Location", url.toString());
	} catch (Exception e) {
		e.printStackTrace();
		res.setStatus(400);
		round= null;
	}
		return round;
	}
	
	@PutMapping("rounds/{roundId}")
	public Round updateRound(@PathVariable Integer roundId, @RequestBody Round round,  HttpServletResponse res) {
	try {
		round = roundService.updateRound(roundId, round);
	if (round == null) {
		res.setStatus(404);
	}
	}
	catch (Exception e) {
		e.printStackTrace();
		res.setStatus(400);
		round = null;
	}
	return round;
	
	}
	
}
