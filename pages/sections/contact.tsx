import React from "react";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="formModal">
                <div className="form">
                    {/* input fields, send button */}
                    {/* Add onSubmit= to line 10 */}
                    <form id='contactform' >
                        <label htmlFor="name">Name</label><br />
                        <input
                            id='name'
                            type='text' /><br />

                        <label htmlFor="email">Email</label><br />
                        <input
                            id='email'
                            type="email" /><br />

                        <label htmlFor="message">Message</label> <br />
                        <input
                            id='message'
                            type='text' /><br />
                        {/* This submit will be connected to the modal */}
                        <input type='submit' value='Send' />
                    </form>
                </div>

                <div className="popup">
                
                </div>
            </div>
        </div>
    )
}
export default Contact;