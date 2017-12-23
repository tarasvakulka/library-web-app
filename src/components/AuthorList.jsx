import React from "react";
import actions from "../api/LibraryAction.js";
import "./AuthorList.scss";

class AuthorList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: "",
            authors: ""
        }
        this.getBookId = this.getBookId.bind(this);
        this.handleDeleteAuthor = this.handleDeleteAuthor.bind(this);
        actions.loadBooks().then(({data}) => this.setState({books: data}));
        actions.loadAuthors().then(({data}) => this.setState({authors: data}));
    }  
    getBookId(bookName) {
        if(this.state.books.find(book => book.name == bookName))
            return this.state.books.find(book => book.name == bookName).id;
        else
            return 0;
    }
    handleDeleteAuthor() {
        actions.deleteAuthor();
        window.location.reload();
    }
    render() {
        return(
            (this.state.books && this.state.authors) ? <div id="author-list">
                <div className="container mt-5">
                    {
                        this.state.authors.map(author => 
                            <div className="row m-3 text-center">
                                <div className="col-12">
                                    <div className="dropdown">
                                        <a key={author.id} className="col-11 btn btn-secondary dropdown-toggle py-3" href="" 
                                        id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {author.name}                                           
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <a className="dropdown-item text-bold" href={`#author/${author.id}`}>{author.name}</a>
                                            {
                                                author.books.map(book =>
                                                    <a className="dropdown-item" href={`#book/${this.getBookId(book)}`}>
                                                        {book}
                                                    </a>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <button className="btn btn-dark float-right mt-3 mr-4" onClick={this.handleDeleteAuthor}>Delete end item</button>
                    
                </div>
            </div>
            : <div className="fill">Loading....</div>
        );
    }
}
export default AuthorList;