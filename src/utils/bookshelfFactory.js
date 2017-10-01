function bookshelfFactory(books = []) {
    return books.reduce((storedBooks, nextBook) => {
        const newStoredBooks = storedBooks;

        if (!newStoredBooks[nextBook.shelf]) {
            newStoredBooks[nextBook.shelf] = [];
        }

        newStoredBooks[nextBook.shelf].push(nextBook);

        return newStoredBooks;
    },
    {});
}

export default bookshelfFactory;
