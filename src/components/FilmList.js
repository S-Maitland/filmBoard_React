import React from 'react';
import Film from './Film';

const FilmList = (props) => {
  const filmNodes = props.data.map((film) => {
    return (
      <ul key={film.id}>
        <li>
          <Film name = <a href={film.url}>{film.name}</a>/>
        </li>
      </ul>
    );
  })

  return(
    <div>
      {filmNodes}
    </div>
  );
}
export default FilmList;
