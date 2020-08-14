class Button {
    constructor() {
        this.count = 0;
    }
    count_meth() {
        this.count++;
        console.log(this.count);
    }
}

let button1 = new Button();
let button2 = new Button();



button1.count_meth()
button1.count_meth()
button1.count_meth()

button2.count_meth()
button2.count_meth()
button2.count_meth()
button2.count_meth()

button1.count_meth()