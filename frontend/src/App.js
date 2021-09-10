import Header from './Components/Header';
import NotesListPage from './Pages/NotesListPage';
import NotePage from './Pages/NotePage';
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header/>
          <Route path="/" exact component={NotesListPage}/>
          <Route path="/note/:id" component={NotePage}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
