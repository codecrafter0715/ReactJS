import React, { useState } from "react";

const About = () => {
  const [info] = useState("We are a passionate travel company dedicated to exploring the most beautiful places in the world. We bring the best experiences, destinations, and offers for travel lovers!");

  return (
    <div className="page-container">
      <h1>About Us</h1>
      <p>{info}</p>
    </div>
  );
};

export default About;
