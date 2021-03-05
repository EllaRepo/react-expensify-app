import expenses from '../fixtures/expenses'
import selectExpensesTotal from '../../selectors/expenses-total'

test('should return zero if no expenses',()=>{
    const result = selectExpensesTotal([])
    expect(result).toBe(0)
})

test('should add up a single expense',()=>{
    const result = selectExpensesTotal([expenses[0]])
    expect(result).toBe(expenses[0].amount)
})

test('should add up a multiple expense',()=>{
    const result = selectExpensesTotal(expenses)
    expect(result).toBe(114195)
})