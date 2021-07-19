import logo from './logo.svg';
import './App.css';
import Home from './components/Home/homeComponent';
import Header from './components/Header/headerComponent';
import Footer from './components/Footer/footerComponent';
import FormModal from './components/Forms/FormModal';
import BookInfo from './components/BookPreview/BookInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div>
     
      <Router>
        <Header />
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/bookpreview/:book_id' component={BookInfo}></Route>                
                </Switch>
              <Footer />
      </Router>
    
    </div>
  );
}

export default App;
