//Expenses Reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action)=>{
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