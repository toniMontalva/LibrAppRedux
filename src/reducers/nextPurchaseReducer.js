import { CHANGE_NEXT_PURCHASE, ADD_BOOK, REMOVE_BOOK, MODIFY_BOOK } from '../actions'
import uuidV4 from 'uuid/v4'

const initialState = {
    books: [{ name: 'East of Eden', author: 'John Steinbeck', id: uuidV4() }],
    nextBook: 'Prueba'
}

const nextPurchaseReducer = (state = initialState, action) =>{
    switch(action.type) {
        case ADD_BOOK:
        return {
            books: [
                ...state.books,
                action.book
            ]
        }
        case REMOVE_BOOK:
        const index = state.books.findIndex(book => book.id === action.book.id)
        return {
            books: [
                ...state.books.slice(0, index),
                ...state.books.slice(index + 1)
            ]
        }
        case CHANGE_NEXT_PURCHASE:
            return {
                nextBook: action.book
            }
        case MODIFY_BOOK:        
            return {
                books : [
                    ...state.books,
                    state.books[index] = action.book
                ]
            }
        default: 
            return state
    }
}

export default nextPurchaseReducer