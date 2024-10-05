import styled from "styled-components"
import CityComponent from "./modules/CityComponent"
import WeatherComponent from "./modules/WeatherComponent"
import { useState } from "react"
import axios from "axios"

const API_KEY = "2340d23e98aa470b02e396f05092f78b"

const Container = styled.div`
display:flex;
flex-direction:column;
margin:auto;
align-items:center;
box-shadow:0 3px 6px 0 #555;
padding:20px 10px;
border-radius:4px;
width:380px;
background:white;
font-family: Montserrat;

`

const AppLabel = styled.span`
color:black;
font-size:18px;
font-weight:bold;
`


function App() {
    const [city, updateCity] = useState("")
    const [weather, updateWeather] = useState()

    const fetchWeather = async (e) => {
        e.preventDefault()
        const response =
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        updateWeather(response.data)
        updateCity("")
    }

    return (
        <Container className="App">
            <AppLabel>React Weather App</AppLabel>
            {weather ? (
                <WeatherComponent weather={weather} />
            ) : (
                <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
            )}
        </Container>
    );
}

export default App;
