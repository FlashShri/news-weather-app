import { Alert, Container } from "react-bootstrap";

export function Header( props ){

    return(

        <Container>
            
            <Alert variant="success" className="mt-5">
                <h6> {props.text}</h6>
            </Alert>
            
        </Container>

    )
    ;
}