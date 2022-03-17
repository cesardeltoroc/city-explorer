import React from 'react';
import { Figure } from 'react-bootstrap';
class Populated extends React.Component {

  render() {

    return (
      <div className="Populated" >
        {this.props.locationName &&
          <Figure>
            <Figure.Image className='Map' 
             width={500}
             height={500}
              alt='Image Of Your Selected City'
              src={this.props.locationMap}
            />
            <Figure.Caption>{this.props.locationName}</Figure.Caption>
            <Figure.Caption>Lattitude:{this.props.locationLat}</Figure.Caption>
            <Figure.Caption>Longtitude:{this.props.locationLon}</Figure.Caption>
          </Figure>
        } 
      </div>
    );
  }
}

export default Populated;
