import React from 'react';
import { Figure, Image } from 'react-bootstrap';
class Populated extends React.Component {

  render() {
    
    return (
      <div className="Populated" >
        {this.props.locationName &&
        <>
          <Figure>
            <Figure.Caption>{this.props.locationName}</Figure.Caption>
            <Figure.Caption>Lattitude:{this.props.locationLat}</Figure.Caption>
            <Figure.Caption>Longtitude:{this.props.locationLon}</Figure.Caption><br></br>
            <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.locationLat},${this.props.locationLon}&center=${this.props.locationLat},${this.props.locationLon}&zoom=${10}&size=${500}x${500}&format=<format>&maptype=<MapType>&markers=icon:<icon>|${this.props.locationLat},${this.props.locationLon}&markers=icon:<icon>`}/>
          </Figure></>
        } 
      </div>
    );
  }
}

export default Populated;
