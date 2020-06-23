
// Number one

// function lib(name, subject){
//     var output = name + "'s favorite subject is " + subject
//     return output
// }

// console.log(lib('Chris','Coding'))


// Number two

function tip(price, service){
    if( service == 'good'){
    var output1 = price * 1.20
    return output1
}
    else if( service == 'fair'){
    var output2 = price * 1.15
    return output2
    }

    else if( service == 'bad'){
    var output2 = price * 1.10
    return output2
}
}
console.log(tip(100, 'fair'));