// Chiedi all'User il suo nome, poi il suo cognome ed infine il suo colore preferito. Scrivi quindi sulla pagina nomecognomecolorepreferito23

// Chiedi userName

let userName = prompt("Come ti chiami?");
// console.log(userName);


// Chiedi userSurname

let userSurname = prompt("Ottimo! Ora inserisci il tuo cognome!");
// console.log(userSurname);

// Chiedi favColor 

let favColor = prompt("Perfetto! Ed ora il tuo colore preferito!");

// risultato della password
const userPassword = document.getElementById("my_id").innerHTML = 'Ed ecco qui la tua password! ' + userName + userSurname + favColor + 23
// console.log(userPassword); 
