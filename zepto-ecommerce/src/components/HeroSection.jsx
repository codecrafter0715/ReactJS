import React, { useEffect, useState } from "react";
import axios from "axios";


const iconMap = {
    "Dairy & Beverages": "🥛",
    "Snacks": "🍟",
    "Bakery & Cookies": "🍪",
    "Frozen Food": "🧊",
    "Packaged Food": "📦",
    "Masala & Dry Fruits": "🌰",
    "Meat, Fish & Eggs": "🍗",
    "Zepto Cafe": "☕",
    "Jewellery": "💍",
    "All": "🛒",
  };

const HeroSection = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      axios
        .get("https://67ff8cce58f18d7209f1ad50.mockapi.io/api/v1/products")
        .then((res) => {
          const uniqueCategories = [
            "All",
            ...new Set(res.data.map((item) => item.category)),
          ];
          setCategories(uniqueCategories);
        })
        .catch((err) => console.log(err));
    }, []);
  
    // Split categories into chunks of 6 for multiple carousel slides
    const chunkedCategories = [];
    for (let i = 0; i < categories.length; i += 6) {
      chunkedCategories.push(categories.slice(i, i + 6));
    }
  
    return (
      <div className="container mt-5">
        <div
          id="categoryCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner bg-light rounded">
            {chunkedCategories.map((group, idx) => (
              <div
                key={idx}
                className={`carousel-item ${idx === 0 ? "active" : ""}`}
              >
                <div
                  className="d-flex justify-content-around py-4 fw-semibold text-center"
                  style={{ gap: "40px", fontSize: "20px" }}
                >
                  {group.map((cat, index) => (
                    <div key={index}>
                      {iconMap[cat] || "🛍️"} {cat}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
  
          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#categoryCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark rounded-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#categoryCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark rounded-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  };

export default HeroSection