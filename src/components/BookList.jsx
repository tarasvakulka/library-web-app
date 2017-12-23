import React from "react";
import actions from "../api/LibraryAction.js";
import "./BookList.scss";

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: "",
            authors: ""
        }
        this.getAuthorId = this.getAuthorId.bind(this);
        this.handleDeleteBook = this.handleDeleteBook.bind(this);
        actions.loadBooks().then(({data}) => this.setState({books: data}));
        actions.loadAuthors().then(({data}) => this.setState({authors: data})); 
    }
    getAuthorId(authorName) {
        if(this.state.authors.find(author => author.name == authorName)) 
            return this.state.authors.find(author => author.name == authorName).id;
        else 
            return 0;
    }
    handleDeleteBook(e) {
        actions.deleteBook();
        window.location.reload();
    } 
    render() {
    
        return(
            (this.state.books && this.state.authors) ?  <div id="book-list">
                <div className="container">
                        <div className="row text-center h5 mt-4">
                            <div className="col-6 py-2 ">Book</div>
                            <div className="col-6 py-2">Authors</div>
                        </div>
                        {       
                            this.state.books.map(book =>
                                <div className="row bg-light mt-2 py-3 ">
                                    <div className="col-6 ">
                                        <a href={`#book/${book.id}`}>{book.name}</a>
                                    </div>
                                    <div className="col-6 ">
                                        {
                                            book.authors.map(author =>
                                                <a id="author-link" className="pr-3" href={`#author/${this.getAuthorId(author)}`}>
                                                    {author} 
                                                </a>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                        <button className="btn btn-dark float-right mt-3" onClick={this.handleDeleteBook}>Delete end item</button>
                </div>
            </div>
            : <div className="fill" >Loading...</div>
        );
    }
}
export default BookList;