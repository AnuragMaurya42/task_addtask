import React from 'react';

function TaskList({ tasks, onUpdateStatus, onDeleteTask }) {
  if (!tasks || tasks.length === 0) {
    return <p className="no-tasks-message">No tasks yet. Add one above! 🎉</p>;
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'pending': return 'status-pending';
      case 'in-progress': return 'status-in-progress';
      case 'completed': return 'status-completed';
      default: return '';
    }
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task._id} className={`task-card ${getStatusClass(task.status)}`}>
          <div className="task-content">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span className="task-status">{task.status.replace('-', ' ')}</span>
          </div>
          <div className="task-actions">
            <button
              onClick={() => onUpdateStatus(task._id)}
              className="action-btn update-btn"
              disabled={task.status === 'completed'}
            >
              Next Status
            </button>
            <button
              onClick={() => onDeleteTask(task._id)}
              className="action-btn delete-btn"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;