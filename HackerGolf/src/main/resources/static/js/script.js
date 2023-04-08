window.addEventListener('load', function(e) {
	
	init();
	
});

function init() {

	loadAllRounds();
	
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
	//DOM stuff
	let tbody = document.getElementById('roundListTbody');
	tbody.textContent = '';
	for (let round of rounds) {
		let tr = document.createElement('tr');
		tbody.appendChild(tr);
		let td = document.createElement('td');
		td.textContent = round.id;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = round.date;
		tr.appendChild(td);
	}
	
}