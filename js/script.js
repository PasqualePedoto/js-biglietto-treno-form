/*
*** STEP 1 *** - Definiamo i bersagli che dovranno agire nell'HTML
*/

// * Bersaglia il nome e il cognome dati in input dal passeggero
const firstLastNameInput = document.getElementById('first-last-name');

// * Bersaglia i chilometri specificati dal passeggero
const kmsNumberInput = document.getElementById('kms-number');

// * Bersaglia l'età del passeggero dato dalla select
const ageInput = document.getElementById('age-selection');

// * Bersaglio la section your-tickets
const yourTicketsSection = document.getElementById('your-tickets');

// ! VALIDAZIONE DEGLI INPUT



// * Qui invece vengono bersagliati tutti i paragrafi che verranno riempiti
// * al click del bottone "Genera" che serviranno a compilare il biglietto
const passengerInfoForTicket = document.querySelector('#passenger-info p');
const offerForTicket = document.querySelector('#ticket-offer p');
const positionForTicket = document.querySelector('#ticket-position p')
const codForTicket = document.querySelector('#ticket-cod p');
const costsForTicket = document.querySelector('#ticket-costs p');

/*
*** STEP 2 *** - Bersagliamo il bottone "Genera" in modo tale da dar logica a questo
*/

const generateButton = document.getElementById('generate-ticket');

generateButton.addEventListener('click',function(){
    
    
    if(!(firstLastNameInput.value === '') && !(kmsNumberInput.value <= 0 || kmsNumberInput.value == null)){

       /*
       *** STEP 3 *** - Compiliamo il biglietto**** - Queste sono le informazioni standard senza alcuno sconto
       */

   passengerInfoForTicket.innerText = firstLastNameInput.value;
   
   // Calcoliamo in maniera randomica la carrozza e il Codice CP
   
   // *** Carrozza ***
   
   positionForTicket.innerText  = Math.floor(Math.random() * 20 + 1);
   
   // *** Codice CP ***
   
   codForTicket.innerText  = Math.floor(Math.random() * (29000 + 1 - 25000)) + 25000;
   
   // Qui ci prendiamo l'indice della option scelta
   const ageInputIndex = ageInput.selectedIndex;
   
   // Qui invece prendiamo il valore corrispondente a quell'indice
   const ageInputValue = ageInput.options[ageInputIndex].value;
   
   // Logica che calcola il prezzo del biglietto
   
   let ticketPrice = 0.21 * kmsNumberInput.value;
   
      if(ageInputValue === 'U18'){
          const underAgeSale = ticketPrice * 20 / 100;
          ticketPrice = ticketPrice - underAgeSale;
          offerForTicket.innerText = 'Biglietto scontato del 20%';
        }else if(ageInputValue === 'O65'){
            const OverAgeSale = ticketPrice * 40 / 100;
            ticketPrice = ticketPrice - OverAgeSale;
            offerForTicket.innerText = 'Biglietto scontato del 40%';
        }else{
            offerForTicket.innerText = 'Biglietto Standard';
        }
        
        costsForTicket.innerHTML = ticketPrice.toFixed(2) + '<span> <i class="fa-solid fa-euro"></span>';
        
        /*
        *** STEP 4 *** - Rendiamo visibile il biglietto appena compilato
        */
       
       yourTicketsSection.classList.remove('d-none');
       yourTicketsSection.classList.add('d-block');
       
    }else{
        alert('Input Errati: fornire un nome e un numero di chilometri maggiore di 0');
    }
       
    })
    
    /*
    *** STEP 5 *** - Bersagliamo il bottone "Annulla" in modo tale da annulla i campi del form compilato
    */
   
   const cancelButton = document.getElementById('cancel-ticket');
   
   cancelButton.addEventListener('click',function(){
       firstLastNameInput.value = '';
       kmsNumberInput.value = 0;
       ageInput.value = 'U18';
    })