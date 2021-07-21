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
import store from './components/store';
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store = {store}>
      <Router>
        <Header />
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/bookpreview/:book_id' component={BookInfo}></Route>                
                </Switch>
              <Footer />
      </Router>
    </Provider>
  );
}

export default App;
