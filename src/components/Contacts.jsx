import React from "react";
import "./Contacts.scss";

class Contacts extends React.Component {
    render() {
        return(
            <div>
                <section id="contacts">
                    <div className="container">
                        <div className="row align-items-center fill">
                            <div className="col-lg-6">
                                <h5 className="text-dark text-center py-2">Our Contacts</h5>
                                <ul className="lead">
                                    <li className="pb-2"> Phone: +380 (097) 979 79 79<br/> Address: Ukraine, Kyiv Polytechnic Institute </li>
                                    <li className="pb-2"><img className="pr-2 pb-1" src="./src/images/email_icon.png" alt=""/><a href="mailto:formulakpi@gmail.com" target="_blank">formulakpi@gmail.com</a></li>
                                    <li className="pb-2"><img className="pr-2 pb-1" src="./src/images/site_icon.png" alt=""/><a href="https://formula.kpi.ua" target="_blank">formula.kpi.ua</a></li>
                                    <li className="pb-2"><img className="pr-2 pb-1 icon-size" src="./src/images/facebook.png" alt=""/><a href="https://www.facebook.com/pg/fskpi/" target="_blank">@fskpi</a></li>
                                    <li className="pb-3"><img className="pr-2 pb-1 icon-size" src="./src/images/instagram.png" alt=""/><a href="https://www.instagram.com/formulakpi/" target="_blank">formulakpi</a></li>
                                </ul>
                                
                            </div>
                            <div className="col-lg-6">
                                <iframe width="600" height="450" frameborder="0" style={{border:0}} src="https://www.google.com/maps/embed/v1/place?q=%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%20%D0%BF%D0%BE%D0%BB%D1%96%D1%82%D0%B5%D1%85%D0%BD%D1%96%D1%87%D0%BD%D0%B8%D0%B9%20%D1%96%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82%20%D1%96%D0%BC%D0%B5%D0%BD%D1%96%20%D0%86%D0%B3%D0%BE%D1%80%D1%8F%20%D0%A1%D1%96%D0%BA%D0%BE%D1%80%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE%2C%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF.%20%D0%9F%D0%B5%D1%80%D0%B5%D0%BC%D0%BE%D0%B3%D0%B8%2C%2037%2C%20%D0%9A%D0%B8%D1%97%D0%B2%2C%2003056&key=AIzaSyCw2QtA5mZMbSs45cNmHJMTYIXAF2JGxXI" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Contacts;