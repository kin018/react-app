import { Fragment } from 'react';
import { MouseEvent } from 'react';

function ListGroup() {
  let fruits = ['Apple', 'Banana', 'Cherry', 'Pineapple', 'Elderberry'];

  //Event Handler
  let handleClick = (event: MouseEvent) => console.log(event); //type annotation in TS

  const getMessage = () => {
    fruits.length === 0 && <p>No fruit found</p>;
  };
  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {fruits.map((fruit) => (
          <li className="list-group-item" key={fruit} onClick={handleClick}>
            {fruit}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
