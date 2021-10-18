import { connect } from 'react-redux';

function App(props) {
  console.log(props);
  const { count, dispatch} = props;

  const increment = () => {
    const action = {
      type: 'increment' 
    }

    dispatch(action)
  }

  const decrement = () => {
    const action = {
      type: 'decrement' 
    }
    
    dispatch(action)
  }
  return (
    <div>
      <h1>Counter is: {count} </h1>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const withProps = connect(mapStateToProps);

const AppWithProps = withProps(App); //паттерн компонента высшего порядка

export default AppWithProps;
