import React from "react";
import actions from "../api/LibraryAction.js";
import "./Author.scss";

class Author extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: "",
            authors: "",
            currentAuthor: ""
        }
        this.getBookId = this.getBookId.bind(this);
        actions.loadBooks().then(({data}) => this.setState({books: data}));
        actions.loadAuthors().then(({data}) => this.setState({authors: data, currentAuthor: data.find(author => author.id == this.props.match.params.id)}));
    }
    getBookId(bookName) {
        if(this.state.books.find(book => book.name == bookName))
            return this.state.books.find(book => book.name == bookName).id;
        else
            return 0;
    }
    render() {
        return(
           (this.state.currentAuthor && this.state.books) ? <div id="author">
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
                            {this.state.currentAuthor.name}
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-6">                    
                            Biography
                        </div>
                        <div className="col-6">
                            {this.state.currentAuthor.biography}
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-6">                    
                            Books
                        </div>
                        <div className="col-6">
                            {
                                this.state.currentAuthor.books.map(book => 
                                    <a className="pr-3" href={`#book/${this.getBookId(book)}`}>
                                        {book}
                                    </a>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            : <div className="fill">Loading....</div>
        );
    }
}
export default Author;