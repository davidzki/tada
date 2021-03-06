import React from 'react'

const NewTodoForm = (props) => {

  return (

            <form onSubmit={props.formSubmitted}>

              <input
                  onChange={props.newTodoChanged}
                  id="newTodo"
                  name="newTodo"
                  value={props.newTodo}
                  placeholder="Name of task"
                  />

              <input
                onChange={props.ethAmountChanged}
                value={props.ethAmount}
                id="ethAmount"
                type="number"
                min="0.01"
                step="0.01"
                placeholder="Amount in ETH"
                />


            <div>
              <button type="submit" className="fas fa-plus-circle"></button>
            </div>

            </form>
  )
}

export default NewTodoForm
