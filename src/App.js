import Create from './Create';
import Read from './Read';
import Update from './Update';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          
        </div>
        <div className="flex-container">
          <h1 className="logo"><a href="/">MERN App 4 CRUD</a></h1>
          <ul className="navigation">
            <li><a href="/create">Create</a></li>
            <li><a href="/read">Read</a></li>
            <li><a href="/read">Update</a></li>
            <li><a href="/delete">Delete</a></li>
          </ul>
        </div>
        <Route path='/'/>
        <Route path='/create' component={Create}/>
        <Route path='/read' component={Read}/>
        <Route path='/update/:id' component={Update}/>
        <Route path='/delete' component={Read}/>
      </div>
    </Router>
  );
}

export default App;
