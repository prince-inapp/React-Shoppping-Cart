import './App.css';
import NavBar from './components/NavBar';
import Card from './UI/Card';
import DisplayItem from './components/DisplayItem';
import {useState} from 'react';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Book',
      image: 'https://picsum.photos/200/300',
      description: 'This is a book',
      price: 10,
      quantity: 1,
    },
    {
      id: 2,
      title: 'Pen',
      image: 'https://picsum.photos/200/300',
      description: 'This is a pen',
      price: 5,
      quantity: 1

    }
  ]);

  return (
    <div>
      <NavBar>
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
      </NavBar>
      <Card>
        {items.map((item) => {
          console.log(item);
          return <DisplayItem item={item} />
          })}
      </Card>

    </div>
  );
}

export default App;
