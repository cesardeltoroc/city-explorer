import React from 'react';
import { Form, Button } from 'react-bootstrap';
class Cityform extends React.Component {

  render() {

    return (
      <div className="Cityform" >
        <h1>Welcome To City Explorer</h1>
        <Form >
          <Form.Group >
            <Form.Label  className='formLabel'>Enter a Location</Form.Label>
            <Form.Control placeholder='Enter City' onChange={this.props.controlForm}></Form.Control>
            <Button type='submit' onClick={this.props.getLocation}>Explore</Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Cityform;
