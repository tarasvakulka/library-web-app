import React from "react";
import "./BookList.scss";

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
        return(
            <div id="section">
                <div className="container">
                    <div className="row">
                        {this.state.books.toString()}
                    </div>
                </div>
            </div>
        );
    }
}
export default BookList;