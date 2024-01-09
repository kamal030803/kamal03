import React from "react";
import "./Portfolio.css";
import Mapp from "../../assets/churn.jpeg";
import WOut from "../../assets/mern.png";
import Place from "../../assets/asme.png";
import Dojo from "../../assets/weather.png";
import ism from "../../assets/ism.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Place} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>Official Website of ASME IIT(ISM) Dhanbad</h3>
            <h5>
            ❖  Collaboratively built the official website for ASME student chapter at IIT (ISM) Dhanbad.
❖ Admin can add/update information about upcoming 
events of the organization and add/update 
organization members using the admin dashboard.
❖ Implemented backend of the website using Sanity.
❖ It has 500+ active monthly users.
❖ Tech Stack: Next JS, GROQ and Sanity
            </h5>
            <br></br>
            <a
              href="https://asmeiitdhanbad.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Website
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Dojo} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>Weather Blaze - Weather App</h3>
            <h5>❖ Developed a weather app, which displays the 
temperature and weather condition of the entered 
city. 
❖ This website uses OpenWeatherMap to extract 
information. 
❖ Tech Stack: HTML, CSS, JavaScript</h5>
            <br></br>
            <a
              href="https://kamal030803.github.io/WeatherBlaze/"
              className="btn btn-primary"
              target="_blank"
            >
              Website
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ism} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>ISMConnect : For IIT Dhanbad Alumni</h3>
            <h5>
            ❖ Collaboratively developed a website to increase 
alumni connections after graduation.
❖ Implemented a connection feature for alumni 
networking and post sharing.
❖ I managed the database while working with a team 
who were handling the front-end using React.
❖ Tech Stack: HTML, CSS, JavaScript, PHP, Laravel, 
React, MySQL.

            </h5>
            <br></br>
            <a
              href="https://ism-connect-example.onrender.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Website
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Mapp} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>Customer Churn Prediction</h3>
            <h5>
            ❖ Developed the model using machine learning 
techniques using Kaggle datasets.
❖ Cleaned and preprocessed the dataset, visualized
distributions and addressed class imbalance.
❖ Implemented different classification models like 
XGBoost and evaluated each model.
❖ Model score achieved was 98%.
❖ Deployed the model by creating Flask API.
❖ Tech Stack: Python, NumPy, Pandas, ScikitLearn
            </h5>
            <br></br>
            <a
              href="https://github.com/kamal030803/MLProject-Churn-Predictor"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WOut} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>Work-out Website</h3>
            <h5>
            ❖ A MERN Stack Application In which we can Create and Delete a
              Workout from the front end using ReactJS and update the MongoDB
              database using the Backend Server. <b>❖ Tech Stack: MongoDB,
              ExpressJS, ReactJS, NodeJS, Mongoose</b>
            </h5>
            <br></br>
            <a
              href="https://github.com/kamal030803/Workout-Website-MERN"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        
      </div>
    </section>
  );
};

export default Portfolio;
