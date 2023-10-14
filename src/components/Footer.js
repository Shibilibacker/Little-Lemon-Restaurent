import React from 'react';
import logo from '../images/Logo .svg'

const Footer = () => {
  return (
    <footer>
        <section>
            <div className='company-name'>
<img src = {logo} alt=''/>
<p>We are family owned mediaterraneran restaurent, focused on traditional recipes served with a modern twist</p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                        <a href='/'>About</a>
                        <a href='/'>Menu</a>
                        <a href='/'>Order Online</a>
                        <a href='/'>Login</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>
                        Address: <br></br> 123 TownCity, USA
                    </li>
                    <li>
                        Phone: <br></br> 0987 565 876
                    </li>
                    <li>
                        Email: <br></br> Littlelemon@gmail.com
                    </li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li>
                    <a href='/'>facebook</a>
                        <a href='/'>Instagram</a>
                        <a href='/'>Twitter</a>
                    </li>
                </ul>
            </div>
        </section>
    </footer>
  )
}

export default Footer;
