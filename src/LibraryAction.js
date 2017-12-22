const actions = {
    loadBooks() {
        return fetch("https://tarasvakulka.github.io/library-web-app/src/books.json").then(response => response.json());
    },
    loadAuthors() {
        return fetch("https://tarasvakulka.github.io/library-web-app/src/authors.json").then(response => response.json()); 
    }
};
export default actions;
