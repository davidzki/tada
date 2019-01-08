import React from 'react'

const TodoItem = (props) => {
  const {todo, index} = props;
  return (
    <li>



      <div>
        <label>Task description</label>
        <div className={todo.done ? 'done' : ''}>{todo.title}</div>
      </div>

      <div>
        <label>ETH at stake</label>
        <div>{todo.amount}</div>
      </div>

      <div>
        <label>Time left</label>
        <div>{todo.timeLeft}</div>
      </div>

      <div>
        <label>Done?</label>
        <div>
        <button onClick={() => props.removeTodo(index)}><i className="fas fa-check-circle"></i></button>
        </div>
      </div>
    </li>
  )
}

export default TodoItem
