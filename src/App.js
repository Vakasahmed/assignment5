import './App.css';
import Img from './Images/img1.jpg';
import Img2 from './Images/img2.jpg';
import Cards from './Components/Card';

function App() {

  return (
    <div className="App">
    <Cards movie="My Journey" yearAndAuthor="2000, Vakas" images={Img} />
    <Cards
      movie="100 Days Of Code"
      yearAndAuthor="2002, Vakas"
      images={Img2}
    />
  </div>
  );
}

export default App;
