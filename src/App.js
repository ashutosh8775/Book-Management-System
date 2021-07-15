import logo from './logo.svg';
import './App.css';
import Home from './components/Home/homeComponent';
import Header from './components/Header/headerComponent';
import Footer from './components/Footer/footerComponent';
import FormModal from './components/Forms/FormModal';
import Review from './components/BookPreview/Reviews/Review';

function App() {
  return (
    <div>
      <Header />
      <Router>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/bookpreview' component={BookInfo}></Route>                   
                </Switch>
            </Router>
      <Footer />
    </div>
  );
}

export default App;
