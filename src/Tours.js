import React, { useState } from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  const [likedTours, setLikedTours] = useState([]);

  const toggleLike = (id) => {
    if (likedTours.includes(id)) {
      setLikedTours(likedTours.filter((tourId) => tourId !== id));
    } else {
      setLikedTours([...likedTours, id]);
    }
  };

  const renderTours = () => {
    // Sort tours based on whether they are liked or not
    const sortedTours = tours.sort((a, b) => {
      const aIsLiked = likedTours.includes(a.id);
      const bIsLiked = likedTours.includes(b.id);
      if (aIsLiked && !bIsLiked) return -1;
      if (!aIsLiked && bIsLiked) return 1;
      return 0;
    });

    return sortedTours.map((tour) => (
      <Tour
        key={tour.id}
        {...tour}
        removeTour={removeTour}
        isLiked={likedTours.includes(tour.id)}
        toggleLike={toggleLike}
      />
    ));
  };

  if (tours.length === 0) {
    return (
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        <p>No tours available.</p>
      </section>
    );
  }

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>{renderTours()}</div>
    </section>
  );
};

export default Tours;
