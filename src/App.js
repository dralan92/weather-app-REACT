import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "7b75e0baf4f3ef921196b9cbfdea540e";
class App extends React.Component{

  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    }
  render(){
    return(
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;