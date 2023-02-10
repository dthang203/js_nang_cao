const flights =`_Delayed_Departure;fao93766109;txl2133758440;11:25
+_Arrival;bru0943384722;fao93766109;11:45
+_Delayed_Arrival;hel7439299980;fao93766109;12:05
+_Departure;fao93766109;lis2323639855;12:30`
let arr = flights.split('+')
const getCode = str => str.slice(0, 3).toUpperCase();
for(let flight of arr) {
    let [type, from, to , time] = flight.split(';')
    // console.log(type, from, to,time)
    let output = `${type.startsWith('_Delayed') ? '[Warn]' : ''}${type.replaceAll('_',' ')} From ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`
    console.log(output)
}