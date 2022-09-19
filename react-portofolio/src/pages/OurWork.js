import React from "react";
// Import Styles
import styled from "styled-components";
// Import Link
import { Link } from "react-router-dom";

// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = () => {
  return (
    <StyledOurWork>
      <StyledMovie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work">
          <img src={athlete} alt="Athlete Image"></img>
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work">
          <img src={theracer} alt="Racer Image"></img>
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work">
          <img src={goodtimes} alt="Goodtimes Image"></img>
        </Link>
      </StyledMovie>
    </StyledOurWork>
  );
};

const StyledOurWork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const StyledMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export default OurWork;
