//React e Vite
import { useState } from 'react'
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
            <CustomButton testo="Login" bgcolor="#FF2020" />
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}


//Main
function App() {
  const [posizione,setPosizione] = useState('n');
  const [cartaSelezionata, setCartaSelezionata] = useState(null);

  const [listaGiochi, setListaGiochi] = useState([
    { immagine: "https://image.api.playstation.com/vulcan/ap/rnd/202501/2217/e5833a53529ff9879e87689f1e8b04d45ba7e6c97fa791e2.png",titolo: "Clair Obscur: Expedition 33", dev: "Sandfall Entertainment", description:"Clair Obscur: Expedition 33 è un gioco di ruolo d'azione in terza persona che combina esplorazione, combattimento e narrativa in un mondo post-apocalittico.", rating: 95},
    { immagine:"https://multiplayer.net-cdn.it/thumbs/images/2023/12/16/c8b357469ea603d2da39dfb16556d0647d5027b053dc077b_jpg_300x300_q85.jpg", titolo: "The Finals", dev: "Embark Studios", description: "The Finals è un gioco di combattimento in prima persona free-to-play che combina la frenesia del combattimento con la distruzione ambientale e la personalizzazione dei personaggi.", rating: 83},
      ]);

  function showCards() {
    const cards = [];
    const [chosencolour, setChosencolour] = "#000000";

    listaGiochi.forEach((element, i) => {
      cards.push(
        <Col key={'elemento-' + i} md={4} lg={3}>
          <Carta {...element} id={i} setPosizione={setPosizione} setCartaSelezionata={setCartaSelezionata}/>
        </Col>
      )
    });

    return cards;
  }

  function showBody() {
    if(posizione == 'n')
    {return (
      <div>
        <Row className='cardshowblock'style={{marginTop:"50px"}}>
        <div>
          <h2>Titoli</h2>
        </div>
          {showCards()}
        </Row>
      </div>
    )}
  else if(posizione == 'c'){
  let chosencolour = '';

  if(cartaSelezionata != null){
    listaGiochi[cartaSelezionata]

    var G = parseInt((255*listaGiochi[cartaSelezionata].rating/100)*0.75);
    var R = parseInt((255 - G)*0.75);
    var B = 0;
    chosencolour = "rgb(" + R + "," + G + "," + B + ")";
    console.log(chosencolour);  
  }

  return(
    <div>
      
      <Row className='cardshowblock' style={{marginTop:"50px"}}>
        <Col lg>
          <img src={listaGiochi[cartaSelezionata].immagine} style={{boxShadow:'0px 10px 20px 5px rgba(70,70,70,0.55)', borderRadius: "20px", width: "300px"}}/>
        </Col>
        <Col>
          <h1>{listaGiochi[cartaSelezionata].titolo}</h1>
          <h5>Sviluppato da {listaGiochi[cartaSelezionata].dev}</h5>
          <div style={{display:'flex', justifyContent:'center'}}>
          <div style={{marginTop:'20px', backgroundColor: chosencolour, borderRadius: "20px", width: "200px", color: 'white', paddingBottom:"50px",paddingTop:"50px"}}>
            <h2>{listaGiochi[cartaSelezionata].rating}</h2>
            <span>Valutazione</span>
          </div>
          </div>
        </Col>
      </Row>
      <Row className='cardshowblock' style={{backgroundColor: "#CCD0D0"}}>
        <Col>
          <h3>Descrizione</h3>
          <p>{listaGiochi[cartaSelezionata].description}</p>
        </Col>
      </Row>
      <CustomButton testo="Indietro" bgcolor='#FF2020' setPosizione={setPosizione} setCarta={setCartaSelezionata}/>
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
          <Col sm={8} xxl>
            <Form.Label>
              <h1>Cosa vorresti valutare oggi?</h1>
            </Form.Label>
            <CustomSearch></CustomSearch>
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
