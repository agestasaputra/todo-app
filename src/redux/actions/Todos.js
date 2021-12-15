import { FETCH_ALL_TODOS } from './types'
import { POST_TODO, DONE_TODO, UNDONE_TODO, DELETE_TODO } from './types'
import axios from 'axios'
import store from 'redux/store'

export const fetchAllTodo = ()  => {
    axios.get('https://gorest.co.in/public/v1/todos')
    .then(res => {
        const dataFiltered = res.data.data.map((item) => ({
            ...item,
            description: 'Empty description'
        }))
        store.dispatch ({
            type: FETCH_ALL_TODOS,
            payload: dataFiltered
        })            
    })
    .catch(error => {
        throw error
    })
}

export const postTodo = (payload)  => {
    axios.post('https://gorest.co.in/public/v1/todos', payload, {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer e08b49a520f19d81eae6015c493fae406755cfc0d9f5bbb064a230551213af0f'
        }
    })
    .then(res => {
        const dataFiltered = res.data.data.map((item) => ({
            ...item,
            description: 'Empty description'
        }))
        store.dispatch ({
            type: POST_TODO,
            payload: dataFiltered
        })            
    })
    .catch(error => {
        alert(`Error! ${error.message}`)
        throw error
    })
}

export const doneTodo = (item)  => {
    store.dispatch({
        type: DONE_TODO,
        payload: item
    })
}

export const undoneTodo = (item)  => {
    store.dispatch({
        type: UNDONE_TODO,
        payload: item
    })
}

export const deleteTodo = (item)  => {
    store.dispatch({
        type: DELETE_TODO,
        payload: item
    })
}
