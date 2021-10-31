import './App.css';

import paella from './assets/paella.jpg'
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card image={paella}/>
    </div>
  );
}

export default App;
