
import Button from 'react-bootstrap/Button';

function CustomNavBarButton(props) {

  let ricercautente = props.ricerca; //Prende la ricerca dall'oggetto props
    if(props.search == null){
        ricercautente = "";
      
    }

    const testo = props.testo;
    const bgcolor = props.bgcolor;
    
    const fetchGiochi = async (ricerca) => { //Credo recuperi asincronamente come funzione i giochi
      try { //Prova a fare la richiesta in modo chec cosi possiamo sapere se non va bene
          
        ///RICHIESTA POST
        //json da mandare

        const pippo = {
          titolo: ricerca || ""
        };
  
        const response =
          //Fa un fetch(api, opzioni)
          await fetch('http://localhost:5000/api/getgiochi', //API
            //CONFIGURAZIONE
            {
              method: 'POST', // richiesta: POST
              headers: {
                'Content-Type': 'application/json' // tipo di file: JSON
              },
              //contenuto json da mandare
              body: JSON.stringify(pippo) //Converte l'oggetto pippo in una stringa JSON
  
            })
  
  
        // Controlla se la risposta è OK (status 200)
        if (!response.ok) {
          throw new Error(`Errore HTTP! stato: ${response.status}`);
        }
  
        // Parsa la risposta come JSON
        const data = await response.json(); //Penso await faccia aspettare che finisca l'istruzione prima di proseguire
        console.log(data)
        // Aggiorna lo stato con i dati ricevuti
        setListaGiochi(data.titoli);
        console.log(listaGiochi);
      } catch (error) { //Se ce un errore nella richiesta
        {
          alert("Si è verificato un errore durante il recupero dei dati dei giochi. Riprova più tardi.");
        }
      }
    };
  

      if(!props.search) {
      return (
  
      <Button onClick={() => TornaIndietro()}style={{
        height: "90%",
        padding:"15px",
        backgroundColor: bgcolor,
        border: "solid 0px",
        fontWeight: 'bold',
        margin: '10px',
      }}>{testo}</Button>
        
      )}
      else{
        return (

          <Button onClick={() => {fetchGiochi(ricercautente)}} style={{

            height: "54px",
            padding: "15px",
            backgroundColor: "red",
            border: "0px solid",
            fontWeight: "bold",
            marginLeft: "10px",
            borderRadius: "15px"
          }}>{testo}</Button>

        )
      }

    function TornaIndietro() {
        props.setPosizione('n');
        props.setCarta(null);
    }
  

  
  }


  export default CustomNavBarButton
