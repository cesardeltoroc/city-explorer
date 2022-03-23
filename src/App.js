import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      this.setState({show: true});
      this.getWeather();
    } catch (error) {
      alert(error.message)
    }
  }
  getWeather = async () => {
    try{
      const url = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.searchQuery}`;
      const weather = await axios.get(url);
      this.setState({weatherData: weather.data})
      console.log(this.state.weatherData);
    }catch (error){
      alert(error.message);
    }
  }
  render() {
    // console.log(this.state.weatherData);
    return (
      <div className="App">
        <Cityform  getLocation={this.getLocation} controlForm={this.controlForm} showAcc={this.showAcc}/>
        <Populated locationMap={this.state.locationMap} locationName={this.state.locationName} locationLat={this.state.locationLat} locationLon={this.state.locationLon} />
        {this.state.locationName ? (
          <Weather searchQuery={this.state.searchQuery} weatherData={this.state.weatherData} />
        ) : null}
      </div>
    );
  }
}

export default App;
