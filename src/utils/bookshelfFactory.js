function bookshelfFactory(books) {
    return books.reduce((storedBooks, nextBook) => {
        const newStoredBooks =
            storedBooks[nextBook.shelf] && storedBooks[nextBook.shelf].push(nextBook);
        return newStoredBooks;
    },
    {
        currentlyReading: [],
        wantToRead: [],
        read: [],
    });
}

export default bookshelfFactory;
