
import { Col, Container , Row , Card , ListGroup} from "react-bootstrap";
import { Header } from "./Header";
import { useEffect , useState} from "react";
import { fetchWeather } from "../services/WeatherService";

export function Weather (){

    const [ weather , setWeather] = useState([]);

    useEffect(()=>{

        fetchWeather().then((ressult)=>{

            console.log( ressult );
             setWeather( ressult.current)
        }).catch(( e )=>{
            console.log( e );
        })
    }, []);


    return(

        <Container>
 <Header text="keep update with Weather !!" ></Header>

            <Row>

                <Col lg={4}>

                     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"   />
      <Card.Body>
        <Card.Title>Weather</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> humidity: { weather.humidity }</ListGroup.Item>
        <ListGroup.Item>Temp in c : {weather.temp_c}</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
                </Col>
              
                   
                
            </Row>

            
        </Container>
       
    )
    ;
}