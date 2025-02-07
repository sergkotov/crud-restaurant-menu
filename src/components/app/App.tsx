import './App.css';
import AppHeader from '../app-header/App-header';
import SearchPanel from '../search-panel/Search-panel';
import AppFilter from '../app-filter/App-filter';
import PositionsList from '../positions-list/Positions-list';
import PositionAdd from '../position-add/Position-add';
import { MenuItem } from '../../shared/types/restaurantTypes';
import { useEffect, useState } from 'react';

const data: MenuItem[] = [
  {
    id: '0',
    title: 'Meat Pizza',
    price: 15,
    needIncreasePrice: false,
    bestSeller: true
  },
  {
    id: '1',
    title: 'Vegan Pizza',
    price: 11,
    needIncreasePrice: true,
    bestSeller: false
  },
  {
    id: '2',
    title: 'Orange Juice',
    price: 3,
    needIncreasePrice: false,
    bestSeller: true
  },
  {
    id: '3',
    title: 'Chicken Pizza',
    price: 13,
    needIncreasePrice: false,
    bestSeller: false
  },
  {
    id: '4',
    title: 'Tea',
    price: 0.5,
    needIncreasePrice: true,
    bestSeller: false
  }
]

function App() {
  const [allPositions, setAllPositions] = useState<MenuItem[]>(data);
  const [filteredPositions, setFilteredPositions] = useState<MenuItem[]>([]);
  const [maxId, setMaxId] = useState('0');
  const [info, setInfo] = useState({totalPositions: 0, bestSellerPositions: 0});
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    let currMax = +maxId;
    for(let item of allPositions) {
      if(+item.id > currMax) {
        currMax = +item.id;
      }
    }
    setMaxId(String(currMax));
  }, []);

  useEffect(() => {
    const totalPositions = allPositions.length;
    const bestSellerPositions = allPositions.filter(item => item.bestSeller === true).length;
    setInfo({totalPositions: totalPositions, bestSellerPositions: bestSellerPositions})
  }, [allPositions]);

  useEffect(() => {
    const searchRegExp = new RegExp(search, 'ig');
    let filteredData = allPositions.filter(item => item.title.search(searchRegExp) !== -1);
    if(filter === "increase") {
      filteredData = filteredData.filter(item => item.needIncreasePrice === true);
    }
    if(filter === "price") {
      filteredData = filteredData.filter(item => item.price >= 10);
    }
    setFilteredPositions(filteredData);
  }, [search, filter, allPositions]);

  function deletePosition(id: string) {
    setAllPositions(state => state.filter(item => item.id !== id));
  }

  function changeMaxId(currMax: string) {
    setMaxId(String(+currMax + 1));
  }

  function addPosition(item: MenuItem) {
    setAllPositions(state => ([
      ...state,
      item
    ]));
  }

  function changeIncreaseOrSeller(id: string, type: string) {
    setAllPositions(state => state.map(item => {
      if(item.id === id) {
        if(type === 'increase') {
          item.needIncreasePrice = !item.needIncreasePrice;
        } else if(type === 'like') {
          item.bestSeller = !item.bestSeller;
        }
      }
      return item
    }));
  }

  function updateSearch(str: string) {
    setSearch(str);
  }

  function updateFilter(type: string) {
    setFilter(type);
  }

  return (
    <div className='app'>
        <AppHeader {...info}/>
        <div className="search-panel">
          <SearchPanel updateSearch={updateSearch}/>
          <AppFilter updateFilter={updateFilter}/>
        </div>
        <PositionsList items={filteredPositions} deleteItem={deletePosition} changeIncreaseOrSeller={changeIncreaseOrSeller}/>
        <PositionAdd maxId={maxId} changeMaxId={changeMaxId} addPosition={addPosition}/>
    </div>
  );
}

export default App;
