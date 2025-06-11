
import Button from 'react-bootstrap/Button';

function CustomNavBarButton(props) {
    if(props.search == null){
        props.search = false;
    }
    
    const testo = props.testo;
    const bgcolor = props.bgcolor;



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

          <Button style={{

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
