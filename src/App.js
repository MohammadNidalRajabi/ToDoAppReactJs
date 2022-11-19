import logo from './logo.svg';
import './App.css';
import Form from './componetnts/form/form.componetnts';
import { useState } from 'react';
import List from './componetnts/llist/list.copmponentnts';
import Popup from './componetnts/popup/popup.componetnt';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import Header from './componetnts/header/header.componentnts';
function App() {
  const [item, setItem] = useState(JSON.parse(localStorage.getItem("todolist")) || []);
  const [Page, setPage] = useState("View");
  const addItem = (Item) => {
    const newItems = [...item, Item];
    setItem(newItems);
    localStorage.setItem('todolist', JSON.stringify(newItems));

  }

  const Delete = (id) => {
    const newItems = item.filter(item => item.id !== id);
    setItem(newItems);
    localStorage.setItem('todolist', JSON.stringify(newItems));

  }
  const Checked = (id) => {
    const newItems = item.map(item => item.id === id ? { ...item, checked: true } : item);
    setItem(newItems)
    localStorage.setItem('todolist', JSON.stringify(newItems));
  }




  return (
    <BrowserRouter>
      <div className="App">

        <Header></Header>
        <Routes>
          <Route path='/View' element={<List onDelete={Delete} onCheck={Checked} items={item} />} />
          <Route path='/Add' element={<Form onAddFunction={addItem} />} />
          <Route path='*' element={<h1>page not found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
