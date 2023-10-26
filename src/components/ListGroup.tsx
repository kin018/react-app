import { Fragment, useState } from 'react';

interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
  //This is a state hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [name, setName] = useState('');

  const getMessage = () => {
    items.length === 0 && <p>No item found</p>;
  };
  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
