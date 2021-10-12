class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(value) { //сработает сеттер, state - это аргумент value, который передается в set state()
        if (value < 0) {
            this._state = 0
            return;
        }

        if (value > 100) {
            this._state = 100;
            return;
        }

        this._state = value;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
       super(name, releaseDate, pagesCount);
       this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const result = this.books.find(book => book[type] === value); //return result or undefined

        if (!result) {
            return null;
        }

        return result;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName)//возвращает индекс, или -1 если не найден
        if (index === -1) {
            return null;
        }

        const result = this.books[index];
        this.books.splice(index, 1);
        return result;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = [];
    }

    addMark(mark, subject) {
        if ( mark < 1 || mark > 5) {
            return;
        }

        this.marks.push({mark, subject});
    }

    getAverageBySubject(subject) {
        const subjectMarks = this.marks.filter(mark => mark.subject === subject);

        return this.arrayAverage(subjectMarks);
    }

    getAverage() {
        return this.arrayAverage(this.marks);
    }

    arrayAverage(array) {
        const length = array.length;
        if (length === 0) {
            return 0;
        }

        const sum = array.reduce((sum, item) => {
            return sum + item.mark;
        }, 0);

        return sum / length;
    }
}
