class Show {
    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }
    constructor (private _title: string) {}
}

let tester = new Show("FADL");

console.log(tester.title);
tester.title = "Mohamed Fadl";
console.log(tester.title);
