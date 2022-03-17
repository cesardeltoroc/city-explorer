import React from 'react';
import { Figure } from 'react-bootstrap';
class Populated extends React.Component {

  render() {

    return (
      <div className="Populated" >
        {this.props.locationName &&
          <Figure>
            <Figure.Image
             width={171}
             height={180}
              alt="171x180"
              src="holder.js/171x180"
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
