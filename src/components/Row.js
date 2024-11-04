import axios from "../api/axios";
import React, { useCallback, useEffect, useState } from "react";
import "./Row.css";

function Row({ title, id, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // useCallback => 컴포넌트가 리렌더링 될 떄 재생성을 막아주는 메모이제이션
  // fetchUrl이 바뀔 때 fetchMovieData 새로 생성됨
  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  }, [fetchUrl]);

  // fetchMovieData 함수가 다시 만들어지면 다시 생성 호출
  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          >
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name}
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            {">"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Row;
