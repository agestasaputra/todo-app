import React from "react";
import './styles.scss'
import { useSelector } from "react-redux";
import { doneTodo, undoneTodo, deleteTodo, fetchAllTodo } from "redux/actions/Todos"
import moment from 'moment';

const Landing = () => {
  const store = useSelector(state => state);

  React.useEffect(() => {
    onFetchAllTodo()
  }, [])

  function onFetchAllTodo() {
    try {
      fetchAllTodo();
    } catch (error) {
      alert(`Error - ${error.message}`)
      throw error;
    }
  }

  function onUnDone(key) {
    const payload = [...store.todo.datas];
    payload[key].status = "pending"
    undoneTodo(payload)
  }

  function onDone(key) {
    const payload = [...store.todo.datas]
    payload[key].status = "completed"
    doneTodo(payload)
  }
  
  function onDelete(key) {
    const payload = [...store.todo.datas];
    payload.splice(key, 1)
    deleteTodo(payload)
  }

  return (
    <div className="container-landing">
      <span className="desc">
        {
          store.todo.datas.length > 0 ? (
            store.todo.datas.map((data, key) => (
              <div className="card mb-2" key={key} >
                <header className="card-header">
                  <p className="card-header-title">
                    {
                      data.status === 'completed' ? (
                        <del>{ data.title }</del>
                      ) : (
                        <React.Fragment>
                          { data.title }
                        </React.Fragment>
                      )
                    }
                  </p>
                </header>
                <div className="card-content">
                  <div className="content">
                    {
                      data.status === 'completed' ? (
                        <React.Fragment>
                          <del> { data.description } </del>
                          <div> <i>{ moment(data.due_on).format('LL') }</i> </div>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <div> { data.description } </div>
                          <div> <i>{ moment(data.due_on).format('LL') }</i> </div>                         
                        </React.Fragment>
                      )
                    }
                  </div>
                </div>
                <footer className="card-footer">
                  {
                    data.status === 'completed' ? (
                      <span className="card-footer-item btn-undone" onClick={() => onUnDone(key)}>Undone</span>
                    ) : (
                      <span className="card-footer-item btn-done" onClick={() => onDone(key)}>Done</span>
                    )
                  }
                  <span className="card-footer-item btn-delete" onClick={() => onDelete(key)}>Delete</span>
                </footer>
              </div>
            ))
          ) : (
            <div className="empty-message">To Do list is Empty!</div>
          )
        }
      </span>
    </div>

  );
};

export default Landing;
