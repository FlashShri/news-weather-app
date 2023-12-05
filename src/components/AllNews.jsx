
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { fetchAllnew } from "../services/NewsService";
import { Col, Container, Row, Card,  Button } from "react-bootstrap";


export function AllNews (){

    const [articles , setarticles] = useState([]);

   async function fetcharticles(){
        try {
         const result =   await fetchAllnew();
         setarticles( result.articles );
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{

        fetcharticles();
    },[]);


    return(
<Container>
<Header text="keep update with latest news with us !!" ></Header>
 <Row>
                {
                    articles.map((article)=>{
                        return(
                            <Col lg={6}>
                                    <Card >
      <Card.Img variant="top" src={article.urlToImage} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {article.description}
        </Card.Text>
        <Button variant="primary">Visit</Button>
      </Card.Body>
    </Card>
                                
                            </Col>
                        )
                    })
                }
            </Row>

</Container>

    )
    ;
}