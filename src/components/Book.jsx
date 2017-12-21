import React from "react";
import "./Book.scss";
import booksdata from "../books.json";
import authorsdata from "../authors.json";

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: []
        }
        this.getAuthorId = this.getAuthorId.bind(this);
         
    }
    componentWillMount() {
        //fetch("./src/books.json").then(response => response.json()).then(data => this.setState({books: data}));
        //fetch("./src/authors.json").then(response => response.json()).then(data => this.setState({books: data}));
        this.setState({books: booksdata});
        this.setState({authors: authorsdata})
    
    }
    getAuthorId(authorName) {
        return this.state.authors.find(author => author.name == authorName).id;
    }
    getCurrentBook() {
        return this.state.books.find(book => book.id == this.props.match.params.id);
    }

    render() {
        let currentBook = this.getCurrentBook();
        return(
            <div id="book">
                <div className="container mt-5">
                    <div className="row text-center">
                        <div className="col-12">
                            <h5>About Book</h5>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-6">                    
                            Name
                        </div>
                        <div className="col-6">
                            {currentBook.name}
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-6">                    
                            Authors
                        </div>
                        <div className="col-6">
                            {
                                currentBook.authors.map(author =>
                                    <a className="pr-3" href={`#author/${this.getAuthorId(author)}`}>
                                        {author}
                                    </a>
                                )
                            }
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-6">                    
                            Genre
                        </div>
                        <div className="col-6">
                            <a href={`#genre/${currentBook.genre}`}>{currentBook.genre}</a>
                        </div>
                    </div>
                    <div className="row py-3">
                            <div className="col-6">
                                Description
                            </div>
                            <div className="col-6">
                                {currentBook.description}
                            </div>
                    </div>
                    <div className="row"></div>
                </div>
            </div>
        );
    }
}
export default Book;