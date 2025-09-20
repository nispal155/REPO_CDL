import React, { useEffect, useState } from "react";
import slide1 from "../assets/slide1.avif";
import slide2 from "../assets/slide2.avif";
import slide3 from "../assets/slide3.avif";
import slide4 from "../assets/slide4.jpeg";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));

  const slideshowImages = [slide1, slide2, slide3, slide4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 4000); // 4 seconds interval
    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  return (
    <div className="home-container">
      {slideshowImages.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <div className="home-overlay">
        <h1>Welcome {user ? user.username : "Guest"} 👋</h1>
        <p>Discover the best gadgets at GetGadgets!</p>
      </div>
    </div>
  );
}

export default Home;
