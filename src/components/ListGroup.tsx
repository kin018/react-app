import { Fragment } from 'react';

function ListGroup() {
  let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  fruits = [];

  //const message = fruits.length === 0 ? <p>No fruit found</p> : null
  //or this below either do the same thing only thing is it would be {message} instead
  const getMessage = () => {
    fruits.length === 0 && <p>No fruit found</p>;
  };
  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
