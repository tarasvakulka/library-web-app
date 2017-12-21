import React from "react";
import "./AuthorList.scss";
import booksdata from "../books.json";
import authorsdata from "../authors.json";

class AuthorList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: []
        }
        this.getBookId = this.getBookId.bind(this);
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
    render() {
        return(
            <div id="author-list">
                <div className="container mt-5">
                    {
                        this.state.authors.map(author => 
                            <div className="row m-3 text-center">
                                <div className="col-12">
                                    <div className="dropdown">
                                        <a key={author.id} className="btn btn-secondary dropdown-toggle py-3" href="" 
                                        id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {author.name}
                                        </a>
        
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <a className="dropdown-item text-bold" href={`#author/${author.id}`}>{author.name}</a>
                                            {
                                                author.books.map(book =>
                                                    <a className="dropdown-item"href={`#book/${this.getBookId(book)}`}>
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
                    
                </div>
            </div>
        );
    }
}
export default AuthorList;