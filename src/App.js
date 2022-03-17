import React from 'react';
import './App.css';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';
import Populated from './Populated';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locationName: '',
      locationLat: '',
      locationLon: '',
      locationMap: '',
    }
  }

  getLocation = async (event) => {
    event.preventDefault();
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`
      const locatedCity = await axios.get(url);
      // console.log(locatedCity.data[0]);
      this.setState({ locationName: locatedCity.data[0].display_name })
      this.setState({ locationLat: locatedCity.data[0].lat });
      this.setState({ locationLon: locatedCity.data[0].lon });
      this.getMap();
      // console.log(this.state.locationLat, this.state.locationLon, this.state.locationName) //Code is storing proper data uncoment this console to see where its being stored in state.
    } catch (error) {
      alert(error.message)
    }
  }
  getMap = async () => {
    const url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationLat},${this.state.locationLon}&center=${this.state.locationLat},${this.state.locationLon}&zoom=${10}&size=${500}x${500}&format=<format>&maptype=<MapType>&markers=icon:<icon>|${this.state.locationLat},${this.state.locationLon}&markers=icon:<icon>`
    const cityMap = await axios.get(url);
    this.setState({ locationMap: cityMap.config.url });
    // console.log(cityMap.config.url);
  }

  render() {

    return (
      <div className="App">
        <h1>Welcome To City Explorer</h1>
        <div className='Form'>
          <Form >
            <Form.Group style={{marginTop: '20px'}}>
            <Form.Label style={{color: 'white', fontSize: '1.5em', textDecoration: 'underline', marginRight: '20px' }}className='formLabel'>What City Do You Wanna Explore?</Form.Label>
              <Form.Control style={{height: '20px', width : '150px'}}placeholder='Enter City' onChange={(event) => this.setState({ searchQuery: event.target.value })}></Form.Control>
              <Button style={{height: '30px', width : 'max-content', marginLeft: '10px'}} type='submit' onClick={this.getLocation}>Explore</Button>
            </Form.Group>
          </Form>
        </div>
        <Populated locationMap={this.state.locationMap} locationName={this.state.locationName} locationLat={this.state.locationLat} locationLon={this.state.locationLon} />
      </div>
    );
  }
}

export default App;
