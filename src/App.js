import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cityform from './cityForm/Cityform'
import Populated from './locationIQ/Populated';
import Weather from './Weather /Weather';
import Movies from './Movies/Movies';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locationName: '',
      locationLat: '',
      locationLon: '',
      weatherData: [],
      movieData: []
    }
  }
  controlForm = (event) => {
    this.setState({ searchQuery: event.target.value })
  }
  getLocation = async (event) => {
    event.preventDefault();
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`
      const locatedCity = await axios.get(url);
      this.setState({
        locationName: locatedCity.data[0].display_name, 
        locationLat: locatedCity.data[0].lat,
        locationLon: locatedCity.data[0].lon
      })
      this.getWeather();
      this.getMovies();
    } catch (error) {
      alert(error.message)
    }
  }
  getWeather = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.locationLat}&lon=${this.state.locationLon}`;
      const weather = await axios.get(url);
      this.setState({ weatherData: weather.data})
      console.log(this.state.weatherData[0])
    } catch (error) {
      alert(error.message);
    }
  }
  getMovies = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.searchQuery}`
      const movies = await axios.get(url)
      this.setState({ movieData: movies.data })
      console.log(this.state.movieData[0]);
    } catch (error) {
      alert(error.message)
    }
  }
  render() {
    return (
      <div className="App">
        <Cityform 
          getLocation={this.getLocation}
          controlForm={this.controlForm}
          showAcc={this.showAcc} />
        <Populated
          locationName={this.state.locationName} 
          locationLat={this.state.locationLat} 
          locationLon={this.state.locationLon}/>
        {this.state.locationName && (
          <>
          <Weather 
          weatherData={this.state.weatherData} 
          locationName={this.state.locatioName}
          />
          <Movies 
          movieData={this.state.movieData}
          locationName={this.state.locatioName}
          />
          </>
        )}
      </div>
    );
  }
}

export default App;
