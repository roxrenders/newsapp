
import './App.css';
import Pagination from './Pagination';
import Search from './Search';
import Stories from './Stories';



const App = () => {

  return (
    <div className="App">
      
      <Search />
      <Pagination />
      <Stories />
    </div>
  )
}

export default App;
