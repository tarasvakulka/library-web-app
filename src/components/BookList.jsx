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
        let a = fetch(url).then(response => response.json()).then(data => data);
        console.log(a);
        this.setState({books: a});
    }
    render() {
        return(
            <div id="section">
                <div className="container">
                    <div className="row">
                        BookList
                        {this.state.books}
                    </div>
                </div>
            </div>
        );
    }
}
export default BookList;