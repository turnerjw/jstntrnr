import React, { Component } from "react";
import "isomorphic-fetch";
import GridItem from "./GridItem";

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: false,
            submitted: false,
            name: "",
            email: "",
            message: ""
        };
    }

    handleChange = e => {
        const { name, type, value } = e.target;
        const val = type === "number" ? parseFloat(value) : value;
        this.setState({
            [name]: val
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        this.setState({ submitting: true });

        fetch("/api/contact", {
            method: "post",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => {
            res.status === 200 ? this.setState({ submitted: true }) : "";
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <label htmlFor="name">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={this.state.name}
                            onChange={this.handleChange}
                            placeholder="Your name"
                        />
                    </label>
                    <label htmlFor="email">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            required
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="Your email"
                        />
                    </label>
                    <label htmlFor="email">
                        <input
                            type="text"
                            id="message"
                            name="message"
                            required
                            value={this.state.message}
                            onChange={this.handleChange}
                            placeholder="Your message"
                        />
                    </label>
                    <button type="submit">Send</button>
                </fieldset>
            </form>
        );
    }
}

// const ContactForm = props => (
//     <>
//         <GridItem columns="2 / 5" smallColumns="2 / 12" rows="1">
//             <h2>Contact</h2>
//         </GridItem>
//         <GridItem columns="2 / 5" smallColumns="2 / 12" rows="2">
//             <h3>
//                 Let me know how my site isn't perfectly responsive (or just say
//                 hi)
//             </h3>
//         </GridItem>
//         <GridItem columns="2 / 5" smallColumns="2 / 12" rows="3">
//             <form />
//             <input type="text" placeholder="Your email" />
//             <input type="text" placeholder="Your message" />
//         </GridItem>
//     </>
// );

export default ContactForm;
