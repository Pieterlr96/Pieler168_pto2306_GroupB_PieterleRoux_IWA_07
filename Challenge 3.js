const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'


const owed = 'R' + parseFloat( leoBalance * -1 + sarahBalance * -1)
owed.toString()
const lPositive = leoBalance * - 1
const leo = leoName + leoSurname + 'Owed:' + 'R' + lPositive
let leoText = leo.toString()
const sPositive = sarahBalance * -1
const sarah = sarahName + sarahSurname + "Owed" + "R" + sPositive
sarah.toString()
const total = "Total amount owed: "
const result =  `                ${leoText} 
                ${sarah} 
                ${divider} 
                ${divider} 
                ${total} 
                ${owed}
                ${divider}`

console.log(result)