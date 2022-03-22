import React from 'react';
import { Form, Button } from 'react-bootstrap';
class Cityform extends React.Component {

  render() {

    return (
      <div className="Cityform" >
        <h1>Welcome To City Explorer</h1>
        <Form >
          <Form.Group style={{ marginTop: '20px' }}>
            <Form.Label style={{ color: 'white', fontSize: '1.5em', textDecoration: 'underline', marginRight: '20px' }} className='formLabel'>What City Do You Wanna Explore?</Form.Label>
            <Form.Control style={{ height: '20px', width: '150px' }} placeholder='Enter City' onChange={this.props.controlForm}></Form.Control>
            <Button style={{ height: '30px', width: 'max-content', marginLeft: '10px' }} type='submit' onClick={this.props.getLocation}>Explore</Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Cityform;
