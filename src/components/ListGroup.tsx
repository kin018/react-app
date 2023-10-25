import { Fragment, useState } from 'react';

function ListGroup() {
  let fruits = ['Apple', 'Banana', 'Cherry', 'Pineapple', 'Elderberry'];
  //This is a state hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [name, setName] = useState('');

  const getMessage = () => {
    fruits.length === 0 && <p>No fruit found</p>;
  };
  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {fruits.map((fruit, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={fruit}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {fruit}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
