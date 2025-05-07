import './App.css';
import Image from './smallroom1.png';
import Image2 from './smallroom2.png';
const logo = <img src={Image} alt="로고" className="test1"></img>;
const logo2 = <img src={Image2} alt="로고" className="test1"></img>;

function App() {
  return (
      <div className="App">

        <div >{logo}</div>
        <div >{logo2}</div>



      </div>
  );
}

export default App;
