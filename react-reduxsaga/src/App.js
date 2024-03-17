import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from './actions';
import './App.css';
import { increaseCount } from './reducer'
import { getUsersRequest } from './thunk';

function App() {
  const count = useSelector((state) => state.myFirstReducer.count);
  const users = useSelector(state => state.userReducer.users)
  const dispatch = useDispatch(); 

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increaseCount())}>Increase Count</button>
      <div>
        Users: {users.map((user => (<div>{user.name}</div>)))}
        <button onClick={() => dispatch(getUsersFetch())}>Get Users</button>
      </div>
    </div>
  );
}

export default App;
