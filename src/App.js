import './App.css';
import { useLocalStorage } from 'react-use';

function App() {

  const [value, setValue, remove] = useLocalStorage('my-key', {"name": 'Daniel', "age": 30 });
  const [value2, setValue2, remove2] = useLocalStorage('my-key-2', 'valor incial-daniel-lopes');
  const [value3, setValue3, remove3] = useLocalStorage('my-key-3', 'valor-inicial-3', {
    raw: true
  })
  return (
    <div className="App">
        <h1>Hello World</h1>
      <div>        
        <div> Value: {value.name}</div>
        <button onClick={() => setValue('bar')}>bar</button>
        <button onClick={() => setValue('baz')}>baz</button>
        <button onClick={() => remove()}>Remove</button>
      </div>
    </div>
  );
}

export default App;

