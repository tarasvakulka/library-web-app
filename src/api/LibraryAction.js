import axios from "axios";
import { apiPrefix } from "../../config.json";

const actions = {
    loadBooks() {
        return axios.get(`${apiPrefix}/books.json`);
    },
    loadAuthors() {
        return axios.get(`${apiPrefix}/authors.json`); 
    },
    createBook(data) {
        axios.post(`${apiPrefix}/books`, data);
    },
    createAuthor(data) {
        axios.post(`${apiPrefix}/authors`, data);
    },
    deleteBook(bookId) {
        console.log(bookId);
        axios.delete(`${apiPrefix}/book`);
    },
    deleteAuthor(authorId) {
        axios.delete(`${apiPrefix}/author`);
    }

};
export default actions;
