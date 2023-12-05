import Todo from './models/todo';
import Todos from './components/Todos';

function App() {
const todos = [
  new Todo("learn react"),
  new Todo("learn Typescript")
];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
