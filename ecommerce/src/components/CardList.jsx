import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ data }) => {
  console.log("In cardList component", data);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data);
  }, [data]);
  

  return (
    <div className="container bg-light py-4">
      <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>
        🍏 Fresh Fruits Collection 🍊
      </h2>
      <div className="row justify-content-center">
        {cards.length > 0 ? (
          cards.map((elmt, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <Card fruit={elmt} />
            </div>
          ))
        ) : (
          <h4 className="text-center text-danger">No data available</h4>
        )}
      </div>
    </div>
  );
};

export default CardList;