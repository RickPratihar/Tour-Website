import React from "react";
import './ServicePage.css'
import ServicesImg from "../../assets/24.jpg"

const ServicePage = () => {
  return (
    <div>
      <div className="services-cont">
        <div className="container">
          <h2>Our Popular Services</h2>
        <p>
          Our Travlger website offers a comprehensive range of services
          designed to make your travel experiences unforgettable. Whether you're
          an adventurous explorer seeking thrilling destinations or a leisure
          traveler in search of relaxation, our platform caters to all your
          needs. With an easy-to-navigate interface, you can effortlessly browse
          and book flights, hotels, and vacation packages tailored to your
          preferences. Our dedicated team of travel experts is available around
          the clock to assist you in planning your dream getaway. From exotic
          tropical paradises to cultural expeditions and everything in between,
          we provide a diverse array of options to suit every traveler's taste.
          Trust us to handle all the details, ensuring a seamless and
          stress-free travel experience, leaving you free to savor the moments
          and create lasting memories. Explore the world with confidence through
          our tour and travel services, where adventure awaits at every click.
        </p>
        </div>
        <img src={ServicesImg} />
      </div>
    </div>
  );
};

export default ServicePage;
