import React, { useState } from "react";

const Contact = () => {
  const [contactDetails] = useState({
    email: "support@travelwithus.com",
    phone: "+123 456 7890",
    address: "123 Travel Lane, Wanderlust City, Earth",
  });

  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <div className="contact-box">
        <p><strong>Email:</strong> {contactDetails.email}</p>
        <p><strong>Phone:</strong> {contactDetails.phone}</p>
        <p><strong>Address:</strong> {contactDetails.address}</p>
      </div>
    </div>
  );
};

export default Contact;
