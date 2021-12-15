import React from "react";
import './styles.scss'
import { useSelector } from "react-redux";
import { doneTodo, undoneTodo, deleteTodo } from "redux/actions/Todos"

const Landing = () => {
  const store = useSelector(state => state);

  function onUnDone(key) {
    const payload = [...store.todo.datas];
    payload[key].status = "todo"
    undoneTodo(payload)
  }

  function onDone(key) {
    const payload = [...store.todo.datas]
    payload[key].status = "done"
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
                      data.status === 'done' ? (
                        <del>{ data.name }</del>
                      ) : (
                        <React.Fragment>
                          { data.name }
                        </React.Fragment>
                      )
                    }
                  </p>
                </header>
                <div className="card-content">
                  <div className="content">
                    {
                      data.status === 'done' ? (
                        <del>{ data.description }</del>
                      ) : (
                        <React.Fragment>
                          { data.description }
                        </React.Fragment>
                      )
                    }
                  </div>
                </div>
                <footer className="card-footer">
                  {
                    data.status === 'done' ? (
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
