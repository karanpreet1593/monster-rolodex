import react from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.component';


class App extends react.Component {
  constructor(){
    super();
    this.state={
        monsters:[],
        searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json() )
    .then(users => this.setState({monsters:users}))
    .catch(err => console.log('oops error occured', err))
  }
  render(){
    const {monsters, searchField}= this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()) )
    return (
      <div className="App">
          <h1>Monster Rolodex</h1>
          <SearchBox
          className='search'
          placeholder='search monsters'
          handleChange={e =>{this.setState({searchField:e.target.value})}}
          />
          <CardList monsters={filteredMonsters}></CardList>
       </div>
    );
  }
 
}

export default App;
