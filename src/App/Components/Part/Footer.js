import React, { Component } from "react"
import "../../Style/Footer.css"
import "../../Style/cafaeble.main-1.0.css"
import "../../Style/cafaeble.index-1.0.css"
import FooterImage from "../../Asset/img/logo-white.png"

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <section>
                        <ul>
                            <li>
                                About Cafæble
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Culture</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </li>
                            <li>
                                For Foodies
                                <ul>
                                    <li><a href="#">Code of Conduct</a></li>
                                    <li><a href="#">Community</a></li>
                                    <li><a href="#">Verified Users</a></li>
                                    <li><a href="#">Blogger Help</a></li>
                                    <li><a href="#">Developers</a></li>
                                </ul>
                            </li>
                            <li>
                                For Restaurants
                                <ul>
                                    <li><a href="#">Add a Restaurant</a></li>
                                    <li><a href="#">Claim your Listing</a></li>
                                    <li><a href="#">Business App</a></li>
                                    <li><a href="#">Business Owner Guidelines</a></li>
                                    <li><a href="#">Business Blog</a></li>
                                </ul>
                            </li>
                            <li>
                                For Users
                                <ul>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms of Use</a></li>
                                    <li><a href="#">API Policy</a></li>
                                    <li><a href="#">CSR</a></li>
                                    <li><a href="#">Security</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div class="the-copy">
                            <a href="#" class="for-image"><img src={FooterImage} /></a>
                            Copyrights &copy; 2019 <a href="#">Cafæble</a>. All rights reserved.
                            <span>Designated trademarks and brands are the property of their respective owners.</span>
                        </div>
                        <div class="disclaim">
                            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies.
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Footer;