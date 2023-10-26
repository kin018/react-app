import ListGroup from './components/ListGroup';

function App() {
  let items = ['Apple', 'Banana', 'Cherry', 'Pineapple', 'Elderberry'];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
