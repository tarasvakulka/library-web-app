import React from "react";
import "./BookList.scss";
//import BookListItem from "./BookListItem.jsx";
import bookdata from "../books.json"

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: []
        } 
    }
    componentWillMount() {
        const url = "./src/books.json";
        
        fetch(url).then(response => response.json()).then(data => this.setState({books: data}));


    
    }
    render() {
        console.log(this.state.books);
        return(
            <div id="section">
                <div className="container">
                    <div className="row">
                        {       
                            this.state.books.match(book =>
                                <div>
                                    <div className="col-6">
                                        {book.name}
                                    </div>
                                    <div className="col-6">
                                        {book.authors}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default BookList;