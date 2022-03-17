import React from 'react';
import './App.css';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',

    }
  }
  getLocation = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`
    const locatedCity = await axios.get(url);
    console.log(locatedCity.data[0]);
  }
  render() {

    return (
      <div className="App">
        <Form >
          <Form.Group>
            <Form.Label>What City Do You Wanna Explore?</Form.Label>
              <Form.Control placeholder='Enter City' onChange={(event) => this.setState({searchQuery: event.target.value})}></Form.Control>
          </Form.Group>
          <Button type='submit' onClick={this.getLocation}>Explore</Button>
        </Form>
      </div>
    );
  }
}

export default App;
