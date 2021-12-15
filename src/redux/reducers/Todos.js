import { FETCH_ALL_TODOS, FETCH_DETAIL_TODOS, POST_TODO, DONE_TODO, UNDONE_TODO, DELETE_TODO } from '../actions/types'

const initialState = {
    datas: [],
}

const Todos = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_TODOS:
            return {
                ...state,
                datas: action.payload,
            }
        case FETCH_DETAIL_TODOS:
            return {
                ...state,
                detail: action.payload,
            }
        case POST_TODO:
            return {
                ...state,
                datas: action.payload,
            }
        case DONE_TODO:
            return {
                ...state,
                datas: action.payload,
            }
        case UNDONE_TODO:
            return {
                ...state,
                datas: action.payload,
            }
        case DELETE_TODO:
            return {
                ...state,
                datas: action.payload,
            }
        default:
            return state
    }
}

export default Todos