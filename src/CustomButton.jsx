
import Button from 'react-bootstrap/Button';

function CustomNavBarButton(props) {

    const testo = props.testo;
    const bgcolor = props.bgcolor;
  
  
    return (
  
      <Button style={{
        height: "90%",
        padding:"15px",
        backgroundColor: bgcolor,
        border: "solid 0px",
        fontWeight: 'bold',
        marginLeft: '5px',
        marginRight: '5px'
      }}>{testo}</Button>
  
    )
  }


  export default CustomNavBarButton
