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
	
	// Listener for Update
  document.getElementById('updateRoundBtn').addEventListener('click', function(event) {
    event.preventDefault();
    let roundId = document.getElementById('updateRoundId').value;
    let updatedRound = {
      id: parseInt(roundId),
      date: document.getElementById('updateDatePlayed').value,
      start: document.getElementById('updateStart').value,
      end: document.getElementById('updateEnd').value,
      notes: document.getElementById('updateNotes').value,
      holesPlayed: parseInt(document.getElementById('updateHolesPlayed').value, 10)
    };
    updateRound(updatedRound);

  });
	
	addActionListeners();
	
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
    
    let actionsTd = document.createElement('td');
    let updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update';
    updateBtn.setAttribute('data-round-id', round.id);
    updateBtn.setAttribute('data-round-action', 'update');
    actionsTd.appendChild(updateBtn);
    
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.setAttribute('data-round-id', round.id);
    deleteBtn.setAttribute('data-round-action', 'delete');
    actionsTd.appendChild(deleteBtn);
    
    tr.appendChild(actionsTd);
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


function addActionListeners() {
	let tbody = document.getElementById('roundListTbody');
	tbody.addEventListener('click', function(e) {
		let target = e.target;
		let roundId = target.getAttribute('data-round-id');
		let action = target.getAttribute('data-round-action');
		
		if (roundId && action === 'update') {
			
			editRound(roundId);
		} else if (roundId && action === 'delete') {
			deleteRound(roundId);
		}
	});
}

function editRound(roundId) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `api/rounds/${roundId}`);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let round = JSON.parse(xhr.responseText);
        document.getElementById('updateRoundId').value = round.id;
        document.getElementById('updateDatePlayed').value = round.date;
        document.getElementById('updateStart').value = round.start;
        document.getElementById('updateEnd').value = round.end;
        document.getElementById('updateNotes').value = round.notes;
        document.getElementById('updateHolesPlayed').value = round.holesPlayed;
        document.getElementById('updateRoundFormDiv').style.display = 'block';
      } else {
        console.error('Error fetching round: ' + xhr.status);
      }
    }
  };
  xhr.send();
}

function updateRound(round) {
	  console.log('Updating round:', round); // Add this line to log the round object

	
  let xhr = new XMLHttpRequest();
  xhr.open('PUT', `api/rounds/${round.id}`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        loadAllRounds();
        document.getElementById('updateRoundFormDiv').style.display = 'none';
      } else {
        console.error('Error updating round: ' + xhr.status);
      }
    }
  };
    console.log('Sending request:', JSON.stringify(round)); 

  xhr.send(JSON.stringify(round));
    console.log('Request sent'); 

}

function deleteRound(roundId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', `api/rounds/${roundId}`);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 204) {
				loadAllRounds();
				} else {
					console.error('Error deleting round: ' + xhr.status);
				}
		}
	};
	xhr.send();
}

