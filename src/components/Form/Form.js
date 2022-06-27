import './Form.scss';

import React from 'react';
import { useForm } from '@formspree/react';

const Form = () => {
    const [state, handleSubmit] = useForm("xvodkoyo");
    // if (state.succeeded) {
    //     return <p>Thanks for joining!</p>;
    // }
    return ( 
        <div>
            <h1>Send a message</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Name">Your Name</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Name">Your Email</label>
                        <input type="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Message">Your Message</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit" disabled={state.submitting}>Tell me</button>
                </form>
                {/* if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    } */}
            {
                (state.succeeded) ? <p>Thanks for joining!</p> : ' '
            }
        </div>
    );
}
 
export default Form;