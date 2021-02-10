import {createStore, combineReducers} from 'redux'
import {v4 as uuidv4} from 'uuid'

// ADD_EXPENSE
const addExpense = (
    {
        description ='',
        note = '',
        amount = 0,
        createdAt = ''
    } = {}
)=>({
    type: 'ADD_EXPENSE',
    expense:{
        id : uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})
//REMOVE_EXPENSE,
const removeExpense = ({id}={})=>({
   type: 'REMOVE_EXPENSE',
   id
})
// EDIT_EXPENSE
const editExpense = (id,updates)=>({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
// SET_TEXT_FILTER
const setTextFilter = (text='')=>({
    type: 'SET_TEXT_FILTER',
    text
})
// SORT_BY_DATE
const sortByDate = ()=>({
    type : 'SORT_BY_DATE'
})
// SORT_BY_AMOUNT
const sortByAmount = ()=>({
    type: 'SORT_BY_AMOUNT'
})
// SET_START_DATE
const setStartDate = (date)=>({
    type : 'SET_START_DATE',
    date
})
// SET_END_DATE
const setEndDate = (date)=>({
    type : 'SET_END_DATE',
    date
})
//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            //return state.concat(action.expense);
            // spreading operator
            return[
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense)=> expense.id===action.id ? {...expense,...action.updates}: expense)    
        default:
            return state;
    }
}

//Filters Reducer
const filtersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text}
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'}
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'}
        case 'SET_START_DATE':
            return {...state, startDate: action.date}
        case 'SET_END_DATE':
            return {...state, endDate: action.date}
        default:
            return state
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endeDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >=startDate;
        const endDateMatch = typeof endeDate !== 'number' || expense.createdAt <= endeDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    })
}
// Store creation....................
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -21000}))
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 300, createdAt: -1000}))

// store.dispatch(removeExpense({id:expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 800}))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(230))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1435))


const demoState = {
    expenses:[{
        id:'sfsdafsdfas',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters:{
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}