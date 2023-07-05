const books = [
    {
        name: "hare",
        rate: 10
    }
    , {
        names: "boaosdf",
        rate: 3
    }
]


const fileterFunc = (books) => {
    const filter = books.filter((book) => {
        if (book.rate > 4) {
            return true
        }
    })
    return filter;
}

console.log(fileterFunc(books))