import moment from 'moment'

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endeDate: undefined
}

const altFilters = {
    text: 'bill',
    sortBy: 'amount',
    startDate: moment(0),
    endeDate: moment(0).add(3,'days')
}

export {filters, altFilters}