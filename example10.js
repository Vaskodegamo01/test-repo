class Task{
    constructor () {
        console.log("Экземпляр класса создан!");
    }
    showId () {
        console.log(123);
    }
    static loadAll () {
        console.log("loading task!!!");
    }
}


console.log(typeof Task);

let task = new Task();

task.showId();
Task.loadAll();