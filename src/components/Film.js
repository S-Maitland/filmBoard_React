import React from 'react';

function Film(props){
  return(
    <div>
      <p>{props.name}</p>
      <p>{props.url}</p>
    </div>
  );
}

export default Film;
