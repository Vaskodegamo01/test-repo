function foo(x,y,z) {
    console.log(x,y,z);
};
let arr = [1,2,3];

let a = foo(arr[0],arr[1],arr[2]);
a = foo(...arr);



function Foo(a, b , ...args) {
    console.log(a +b);
    console.log(args);
};

Foo(1,2,3,4,5);