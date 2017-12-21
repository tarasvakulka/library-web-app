import React from "react";
import "./Author.scss";
import booksdata from "../books.json";
import authorsdata from "../authors.json";

class Author extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: []
        }
        this.getBookId = this.getBookId.bind(this);
        this.getCurrentAuthor = this.getCurrentAuthor.bind(this);
    }
    componentWillMount() {
        fetch("https://tarasvakulka.github.io/library-web-app/src/books.json").then(response => response.json()).then(data => this.setState({books: data}));
        fetch("https://tarasvakulka.github.io/library-web-app/src/authors.json").then(response => response.json()).then(data => this.setState({authors: data})); 
    }
    getBookId(bookName) {
        if(this.state.books == []) return 1;
        else
        return this.state.books.find(book => book.name == bookName).id;
    }
    getCurrentAuthor(){
        if(this.state.authors == []) return {};
        else
        return this.state.authors.find(author => author.id == this.props.match.params.id);
    }
    render() {
        let currentAuthor = this.getCurrentAuthor();
        return(
            <div id="author">
                <div className="container mt-5">
                    <div className="row text-center">
                        <div className="col-12">
                            <h5>About Author</h5>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-6">                    
                            Initials
                        </div>
                        <div className="col-6">
                            {currentAuthor.name}
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-6">                    
                            Biography
                        </div>
                        <div className="col-6">
                            {currentAuthor.biography}
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-6">                    
                            Books
                        </div>
                        <div className="col-6">
                            {
                                currentAuthor.books.map(book => 
                                    <a className="pr-3" href={`#book/${this.getBookId(book)}`}>
                                        {book}
                                    </a>
                                )
                            }
                        </div>
                    </div>
                    <div className="row"></div>
                    <div className="row"></div>
                </div>
            </div>
        );
    }
}
export default Author;