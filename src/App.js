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
      locationName:'',
      locationLat: '',
      locationLon: '',
    }
  }

  getLocation = async (event) => {
    event.preventDefault();
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`
      const locatedCity = await axios.get(url);
      // console.log(locatedCity.data[0]);
      this.setState({locationName: locatedCity.data[0].display_name})
      this.setState({locationLat: locatedCity.data[0].lat});
      this.setState({locationLon: locatedCity.data[0].lon});
      // console.log(this.state.locationLat, this.state.locationLon, this.state.locationName) //Code is storing proper data uncoment this console to see where its being stored in state.
    } catch (error) {
      alert(error.message)
    }
  }
  
  render() {

    return (
      <div className="App">
        <h1>Welcome To City Explorer</h1>
        <Form >
          <Form.Group>
            <Form.Label>What City Do You Wanna Explore?</Form.Label>
              <Form.Control placeholder='Enter City' onChange={(event) => this.setState({searchQuery: event.target.value})}></Form.Control>
          </Form.Group>
          <Button type='submit' onClick={this.getLocation}>Explore</Button>
        </Form>
        <Populated locationName={this.state.locationName} locationLat={this.state.locationLat} locationLon={this.state.locationLon}/>
      </div>
    );
  }
}

export default App;
