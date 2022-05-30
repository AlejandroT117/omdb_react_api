import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

export const Movie = () => {
  const { movie } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    movie ? setIsLoading(false) : setIsLoading(true);
  }, [movie]);

  return (
    <>
      {isLoading ? (
        <p>Cargando...</p>
      ) : movie.Title ? (
        <>
          <hr />
          <div className="poster">
            <img src={movie.Poster} alt="imagen" />
          </div>

          <div className="text">
            <h2>Title: {movie.Title}</h2>
            <h3>{movie.Year}</h3>
            <h3>Dir: {movie.Director}</h3>
            <h3>{movie.Runtime}</h3>
            <h5>{movie.Actors}</h5>
            <p>{movie.Plot}</p>
            <h3>
              Rotten Tomatoes: {movie.Ratings?.[1]?.Value || "Sin puntuación"}
            </h3>
          </div>
        </>
      ) : (
        <>
          <hr />
          <h1>Movie not found</h1>
        </>
      )}
    </>
  );
};
