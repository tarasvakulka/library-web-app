import React from "react";
import actions from "../api/LibraryAction.js"
import "./AddAuthor.scss";

class AddAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            biography: '',
            books: ''

        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleBooksChange = this.handleBooksChange.bind(this);
        this.handleBiographyChange = this.handleBiographyChange.bind(this);
        this.handleAuthorAdd = this.handleAuthorAdd.bind(this);
    }
    handleNameChange(e) {
        this.setState({name: e.target.value});
    }
    handleBooksChange(e) {
        this.setState({books: e.target.value});
    }
    handleBiographyChange(e) {
        this.setState({biography: e.target.value});
    }
    handleAuthorAdd() {
        let reg = /\s*,\s*/;
        if(this.state.name!='' && this.state.books!='' && this.state.biography!='') {
            const newAuthor = {
                name: this.state.name,
                books: this.state.books.split(reg),
                biography: this.state.biography
            };
            actions.createAuthor(newAuthor);
            this.setState({name:'', biography: '', books: ''});
        } else alert("Enter all field!");
    }
    render() {
        return(
            <div id="add-author" className="container pt-4">
                <div class="form-group row pt-2">
                    <label for="name-author-input" class="col-2 col-form-label">Name</label>
                    <div class="col-10">
                        <input class="form-control" type="text" value={this.state.name} onChange={this.handleNameChange} id="name-author-input"/>
                    </div>
                </div>
                <div class="form-group row pt-2">
                    <label for="biographyTextarea" class="col-2 col-form-label">Biography</label>
                    <div class="col-10">
                        <textarea class="form-control" id="biographyTextarea" value={this.state.biography} onChange={this.handleBiographyChange} rows="3"></textarea>
                    </div>
                </div>
                <div class="form-group row pt-2">
                    <label for="book-text-input" class="col-2 col-form-label">Books</label>
                    <div class="col-10">
                        <input class="form-control" placeholder="separate by  ," type="text" value={this.state.books} onChange={this.handleBooksChange} id="book-text-input"/>
                    </div>
                </div>
                <button className="btn btn-dark mt-3 float-right" onClick={this.handleAuthorAdd}>Submit</button>
            </div>
            
        );
    }
}
export default AddAuthor;