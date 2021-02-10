import moment from 'moment'
import {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate
} from '../../actions/filters'

test('should generate set text action object with test',()=>{
    const text='Mercy of GOD'
    const action=setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('should generate set sort by date action object',()=>{
    const action=sortByDate()
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})

test('should generate set sort by amount action object',()=>{
    const action=sortByAmount()
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})

test('should generate set text object without text',()=>{
    const action=setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:''
    })
})

test('should generate set start date action object',()=>{
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})

test('should generate set end date action object',()=>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    }) 
})