import React from "react";

export default function ({ char }) {
  return (
    <div className="card">
      <img className="img" src={char.imageUrl} alt={char.image} />
      <div className="info">
        <h3>{char.fullName}</h3>
        <p>{char.family}</p>
      </div>
    </div>
  );
}
