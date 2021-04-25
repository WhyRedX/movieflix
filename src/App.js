import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import image1 from "./images/tv.png";
import image2 from "./images/mobile.jpg";
import image3 from "./images/pc.png";
// import  from './components/';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section
        title="Enjoy on your TV."
        story="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        image={image1}
      />
      <Section
        title="Download your shows to watch offline."
        story="Save your favourites easily and always have something to watch."
        image={image2}
      />
      <Section
        title="Watch everywhere."
        story="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        image={image3}
      />
    </div>
  );
}

export default App;
