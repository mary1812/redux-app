import { connect } from "react-redux";
import * as actionCreators from "./../../actions";

function Counter(props) {
  console.log(props);
  const { count, step, dispatch } = props;

  const increment = () => {
    dispatch(actionCreators.increment());
  };

  const decrement = () => {
    dispatch(actionCreators.decrement());
  };

  const changeStep = ({ target: { value } }) => {
    const action = actionCreators.setStep(Number(value));

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
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Counter); 