let bob = function (num, str) {
    console.log('bob', num, str, this);
    return true;
};

let student = {
    name: 'Chris David',
    occupation: 'Student',
    greetingMethod: function(fn){
        fn()
    }
}
// console.log(student.greetingMethod(bob))

// bob.call(student, 1, 'hello');
bob.apply(student, [1, 'apply'])
