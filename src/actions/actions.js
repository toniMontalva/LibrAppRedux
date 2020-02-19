export const CHANGE_NEXT_PURCHASE = 'CHANGE_NEXT_PURCHASE'
export const ADD_BOOK = 'ADD_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'
export const MODIFY_BOOK = 'MODIFY_BOOK'
import uuidV4 from 'uuid/v4'

export function addBook (book) {
  return {
    type: ADD_BOOK,
    book: {
      ...book,
      id: uuidV4()
    }
  }
}

export function removeBook (book) {
  return {
    type: REMOVE_BOOK,
    book
  }
}

export function nextPurchase(book) {
  return{
    type: CHANGE_NEXT_PURCHASE,
    book
  }
}

export function modifyBook (book){
  return {
    type: MODIFY_BOOK,
    book
  }
}



