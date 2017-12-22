import React from "react";
import "./Contacts.scss";

class Contacts extends React.Component {
    render() {
        return(
            <div>
                <section id="contacts">
                    <div className="container">
                        <div className="row fill align-items-center">
                            <div className="col-lg-6">
                                <iframe width="600" height="450" frameborder="0" style={{border:'0'}} src="https://www.google.com/maps/embed/v1/place?q=Kyiv&key=AIzaSyACvjtBwYnyGnmhkQlz69xi_a89h9ro7Ks" allowfullscreen></iframe>
                            </div>
                            <div className="col-lg-6 pl-5 ">
                                
                                <ul className="lead">
                                    <li className="pb-2 pl-5"> Phone: +380 (097) 979 79 79<br/> Address: Ukraine, Kyiv </li>
                                    <li className="pb-2 pl-5"><img className="pr-2 pb-1" src="./src/images/email_icon.png" alt=""/><a href="mailto:library@gmail.com" target="_blank">library@gmail.com</a></li>
                                    <li className="pb-2 pl-5"><img className="pr-2 pb-1" src="./src/images/site_icon.png" alt=""/><a href="https://tarasvakulka.github.io/library-web-app" target="_blank">tarasvakulka.github.io/library-web-app</a></li>
                                </ul> 
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Contacts;