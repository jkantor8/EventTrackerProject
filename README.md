# EventTrackerProject

## Description
	
	This project is designed to be a basic REST api for tracking rounds of golf for a user. The user can create a round of golf to be tracked within a database, and subsequently enter all relevant info about the round (date, start time, end time, notes, etc.). Within the round, a player is then able to keep a record for each hole played, the number of strokes it took. This hole played is then associated to its round through a Many-To-One relationship. In additon to creating rounds, basic implementation exists to find, update, or delete rounds of golf. The program will be deployed on AWS and can be accessed by using the route "http://44.230.90.189:8080/HackerGolf".

## API Documentation

### List All Rounds
* URI: /api/rounds
* Method: GET
* Description: Retrieves a list of all golf rounds.
### Get Round by ID
* URI: /api/rounds/{roundId}
* Method: GET
* Description: Retrieves a specific golf round by its ID.
### Create a New Round
* URI: /api/rounds
* Method: POST
* Description: Creates a new golf round with the provided data.
* Request Body: A JSON object containing the golf round data.
### Update a Round
* URI: /api/rounds/{roundId}
* Method: PUT
* Description: Updates the specified golf round with the provided data.
* Request Body: A JSON object containing the updated golf round data.
### Delete a Round
* URI: /api/rounds/{roundId}
* Method: DELETE
* Description: Deletes the specified golf round.

## Technologies Used

* Spring Boot
* Spring JPA
* Gradle
* AWS
* MySQL Workbench