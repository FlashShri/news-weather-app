
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { fetchTopHeadlines } from "../services/NewsService";
import {  Container, Row} from "react-bootstrap";
import { NewArticle } from "./NewArticle";


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
                            <NewArticle myprop={article} my2ndprop ={article}></NewArticle> 
                        )
                    })
                }
            </Row>
        </Container>

    )
    ;
}