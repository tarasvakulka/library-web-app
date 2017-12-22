import React from "react";
import actions from "../LibraryAction.js";
import "./Book.scss";

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: "",
            authors: "",
            currentBook: "" 
        }
        this.getAuthorId = this.getAuthorId.bind(this);
        actions.loadBooks().then(data => this.setState({books: data, currentBook: data.find(book => book.id == this.props.match.params.id)}));
        actions.loadAuthors().then(data => this.setState({authors: data}));
         
    }
    getAuthorId(authorName) {
        return this.state.authors.find(author => author.name == authorName).id;
    }
    render() {
        
        return(
            (this.state.currentBook && this.state.authors) ? <div id="book">
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
                            {this.state.currentBook.name}
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-6">                    
                            Authors
                        </div>
                        <div className="col-6">
                            {
                                this.state.currentBook.authors.map(author =>
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
                            <a href={`#genre/${this.state.currentBook.genre}`}>{this.state.currentBook.genre}</a>
                        </div>
                    </div>
                    <div className="row py-3">
                            <div className="col-6">
                                Description
                            </div>
                            <div className="col-6">
                                {this.state.currentBook.description}
                            </div>
                    </div>
                    <div className="row"></div>
                </div>
            </div>
            : <div>Loading...</div>
        );
    }
}
export default Book;