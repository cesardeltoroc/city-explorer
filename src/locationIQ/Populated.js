import React from 'react';
import { Figure, Image } from 'react-bootstrap';
class Populated extends React.Component {

  render() {
    const {
      locationName, 
      locationLat,
      locationLon
    } = this.props
    return (
      <div className="Populated" >
        {locationName &&
        <>
          <Figure>
            <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${locationLat},${locationLon}&center=${locationLat},${locationLon}&zoom=${10}&size=${500}x${500}&format=<format>&maptype=<MapType>&markers=icon:<icon>|${locationLat},${locationLon}&markers=icon:<icon>`}/>
            <Figure.Caption>{locationName}</Figure.Caption>
            <Figure.Caption>Lattitude:{locationLat}</Figure.Caption>
            <Figure.Caption>Longtitude:{locationLon}</Figure.Caption><br></br>
          </Figure></>
        } 
      </div>
    );
  }
}

export default Populated;
