import './App.css';
import { useLocalStorage } from 'react-use';

function App() {

  const [value, setValue, remove] = useLocalStorage('user', {"name": 'Daniel', "age": 30 });
  localStorage.setItem('user2', JSON.stringify({"name": 'Daniel', "age": 30}));
  return (
    <div className="App">
      <div>        
        <h1>UseLocalStorage</h1>
        <div> Value: {value.name}</div>
        <button onClick={() => setValue({name: 'Joao', age: 50})}>bar</button>
        <button onClick={() => remove()}>Remove</button>
      </div>
      <div>
        <h1>localStorage</h1>
        <div> Value: {JSON.parse(localStorage.getItem('user2')).name}</div>
        <button onClick={() => localStorage('user2','novoValor')}>bar</button>
        <button onClick={() => localStorage.removeItem('user2')}>Remove</button>
      </div>
    </div>
  );
}

export default App;

