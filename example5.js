let arr =['apple', 'banana', 'orange'];

//параметр один поэтому fruit без () если не один аргумент или без аргументов то () обязательны
let breakfast = arr.map(fruit => {
    return fruit + 's';
});

console.log(breakfast);