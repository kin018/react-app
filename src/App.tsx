import ListGroup from './components/ListGroup';

function App() {
  let items = ['Apple', 'Banana', 'Cherry', 'Pineapple', 'Elderberry'];
  let handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Fruits"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
