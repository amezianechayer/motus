import './app.css';
import Grid from './components/grid';
import Header from './components/header';
function App() {
  const width = 6
  const height = 6
  return (
    <div className="app-container">
      <Header/>
      <Grid width={width} height={height} />
    </div>
  );
}

export default App;
