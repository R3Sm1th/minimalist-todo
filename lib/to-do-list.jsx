const App = () => {
  const message = "If you see this message in your browser, that means React is successfully mounted! 🙌";
  const [todos, setTodos] = React.useState([
    { title: "Code a to-do list", done: false },
    { title: "Eat breakfast", done: true },
    { title: "Do some exercise", done: false },
    { title: "Water the plants", done: true }
  ]);
  const [title, setTitle] = React.useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }
  const addTodo = () => {
    console.log("Adding a todo...");
    todos.push({title: title, done: false})
    setTitle('');
  }
  const removeTodo = (index) => {
    console.log("Removing a todo...");
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  const markComplete = (index) => {
    console.log("Changing status of a todo...");
    const updatedTodos = [...todos]
    updatedTodos[index].done = updatedTodos[index].done ? false : true
    setTodos(updatedTodos)
  }

  return (
    <div id="todosContainer">
      <div class="col-lg-4 bg-white rounded shadow-lg p-5 m-5">
        <h1 class="header">React(ive) To-Do List</h1>
        <ul class="no-list-style">
          {todos.map((item, index) => (
            <li class="shadow-sm rounded px-4 py-3 mb-2 border d-flex justify-content-between" key={index}>{item.title} <input type="checkbox" checked={item.done} onClick={() => markComplete(index)}/> <button type="button" class="btn-close" onClick={() => removeTodo(index)}></button></li>
          ))}
        </ul>
        <form class="px-4 py-3 mb-2 border d-flex justify-content-between">
          <label htmlFor="todoTitle">Title:</label>
          <input type="text" id="todoTitle" value={title} onChange={handleTitleChange} />
          <button type="button" onClick={addTodo}>Add Todo</button>
        </form>
      </div>
    </div>
  );

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
