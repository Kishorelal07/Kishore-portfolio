import React from "react";
import { MdOutlineMail } from "react-icons/md";

import { useRef } from "react";

const Contacts = () =>{
    const form = useRef();
    return (
        <section id="contacts">
            <h5>
                Get in touch
            </h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>arkishorelal@gmail.com</h5>
                        <a href="mailto:arkishorelal@gmail.com">Send a message</a>
                    </article>
                </div>

                <form ref={form}>
                    
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="text" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>

                </form>
            </div>
        </section>
    )
}

export default Contacts