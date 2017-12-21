import React from "react";
import "./BookList.scss";

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: []
        }
        this.getAuthorId = this.getAuthorId.bind(this); 
        fetch("https://tarasvakulka.github.io/library-web-app/src/books.json").then(response => response.json()).then(data => this.setState({books: data}));
        fetch("https://tarasvakulka.github.io/library-web-app/src/authors.json").then(response => response.json()).then(data => this.setState({authors: data}));
    }
    componentWillMount() {
        
        //this.setState({books: booksdata});
        //this.setState({authors: authorsdata})
    
    }
    getAuthorId(authorName) {
       return this.state.authors.find(author => author.name == authorName).id;
    }
    render() {
        console.log(this.state.books);
        return(
            <div id="book-list">
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
                </div>
            </div>
        );
    }
}
export default BookList;