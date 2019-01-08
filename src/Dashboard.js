import React from 'react'

const Dashboard = (props) => {
  return (
    <div className="dashboard">
            <p>Tasks in progress: {props.todos.length}</p>
    </div>
  )
}

export default Dashboard
