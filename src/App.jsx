import DataFetcher from "./components/10_DataFetcher";
import ExceedCart from "./components/07_ExceedCart";
import FirstEffect from "./components/05_FirstEffect";
import FormExample from "./components/08_FormExample";
import FormValidation from "./components/09_FormValidation";
import ManualSync from "./components/06_ManualSync";
import MyButton from "./components/01_MyButton";
import Profile from "./components/02_ProfileCard";
import SetColor from "./components/04_SetColor";
import FormSpread from "./components/11_FormSpread";
import StateHook from "./components/03_CounterButton";
import ArraySpreadList from "./components/12_ArraySpreadList";

function App() {
  return (
    <div className="flex m-6">
      <div className="flex-1 ">
        <div className="myCard">
          <h1 className="pb-2 font-bold text-2xl ">Welcome to my web app</h1>
          <MyButton />
        </div>
        <div className="myCard">
          <Profile />
        </div>
        <div className="myCard flex flex-col">
          <h1>Counters that update separately</h1>
          <StateHook />
          <StateHook />
        </div>
        <div className="myCard">
          <SetColor />
        </div>
        <div className="myCard">
          <FirstEffect />
        </div>
        <div className="myCard">
          <ManualSync />
        </div>
        <div className="myCard">
          <ExceedCart />
        </div>
        <div className="myCard">
          <FormExample />
        </div>
        <div className="myCard">
          <FormValidation />
        </div>
        <div className="myCard">
          <DataFetcher />
        </div>
        <div className="myCard">
          <FormSpread />
        </div>
        <div className="myCard">
          <ArraySpreadList />
        </div>
      </div>
    </div>
  );
}

export default App;
