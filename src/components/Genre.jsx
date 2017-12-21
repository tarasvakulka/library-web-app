import React from "react";
import "./Genre.scss";
import booksdata from "../books.json";
import authorsdata from "../authors.json";

class Genre extends React.Component {
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
        this.setState({authors: authorsdata});
    
    }
    getCurrentBooks() {
        let genre = this.props.match.params.id;
        console.log(genre);
        let currentbooks = [];
        for(let i = 0; i<this.state.books.length; i++)
        {
            if(this.state.books[i].genre == genre) { 
                currentbooks.push(this.state.books[i]);
            }
        }
        return currentbooks;

    }
    getAuthorId(authorName) {
       return this.state.authors.find(author => author.name == authorName).id;
    }
    render() {
        let currentBooks = this.getCurrentBooks();
        return(
            <div id="genre">
                <div className="container">
                        <div className="row text-center h5 mt-4">
                            <div className="col-6 py-2 ">Book</div>
                            <div className="col-6 pt-2">Authors</div>
                        </div>
                        {       
                            currentBooks.map(book =>
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
                </div>
            </div>
        );
    }
}
export default Genre;