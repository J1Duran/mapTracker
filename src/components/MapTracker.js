import React, { Component } from "react";
import isEmpty from 'lodash.isempty';
import CENTER_MAP from '../const/center_map';
import 'rc-tooltip/assets/bootstrap.css';

// components:
import Marker from '../components/Marker';

// examples:
import GoogleMap from '../components/GoogleMap';

  const getMapBounds = (map, maps, places) => {
    const bounds = new maps.LatLngBounds();

    places.forEach((place) => {
      bounds.extend(new maps.LatLng(
        place.geometry.location.lat,
        place.geometry.location.lng,
      ));
    });
    return bounds;
  };

  // Re-center map when resizing the window
  const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
      });
    });
  };

  // Fit map to its bounds after the api is loaded
  const apiIsLoaded = (map, maps, places) => {
    // Get bounds by our places
    const bounds = getMapBounds(map, maps, places);
    // Fit map to bounds
    map.fitBounds(bounds);
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);
  };

export default class MapTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    };
  }

// componentDidMount() {
//   this.timer = setInterval(()=> this.getItems(), 1000);
// }
//
// componentWillUnmount() {
//   this.timer = null; // here...
// }
//
// getItems() {
//   fetch('https://86ee273a-a064-4fe8-a4ab-00e8dabe3918.mock.pstmn.io/info')
//     .then(response => response.json())
//     .then(data => this.setState({ places: data.results }));
// }

componentDidMount() {
  fetch('https://86ee273a-a064-4fe8-a4ab-00e8dabe3918.mock.pstmn.io/info')
    .then(response => response.json())
    .then(data => this.setState({ places: data.results }));
}

  render() {
      const { places } = this.state;

      let Mapplaces = places.map((marker, index) => {
        return (
          <Marker
            key={marker.id}
            lat={marker.geometry.location.lat}
            lng={marker.geometry.location.lng}
            info={marker}
          />
        );
      });
      return (
        <div style={{ height: "100vh" }}>
        <GoogleMap
          defaultZoom={100}
          center={CENTER_MAP}
          hoverDistance={40 / 2}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, places)}
          >
            {Mapplaces}
        </GoogleMap>
        </div>
      );
  }
}
