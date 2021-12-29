class BookList {
    constructor(root, list = []) {
        this.list = list;
        this.root = root;
    }
    add(text) {
        let data = new Book(text);
        this.list.push(data);
        this.createUI();
        return this.list.length;
    }
    delete(id) {
        let index = this.list.findIndex((li) => li.id === id);
        this.list.splice(index, 1);
        this.createUI();
        return this.list.length;
    }
    createUI() {
        this.root.innerHTML = "";
        this.list.forEach((li) => {
            let lis = li.createUI();
            lis.querySelector(".cross").addEventListener("click", this.delete.bind(this.li.id));
        });
    }
}

class Book {
    constructor(text) {
        this.text = text;
        this.id = `id-${Date.now()}`;
    }
    createUI() {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let title = document.querySelector("#title");
        td1.innerText = title;
        let td2 = document.createElement("td");
        let author = document.querySelector("#author");
        td1.innerText = author;
        let td3 = document.createElement("td");
        let code = document.querySelector("#code");
        td1.innerText = code;
        let td4 = document.createElement("td");
        th4.classList.add(".cross");
        td4.innerText = "X";
        tr.append(td1, td2, td3, td4);
        return tr;
    }
}


let submit = document.querySelector("#button");
let myBook = new BookList(document.querySelector(".list"));

submit.addEventListener("click", (event) => {
    myBook.add(event.target.value);
    event.target.value = "";
});