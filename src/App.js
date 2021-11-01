import React from 'react';
import './App.css';
import { cardInfo } from './assets/card-data';
import { data as employees } from './assets/employees-data';
import paella from './assets/paella.jpg';
import Card from './components/Card';
import Employees from './components/Employees/Employees';
import { Menu, MenuLink } from './components/Menu';


function App() {
  return (
    <div className="App">
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/contact" isActive>Contact</MenuLink>
        <MenuLink to="/posts">Posts</MenuLink>
      </Menu>
      <Card image={paella} data={cardInfo} />
      <Employees data={employees} />
    </div>
  );
}

export default App;
