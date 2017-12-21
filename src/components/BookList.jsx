import React from "react";
import "./BookList.scss";

class BookList extends React.Component {
    componentWillMount() {
        const url = "./src/books.json";
        let a = fetch(url).then(response => response.json()).then(data => data);
        console.log(a);
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