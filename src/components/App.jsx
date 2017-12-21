import React from "react";
import {HashRouter, Route, Switch, Link} from "react-router-dom";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import BookList from "./BookList.jsx";
import AuthorList from "./AuthorList.jsx";
import Author from "./Author.jsx";
import Book from "./Book.jsx";
import Genre from "./Genre.jsx";
import Contacts from "./Contacts.jsx";

import "./App.scss";

class App extends React.Component {
    render() {
        return (
                <HashRouter>
                    <div className="App">
                        <Navbar/>
                        <Switch>
                            <Route exact path="/" component={BookList}/>
                            <Route path="/authors" component={AuthorList}/>
                            <Route path="/book/:id" component={Book}/>
                            <Route path="/author/:id" component={Author}/>
                            <Route path="/genre/:id" component={Genre} />
                            <Route path="/contacts" component={Contacts}/>
                        </Switch>
                        <Footer/>
                    </div>
                </HashRouter>
        );
    }
}
export default App;