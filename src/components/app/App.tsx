import './App.css';
import AppHeader from '../app-header/App-header';
import SearchPanel from '../search-panel/Search-panel';
import AppFilter from '../app-filter/App-filter';
import PositionsList from '../positions-list/Positions-list';
import PositionAdd from '../position-add/Position-add';

function App() {
  return (
    <div className='app'>
        <AppHeader/>
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <PositionsList/>
        <PositionAdd/>
    </div>
  );
}

export default App;
