import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { actionCreators } from './state/index';

// function App() {
//     const account = useSelector((state) => state.account);
//     const dispatch = useDispatch();

//     const { depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);

//     return (
//         <div className="App">
//             <h1>{account}</h1>
//             <button onClick={() => depositMoney(1000)}>Deposit</button>
//             <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
//         </div>
//     );
// }

import { decrement, increment, incrementByAmount } from './redux/counter';

function App() {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>Increment By 10</button>
        </div>
    );
}

export default App;
