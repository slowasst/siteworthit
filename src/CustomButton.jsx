
import Button from 'react-bootstrap/Button';

function CustomNavBarButton(props) {

    const testo = props.testo;
    const bgcolor = props.bgcolor;
    function TornaIndietro() {
        props.setPosizione('n');
        props.setCarta(null);
    }
  
    return (
  
      <Button onClick={() => TornaIndietro()}style={{
        height: "90%",
        padding:"15px",
        backgroundColor: bgcolor,
        border: "solid 0px",
        fontWeight: 'bold',
        margin: '10px',
      }}>{testo}</Button>

  
    )
  }


  export default CustomNavBarButton
