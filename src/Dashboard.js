import React from 'react'

const Dashboard = (props) => {
  return (
    <div className="dashboard">
            <p>Tasks in progress: <span className="number">{props.todos.length}</span></p>
    </div>
  )
}

export default Dashboard
