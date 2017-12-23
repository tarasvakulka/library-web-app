import React from "react";
import actions from "../api/LibraryAction.js";
import "./AddBook.scss";

class AddBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            authors: '',
            genre: '',
            description: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAuthorsChange = this.handleAuthorsChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleBookAdd = this.handleBookAdd.bind(this);
    }
    handleNameChange(e) {
        this.setState({name: e.target.value});
    }
    handleAuthorsChange(e) {
        this.setState({authors: e.target.value});
    }
    handleGenreChange(e) {
        this.setState({genre: e.target.value});
    }
    handleDescriptionChange(e) {
        this.setState({description: e.target.value});
    }
    handleBookAdd() {
        let reg = /\s*,\s*/;
        if(this.state.name!='' && this.state.authors!='' && this.state.description!='' && this.state.genre!='') {
            const newBook = {
                name: this.state.name,
                authors: this.state.authors.split(reg),
                genre: this.state.genre,
                description: this.state.description
            };
            actions.createBook(newBook);
            this.setState({name: '', authors: '', genre: '', description: ''});
        }
        else {alert("Enter all field!")};
    }
    render() {
        return(
            <div id="add-book" className="container pt-4" >
                <div class="form-group row pt-2">
                    <label for="name-book-input" class="col-2 col-form-label">Name</label>
                    <div class="col-10">
                        <input class="form-control" type="text" value={this.state.name} onChange={this.handleNameChange} id="name-text-input"/>
                    </div>
                </div>
                <div class="form-group row pt-2">
                    <label for="authors-text-input" class="col-2 col-form-label">Authors</label>
                    <div class="col-10">
                        <input class="form-control" type="text" placeholder="separate by  ," value={this.state.authors} onChange={this.handleAuthorsChange} id="authors-text-input"/>
                    </div>
                </div>
                <div class="form-group row pt-2">
                    <label for="genre-text-input" class="col-2 col-form-label">Genre</label>
                    <div class="col-10">
                        <input class="form-control" type="text" value={this.state.genre} onChange={this.handleGenreChange} id="genre-text-input"/>
                    </div>
                </div>
                <div class="form-group row pt-2">
                    <label for="descriptionTextarea" class="col-2 col-form-label">Description</label>
                    <div class="col-10">
                        <textarea class="form-control" id="descriptionTextarea" value={this.state.description} onChange={this.handleDescriptionChange} rows="3"></textarea>
                    </div>
                </div>
                <button className="btn btn-dark mt-3 float-right" onClick={this.handleBookAdd}>Submit</button>
            </div>
            
        );
    }
}
export default AddBook;