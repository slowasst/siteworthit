//React e Vite
import { useState } from 'react'
import { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomButton from './CustomButton.jsx'
import CustomSearch from './CustomSearch.jsx'
import Carta from './Carta.jsx'
//Bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
//Container
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'; //Necessario per il funzionamento di react-bootstrap


//TopBar
function SmallLogo() {
  return (
    <img src="https://i.ibb.co/KjLMNX2v/logoworthitlight.png" alt="logoworthitlight" border="0" width={64} height={64} />
  )
}
function NavBarHomeDesktop() {
  return (
    <Navbar className='navbarhome'>
      <Container className='navbarhomecontainer' style={{
        paddingTop: "15px",
        paddingBottom: "15px",
        marginLeft: "0px",
        marginRight: "0px",
        maxWidth: "100%"
      }}>
        <Row className='navbarhomerow' style={{ marginLeft: "0px" }}>
          <Col className='rowcenter' style={{ justifyContent: 'left' }} sm={2} xs>
            <Navbar.Brand style={{ marginRight: "0px" }}>
              {SmallLogo()}
            </Navbar.Brand>
          </Col>

          <Col className='rowcenter' sm={7}>
            {
              //Divisorio
            }
          </Col>

          <Col className='rowcenter' sm={3} lg>
            <CustomButton search={false} testo="Login" bgcolor="#FF2020" />
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}


//Main
function App() {
  const [posizione, setPosizione] = useState('n');
  const [cartaSelezionata, setCartaSelezionata] = useState(null);
  const [listaGiochi, setListaGiochi] = useState([]);


  const fetchGiochi = async (ricerca) => { //Credo recuperi asincronamente come funzione i giochi
    try { //Prova a fare la richiesta in modo chec cosi possiamo sapere se non va bene

      ///RICHIESTA POST
      //json da mandare
      const pippo = {
        titolo: ricerca || "" // Se non viene passata una ricerca, manda una stringa vuota
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
      console.log(data.risric)
      // Aggiorna lo stato con i dati ricevuti
      setListaGiochi(data.risric);
     //console.log("Assegnata la listaGiochi appena caricata la pagina: ", listaGiochi);
    } catch (error) { //Se ce un errore nella richiesta
      {
        alert("Si è verificato un errore durante il recupero dei dati dei giochi. Riprova più tardi. \n" + error.message);
      }
    }
  };

  // useEffect per effettuare la richiesta quando il componente si monta
  useEffect(() => {

     fetchGiochi(); // Chiama la funzione per avviare il recupero dei dati
  }, []); // L'array vuoto [] come secondo argomento fa sì che useEffect venga eseguito solo una volta al montaggio del componente

  function showCards() {
    const lista = listaGiochi || []; // Usa la listaGiochi come lista da mostrare
    console.log(lista); 
    const cards = [];
  
    lista.forEach((element, i) => {
      cards.push(
        <Col key={'elemento-' + i} md={4} lg={3} >
          <Carta {...element} id={i} setPosizione={setPosizione} setCartaSelezionata={setCartaSelezionata} />
        </Col>
      )
    });
  
    return cards;
  }

  function showBody() {
    if (posizione == 'n') {
      return (

        <div>

          <Row className='cardshowblock' style={{ marginTop: "50px" }}>
            <div>
              <h2>Titoli</h2>
            </div>
            { showCards()}
          </Row>
        </div>
      )
    }
    else if (posizione == 'c') {
      let chosencolour = '';

      if (cartaSelezionata != null) {
        listaGiochi[cartaSelezionata]

        var G = parseInt((255 * listaGiochi[cartaSelezionata].rating / 100) * 0.75);
        var R = parseInt((255 - G) * 0.75);
        var B = 0;
        chosencolour = "rgb(" + R + "," + G + "," + B + ")";
        console.log(chosencolour);
      }

      return (
        <div>
          <Row className='cardshowblock' style={{ marginTop: "50px" }}>
            <Col lg>
              <img src={listaGiochi[cartaSelezionata].immagine} style={{ boxShadow: '0px 10px 20px 5px rgba(70,70,70,0.55)', borderRadius: "20px", width: "300px" }} />
            </Col>
            <Col>
              <h1>{listaGiochi[cartaSelezionata].titolo}</h1>
              <h5>Sviluppato da {listaGiochi[cartaSelezionata].dev}</h5>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ marginTop: '20px', backgroundColor: chosencolour, borderRadius: "20px", width: "200px", color: 'white', paddingBottom: "50px", paddingTop: "50px" }}>
                  <h2>{listaGiochi[cartaSelezionata].rating}</h2>
                  <span>Valutazione</span>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='cardshowblock' style={{ backgroundColor: "#CCD0D0" }}>
            <Col>
              <h3>Descrizione</h3>
              <p>{listaGiochi[cartaSelezionata].description}</p>
            </Col>
          </Row>
          <CustomButton search={false} testo="Indietro" bgcolor='#FF2020' setPosizione={setPosizione} setCarta={setCartaSelezionata} />
        </div>
      );
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            {NavBarHomeDesktop()}
          </Col>
        </Row>
        <Row>
          <img src="https://i.ibb.co/BVhNJj6b/backgroundwelcome.png" width={"100%"} />
        </Row>
        <Row>
          <Col sm={8} xxl>
            <Form.Label>
              <h1>Cosa vorresti valutare oggi?</h1>
            </Form.Label>
            <CustomSearch funzione={() => {fetchGiochi()}}/>
          </Col>
          <Col sm={4}>
            {/*Divisorio*/}
          </Col>
        </Row>
        {showBody()}
      </Container>

    </>
  )
}

export default App
