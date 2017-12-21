import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books_link: "active",
      authors_link: "",
      contacts_link: ""
    };
    this.activeHandler = this.activeHandler.bind(this);
  }

  activeHandler(e) {
    this.setState({
      books_link: "",
      authors_link: "",
      contacts_link: ""});
  
    const element = e.target.id;
    this.setState({[element]: "active"});

  }

  render() {
        return(
            <nav className="navbar navbar-inverse navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="index.html"><img src="./src/images/library-icon3.png" alt=""/></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
              </button>
          
              <div className="collapse navbar-collapse navbar-right" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li  className="nav-item " >
                    <Link id="books_link" className={this.state.books_link + " nav-link"} to='/' onClick={this.activeHandler}>Books </Link>
                  </li>
                  <li className="nav-item" >
                    <Link id="authors_link" className={this.state.authors_link + " nav-link"} to='/partners' onClick={this.activeHandler}>Authors </Link>
                  </li>
                  <li className="nav-item" >
                    <Link id="contacts_link" className={this.state.contacts_link + " nav-link"} to='/contacts' onClick={this.activeHandler}>Contacts </Link>
                  </li>
                </ul>
                
              </div>       
            </nav>
        
        );
    }
}
export default Navbar;