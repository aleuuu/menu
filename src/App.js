import './style.scss';
import Card from './components/cardSushi'
import Search from './components/searchBar';
import Main from './components/main'
import Back from './components/back'

import {
  BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

function App(props) {

  let FetchedCards = props.rolls.map(roll => <Card title={roll.title} nori={roll.nori} rice={roll.rice} cheese={roll.cheese} tomate={roll.tomate} cucumber={roll.cucumber} chiken={roll.chiken} salat={roll.salat} perec={roll.perec}></Card>)

  return (
    <Router>
      <div className='container'>
        <div className="search-row">
          <Search></Search>
          <Back></Back>
        </div>
        
        <Routes>
          <Route path="/cezar" element={FetchedCards}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={Main}></Route>
        </Routes>
      </div>
    </Router>
  );
}

    
export default App;
