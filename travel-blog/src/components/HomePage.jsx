import React from "react";

const HomePage = () => {
  return (
    <div className="text-container">
      <h1>
        It's A Big World <br /> Out There, Go <br /> Explore
      </h1>
      <h2>
        The most picturesque and jaw- <br />
        dropping landscape east coast <br />
        state of India
      </h2>
      <button className="Book-Now">Book Now</button>

      <div className="box-container">
        <div className="box">
          <h3>
            Inspirational <br /> Offer
          </h3>
          <p>Handpicked Travel <br /> offers</p>
        </div>
        <div className="box">
          <h3>
            Best <br /> Discounts
          </h3>
          <p>Exclusive prices and <br /> exceptional discounts <br /> up to 70%</p>
        </div>
        <div className="box">
          <h3>
            Our Experts <br /> Are Here to Help
          </h3>
          <p>A reliable and <br /> responsive customer <br /> service</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


