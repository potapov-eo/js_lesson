import './App.css';
import pic1 from "./pic/Untitled1.png"
import pic2 from "./pic/Capture.PNG";
import pic3 from "./pic/Capture2.PNG";

function App() {
  return (
    <div className="App">
        <img alt="loading" src={pic1}/>
        <div> - откройте task 1.1.js</div>
        <div> - Выполните задания</div>
        <div> - В терминале запустите тесты(Yarn test)</div>
        <div> - Так выглядит консоль когда ошибок нет</div>
        <img alt="loading" src={pic2}/>
        <div> - Так выглядит при ошибке в решении</div>
        <img alt="loading" src={pic3}/>
    </div>
  );
}

export default App;
