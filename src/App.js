import './style.scss';
import Card from './components/cardSushi'
import Search from './components/searchBar';

function App(props) {

  let FetchedCards = props.rolls.map(roll => <Card title={roll.title} nori={roll.nori} rice={roll.rice} cheese={roll.cheese} tomate={roll.tomate} cucumber={roll.cucumber} chiken={roll.chiken} salat={roll.salat} perec={roll.perec}></Card>)

  return (
    <div className='container'>
      <Search></Search>
      {FetchedCards}
    </div>
  );
}

    
export default App;
