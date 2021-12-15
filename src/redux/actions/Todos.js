// import { FETCH_ALL_TODOS, FETCH_DETAIL_TODOS } from './types'
import { ADD_TODO, DONE_TODO, UNDONE_TODO, DELETE_TODO } from './types'
// import axios from 'axios'
// import { useDispatch } from "react-redux";
import store from 'redux/store'
// const dispatch = useDispatch();

export const fetchAllMovies = (page, search) => dispatch => {
    // if (page && search) {
    //     axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=${search}&page=${page}`)
    //     .then(data => {
    //         dispatch ({
    //             type: FETCH_ALL_TODOS,
    //             payload: data.data
    //         })
            
    //     })
    //     .catch(error => console.log('cek error:', error))
    //     return
    // }

    // axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=abc&type=movie&plot=full&page=${page}`)
    // .then(data => {
    //     dispatch ({
    //         type: FETCH_ALL_TODOS,
    //         payload: data.data
    //     })
    // })
    // .catch(error => console.log('cek error:', error))
}

export const fetchDetailTodos = (id) => dispatch => {
    // axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&i=${id}`)
    // .then(data => {
    //     dispatch ({
    //         type: FETCH_DETAIL_TODOS,
    //         payload: data.data
    //     })
    // })
    // .catch(error => console.log('cek error:', error))
}

export const addTodo = (item)  => {
    try {
        store.dispatch({
            type: ADD_TODO,
            payload: item
        })
    } catch (error) {
        console.log('error:', error);
    }
}

export const doneTodo = (item)  => {
    try {
        store.dispatch({
            type: DONE_TODO,
            payload: item
        })
    } catch (error) {
        console.log('error:', error);
    }
}

export const undoneTodo = (item)  => {
    try {
        store.dispatch({
            type: UNDONE_TODO,
            payload: item
        })
    } catch (error) {
        console.log('error:', error);
    }
}

export const deleteTodo = (item)  => {
    try {
        store.dispatch({
            type: DELETE_TODO,
            payload: item
        })
    } catch (error) {
        console.log('error:', error);
    }
}
