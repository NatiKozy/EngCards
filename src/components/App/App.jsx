import '../../style/App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import data from '../../words.json'

function App() {
  console.log(data.words);

  return (
    <div className="App">

  <Header />
  <Main  arrWords = {data.words}/>
  <Footer/>
    </div>
  );
}

export default App;
