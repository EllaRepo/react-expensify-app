console.log('destructuring')

//
// Object destructuring 
//

// const person = {
//     //name: 'Ella',
//     age: '30',
//     location: {
//         city: 'addis ababa',
//         //temp: 37
//     }
// }
// const {name = 'Anonymous', age} = person
// const {city, temp : temperature = 0} = person.location
// console.log(`${name} is ${age} year(s) old.`)
// console.log(`${city} has a temperature of ${temperature} degree celsius.`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher:{
//         // name: 'Penguin'
//     }
// }

// const {name:publisherName='Self-Published'} = book.publisher

// console.log(publisherName)


//
// Array destructuring 
// 

const address = ['Jimma Road', 'Ayertena','kolfe keranyo sub-city', 'Addis Ababa']
const [streetAdd,,subcity,city,country='Ethiopia'] = address
console.log(`My address is ${streetAdd}, ${subcity}, ${country}`)