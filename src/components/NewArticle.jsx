
import { Button, Card, Col } from "react-bootstrap";

export function NewArticle( props ){

    return (

         <Col lg={4}>
            <Card >
                <Card.Img variant="top" src={props.myprop.urlToImage} />
                    <Card.Body>
                    <Card.Title>{props.myprop.title}    </Card.Title>
                    <Card.Text>
          {props.myprop.description}
                    </Card.Text>
                    <Button variant="primary">Visit</Button>
      </Card.Body>
    </Card>
                                
            </Col>

    );

}