import './App.css';

import paella from './assets/paella.jpg';
import { cardInfo } from './assets/card-data';
import Card from './components/Card';
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
    </div>
  );
}

export default App;
