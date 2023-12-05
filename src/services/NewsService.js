
import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '7e003ba17f9c4a408b637d6ae8208846';


export async function fetchTopHeadlines(){
try {
      const res = await axios.get(` ${BASE_URL}/top-headlines?country=in&apiKey=${API_KEY} ` ) ;

return res.data ;


} catch (error) {
    console.log(error);
}
}

export async function fetchAllnew (){
    try {
        const res =  await axios.get(`${BASE_URL}/everything?q=bitcoin&apiKey=${API_KEY}`);

        return res.data ;
    } catch (error) {
        console.log(error);
    }
}