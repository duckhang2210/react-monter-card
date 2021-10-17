
import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.component.jsx'

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  handleChange = e => this.setState({searchField: e.target.value});

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState( { monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <h1>Monster Card</h1>
        <SearchBox
          placeholder='Search Monster'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
        
      </div>
      
    )
  }
}

export default App;
