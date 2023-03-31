package com.skilldistillery.hackergolf.entities;

import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDateTime;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class RoundTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Round round;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPAGolf");
		
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
		
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		round = em.find(Round.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		round = null;
		
		
	}
	

	@Test
	void test_Round_entity_mapping() {
		assertNotNull(round);
		assertEquals(LocalDateTime.parse("2022-04-02T00:00"), round.getDate());
	}

}
