
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { fetchTopHeadlines } from "../services/NewsService";
import { Col, Container, Row, Card,  Button} from "react-bootstrap";


export function TopHeadline (){
    const [articles , setarticles ] = useState([]); // hook 

    async function fetArticles(){
        try {
         const result =   await fetchTopHeadlines(); //  api call

         setarticles( result.articles) ;

        } catch (error) {
            console.log(error);
        }
    }


    // didcompoenetMount
    useEffect(()=>{

    //  fetchTopHeadlines().then(( result )=>{
    //         setarticles(result.articles);
    //     }).catch((e )=>{
    //         console.log(e);
    //     });

        fetArticles(); 

   },[]);

   console.log(articles);

    return(
        <Container>
            <Header text="stay ahead of your game , top headlines !!!" ></Header>
            <Row>
                {
                    articles.map((article)=>{
                        return(
                            <Col lg={4}>
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