import React from "react";
import GoogleMapReact from "google-map-react";

// const isClient = typeof window !== "undefined";
const AnyReactComponent = () => (
  <div className="fa fa-map-marker fa-3x" style={{ color: "red" }}></div>
);

const GoogleMap = ({ phone, address, email, hours }) => {
  const lng = -0.113655;
  const lat = 51.50555;
  return (
    <div class="">
      <div class="container-fluid">
        <div class="row map-container">
          <div id="map">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyCYYuO8lTA6_BlN2kj5iOxmSGBqfsQG5X4",
              }}
              defaultCenter={[lat, lng]}
              defaultZoom={14}
            >
              <AnyReactComponent lat={lat} lng={lng} text="My Marker" />
            </GoogleMapReact>
          </div>
          <div
            class="col-xs-10 col-md-4 contact-block-container reveal"
            data-sal="flip-right"
            data-sal-easing="ease"
            data-sal-duration="2000"
          >
            <div class="row">
              <div class="col-xs-12 col-sm-6">
                <h3>Phone</h3>
                <p>{phone}</p>

                <h3>E-mail</h3>
                <p>{email}</p>
              </div>

              <div class="col-xs-12 col-sm-6">
                <h3>Address</h3>
                <p>{address}</p>

                <h3>Open hours</h3>
                <p>{hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
