import React from 'react';
import './App.css';
import axios from 'axios';
import Cityform from './Cityform'
import Populated from './Populated';
import Weather from './Weather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locationName: '',
      locationLat: '',
      locationLon: '',
      locationMap: '',
      weatherData: [],
    }
  }
  controlForm = (event) =>{
    this.setState({searchQuery: event.target.value})
  }
  getLocation = async (event) => {
    event.preventDefault();
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`
      const locatedCity = await axios.get(url);
      this.setState({ locationName: locatedCity.data[0].display_name })
      this.setState({ locationLat: locatedCity.data[0].lat });
      this.setState({ locationLon: locatedCity.data[0].lon });
      this.getWeather();
    } catch (error) {
      alert(error.message)
    }
  }
  getWeather = async () => {
    const url = `http://localhost:3001/weather?type=${this.state.locationLat}&type=${this.state.locationLon}`
    const weatherRespone = await axios.get(url)
    this.setState({weatherData: weatherRespone})
    console.log(weatherRespone);
  }
  render() {
    return (
      <div className="App">
        <Cityform  getLocation={this.getLocation} controlForm={this.controlForm}/>
        <Populated locationMap={this.state.locationMap} locationName={this.state.locationName} locationLat={this.state.locationLat} locationLon={this.state.locationLon} />
        <Weather getWeather={this.getWeather} show={this.state.show}/>
      </div>
    );
  }
}

export default App;
