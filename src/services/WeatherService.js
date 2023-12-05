import axios from "axios";



export async function fetchWeather (){
        try {
            const res = await axios.get('http://api.weatherapi.com/v1/current.json?key=af4b64dae7f04673b96131651233011&q=${mumbai}&aqi=no');

            return res.data;

        } catch (error) {
            console.log( error );
        }
}