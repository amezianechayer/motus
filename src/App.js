import './app.css';
import Grid from './components/grid';
import Header from './components/header';
import Keyboard from './components/keyboard';


function App() {
  const width = 6
  const height = 6
  return (
    <div className="app-container">
      <Header/>
      <Grid width={width} height={height} />
      <Keyboard/>
    </div>
  );
}

export default App;
