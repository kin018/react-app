import { Fragment } from 'react';

function ListGroup() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
