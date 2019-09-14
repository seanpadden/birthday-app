import React, { Component } from 'react';
import './App.css';
import './index.css'
import jackie from './jackie-face.png'

export default class App extends Component {



render(){

  console.log(jackie)
  return (
    <div>

      <h1 className="blinking">P A R T Y !</h1>
      {/* <img src={`${jackie}`} className="jackie" style={{height: 150}} /> */}


      <marquee scrollAmount='10'><p className="font" style={{textAlign: 'center', color: 'RED', size: '3px'}}>(of the birthday/pre-graduation variety)</p></marquee>

      <p className="regText" style={{color: 'rgb(251, 64, 251)'}}>at...</p>
      <h2 className="regText">Planet X in Ridgewood!</h2>
      <div className="sean">
      <iframe src="https://giphy.com/embed/U5Cup0i3f2msu1Lk37" width="280" height="272"></iframe>
      </div>
      <p className="regText" style={{color: 'rgb(251, 64, 251)'}}>Saturday, September 21st @ 8p</p>
      <p className="regText" style={{color: 'rgb(251, 64, 251)'}}>Cheap drinks! Asteroids! Maybe we'll order some pizza!</p>
      <p className="regText" style={{color: 'rgb(251, 64, 251)'}}>miss you love you xo sean</p>


        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12098.980797140284!2d-73.9052343!3d40.701609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1eac63b1e001673c!2sPlanet%20X!5e0!3m2!1sen!2sus!4v1568464737121!5m2!1sen!2sus" width="600" height="450" frameborder="9" allowfullscreen=""></iframe>
        </div>
    </div>
  )}
} 

