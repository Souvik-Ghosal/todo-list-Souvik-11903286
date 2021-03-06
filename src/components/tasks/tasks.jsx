import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import SingleTask from './single-task'
import selectTasks from '../../selectors/tasks'
import DeleteAll from './delete-all'
import Filter from './filter'

import '../../styles/task.css'

const Tasks = (props) => (
  <div className="container">
    <div className="card center-text add-card">
      <Link to="/create">Add Task</Link>
    </div>
    <Filter />
    <div className="row">
      <div className="column xlarge-2 medium-2 hide-mobile"></div>
      <div className="column xlarge-8 medium 8 small-12">
        <div className="tasks">
          {props.tasks.map((task) => {
            return <SingleTask key={task.id} {...task} />;
          })}
        </div>
      </div>
      <div className="column xlarge-2 medium-2 hide-mobile"></div>
    </div>
    {props.tasks.length > 0 ? <DeleteAll /> : null}
  </div>
);

const ConnectedTasks = (state) => {
    return {
        tasks: selectTasks(state.tasksToDo, state.filters)
    }
}

export default connect(ConnectedTasks)(Tasks)