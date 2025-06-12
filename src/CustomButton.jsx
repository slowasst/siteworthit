import Button from 'react-bootstrap/Button';

function CustomNavBarButton(props) {
  console.log("entrato in custombutton")

  if (props.search == false || props.search == null) {
    console.log("Bottone normale, props.search: " + props.search);
  }
  else{
    console.log("Ricerca utente: " + props.ricerca);
  }

  const testo = props.testo;
  const bgcolor = props.bgcolor;

  // Funzione per gestire il click del bottone  
  const handleSearchClick = () => {
    if (props.onSearch) { // Se e stato passato un onSearch come props
      console.log("Sto per chiamare onSearch con parametro" + props.ricerca);
      props.onSearch(props.ricerca); // Passa il valore di ricerca
    }
  };

  if (!props.search) {
    console.log("Bottone normale");
    return (

      <Button onClick={() => TornaIndietro()} style={{
        height: "90%",
        padding: "15px",
        backgroundColor: bgcolor,
        border: "solid 0px",
        fontWeight: 'bold',
        margin: '10px',
      }}>{testo}</Button>

    )
  }
  else {
    console.log("Ricerca utente: " + props.ricerca);
    return (
      <Button onClick={handleSearchClick}  style={{

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
    if (props.setPosizione) props.setPosizione('n');
    if (props.setCartaSelezionata) props.setCartaSelezionata(null);
  }
}


export default CustomNavBarButton
