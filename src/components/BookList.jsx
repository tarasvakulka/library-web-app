import React from "react";
import "./BookList.scss";

class BookList extends React.Component {
    componentWillMount() {
        const url = "./src/books.json";
        const books = fetch(url).then(response => response.json()).then(data => {return data;});
        console.log(books);
    }
    render() {
        return(
            <div id="section">
                <div className="container">
                    <div className="row">
                        BookList
                    </div>
                </div>
            </div>
        );
    }
}
export default BookList;