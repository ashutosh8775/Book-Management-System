import './App.css';
import Home from './components/Home/homeComponent';
import Header from './components/Header/headerComponent';
import Footer from './components/Footer/footerComponent';
import BookInfo from './components/BookPreview/BookInfo/BookInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

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
