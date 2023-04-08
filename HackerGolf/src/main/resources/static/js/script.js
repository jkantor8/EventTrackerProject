window.addEventListener('load', function(e) {
	
	init();
	loadAllRounds();
});



function init() {

	loadAllRounds();
	
	// Listener for Create
	document.getElementById('addNewRoundBtn').addEventListener('click', function(e) {
		e.preventDefault();
		let newRound = getNewRoundFromForm();
		createRound(newRound);
	});
	
}

function loadAllRounds() {
	//XHR stuff
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/rounds');
	xhr.onreadystatechange = function() {
		
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				
				let roundJson = xhr.responseText;
				let rounds = JSON.parse(roundJson);
				displayRoundList(rounds);
			}
			
		}
	};
	
	
	
	xhr.send();
	
}

function displayRoundList(rounds) {
  let tbody = document.getElementById('roundListTbody');
  tbody.textContent = '';
  for (let round of rounds) {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);

    for (property in round) {
      if (round.hasOwnProperty(property)) {
        let td = document.createElement('td');
        td.textContent = round[property];
        tr.appendChild(td);
      }
    }
  }
}

function getNewRoundFromForm() {
    let date = document.getElementById('datePlayed').value;
    let start = document.getElementById('start').value;
    let end = document.getElementById('end').value;
    let notes = document.getElementById('notes').value;
    let holesPlayed = document.getElementById('holesPlayed').value;

    let newRound = {
        date: date,
        start: start,
        end: end,
        notes: notes,
        holesPlayed: parseInt(holesPlayed, 10)
    };

    return newRound;
}

function createRound(newRound) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/rounds');
	 xhr.setRequestHeader('Content-Type', 'application/json');
	 xhr.onreadystatechange = function() {
		 if(xhr.readyState === 4) {
			 if (xhr.status === 200 || xhr.status === 201) {
				 let roundJson = xhr.responseText;
				 let round = JSON.parse(roundJson);
				 loadAllRounds();
				 } else {
					 console.error('Error creating a new round: ' + xhr.status);
				 }
			 }
		 };
	 xhr.send(JSON.stringify(newRound));
}