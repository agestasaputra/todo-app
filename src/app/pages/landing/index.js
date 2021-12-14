import React from "react";
import './styles.scss'

const Landing = ({ state, dispatch, location }) => {
  // const [datas] = React.useState([
  //   {
  //     name: 'Learning Vue',
  //     description: 'Learning Composition API'
  //   },
  //   {
  //     name: 'Learning ReactJS',
  //     description: 'Learning React Hooks'
  //   }
  // ]);

  console.log('state:', state)

  function onUnDone(data, key) {
    const tmp = [...state.landing.datas];
    tmp[key].status = "todo"

    dispatch({
      type: "landing",
      data: {
        datas: tmp
      }
    });
  }

  function onDone(data, key) {
    const tmp = [...state.landing.datas];
    tmp[key].status = "done"

    dispatch({
      type: "landing",
      data: {
        datas: tmp
      }
    });
  }

  function onDelete(data, key) {
    const tmp = [...state.landing.datas];
    tmp.splice(key, 1);
    
    dispatch({
      type: "landing",
      data: {
        datas: tmp
      }
    });
  }

  return (
    <div className="container-landing">
      <span className="desc">
        {
          state.landing.datas.length > 0 ? (
            state.landing.datas.map((data, key) => (
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
                      <span className="card-footer-item btn-undone" onClick={() => onUnDone(data, key)}>Undone</span>
                    ) : (
                      <span className="card-footer-item btn-done" onClick={() => onDone(data, key)}>Done</span>
                    )
                  }
                  <span className="card-footer-item btn-delete" onClick={() => onDelete(data, key)}>Delete</span>
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
