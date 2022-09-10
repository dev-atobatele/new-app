import logo from './logo.svg';
import './App.css';
function App() {
  player()
  return (
    <div className="App">
      <p>{player()}</p>
    </div>
  );
}
// Find players with three properties (name , team , season) in a player object return any players with matching properties
function player() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c192a14e1amshfe6b230eab1a666p193894jsnf81b950f0ee9',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  };
  
  fetch('https://free-nba.p.rapidapi.com/players?page=98&per_page=25', options)
    .then(response => response.json())
    .then(response => console.log(response.data))
    .catch(err => console.error(err))
    
}
export default App;
