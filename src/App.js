import { connect } from "react-redux";
import * as actionCreators from "./actions"

function App(props) {
  console.log(props);
  const { count, step, dispatch } = props;

  const increment = () => {
    const action = actionCreators.increment()

    dispatch(action);
  };

  const decrement = () => {
    const action = actionCreators.decrement()

    dispatch(action);
  };

  const changeStep = ({target : {value}}) => {
    const action = actionCreators.setStep(Number(value))
    
        dispatch(action);
  };
  return (
    <div>
      <h1>Counter is: {count} </h1>
      <input onChange={changeStep} value={step} />
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
  };
  

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App); //Каррирование
