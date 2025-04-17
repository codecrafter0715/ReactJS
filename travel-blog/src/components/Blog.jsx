import React, { useState } from "react";
import vietnam from "../assets/vietnam.jpeg";
import bali from "../assets/bali.jpeg";
import santorini from "../assets/santorini.jpg";

const Blog = () => {
  const [blogs] = useState([
    { id: 1, title: "Exploring the Alps", img: vietnam , description:" Vietnam, is a country in Southeast Asia, known for its diverse landscapes, rich history, and vibrant culture, with a long coastline and mountainous regions. " },
    { id: 2, title: "A Trip to Bali", img: bali, description:"Bali, known as the Island of Gods, is a vibrant Indonesian island renowned for its stunning natural beauty, rich culture, and spiritual traditions, offering a unique blend of lush landscapes, ancient temples, and warm hospitality. " },
    { id: 3, title: "The Beauty of Santorini", img: santorini , description:"Santorini, a Cycladic island in the Aegean Sea, is renowned for its dramatic volcanic landscape, whitewashed houses clinging to cliffs, stunning sunsets, and rich history, making it a popular destination for travelers seeking a unique"}
  ]);

  return (
    <div className="container">
      <h1>Recent Blog Posts</h1>
      <div className="blog-container">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <img src={blog.img} alt={blog.title} className="blog-image"/>
            <h3>{blog.title}</h3>
            <p className="blog-description">{blog.description}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
