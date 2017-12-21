import React from "react";
import "./Footer.scss";

class Footer extends React.Component {
    render() {
        return (
            
              <footer className="footer  py-3 text-muted">
                <div className="container">
                    <div className="row align-items-end ">
                        <div className="col-lg-4 ">
                            <p className="pt-3" >© Library, 2017</p>
                        </div>
                        <div className="col-lg-4">
                            <h5 className="pt-2 text-center">Links</h5>
                            <ul>
                                <li><a href="#">Books</a></li>
                                <li><a href="#authors">Authors</a></li>
                                <li><a href="#contacts">Contacts</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h5 className="py-2 text-center">Contacts</h5>
                            <ul>
                                <li className="pb-2"> Phone: +380 (097) 979 79 79</li>
                                <div className="pb-2">Address: Kyiv, Ukraine</div>
                            </ul>
                        </div>
                    </div>

                    
                </div>
              </footer>
            

        );
    }
}
export default Footer;