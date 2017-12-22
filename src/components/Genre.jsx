import React from "react";
import actions from "../LibraryAction.js";
import "./Genre.scss";
import booksdata from "../books.json";
import authorsdata from "../authors.json";

class Genre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: "",
            authors: ""
        }
        this.getAuthorId = this.getAuthorId.bind(this);
        actions.loadBooks().then(data => this.setState({books: data}));
        actions.loadAuthors().then(data => this.setState({authors: data}));
    }
    
    getAuthorId(authorName) {
        return this.state.authors.find(author => author.name == authorName).id;
    }
    render() {
        return(
           (this.state.books && this.state.authors) ? <div id="genre">
                <div className="container">
                        <div className="row text-center h5 mt-4">
                            <div className="col-6 py-2 ">Book</div>
                            <div className="col-6 pt-2">Authors</div>
                        </div>
                        {   
                            this.state.books.map(book => {
                                if(book.genre == this.props.match.params.id){
                                    return(
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
                            })
                        }
                </div>
            </div>
            : <div>Loading...</div>
        );
    }
}
export default Genre;