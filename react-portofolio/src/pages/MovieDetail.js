import React, { useState, useEffect } from "react";
import { MovieState } from "../movieState";
// Import useLocation
import { useLocation } from "react-router-dom";
// Import Styles
import styled from "styled-components";

const MovieDetail = () => {
  const url = useLocation();
  // State
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //   useEffect > this to run when the component runs
  useEffect(() => {
    const currentMovie = movies.filter(
      (stateMovie) => stateMovie.url === url.pathname
    );
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {/* Check if the movie is available and if it is , only then render the below: */}
      {movie && (
        <StyledMovieDetails>
          <StyledHeadline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie image"></img>
          </StyledHeadline>
          <StyledAwards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyledAwards>
          <StyledImageDisplay>
            <img src={movie.secondaryImg} alt="movie image"></img>
          </StyledImageDisplay>
        </StyledMovieDetails>
      )}
    </>
  );
};

const StyledMovieDetails = styled.div`
  color: white;
`;
const StyledHeadline = styled.div`
  min-height: 90vh;
  position: relative;
  padding-top: 20vh;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5rem 10rem;
`;
const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  p {
    padding: 2rem 0rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
`;
const StyledImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

// Award Component
const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};
export default MovieDetail;
