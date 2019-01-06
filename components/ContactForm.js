import React, { Component } from "react";
import styled from "styled-components";
import "isomorphic-fetch";

const Form = styled.form`
    display: flex;
    fieldset,
    input,
    textarea {
        width: 100%;
    }
    textarea {
        min-height: 5rem;
    }
`;

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
            <Form onSubmit={this.handleSubmit}>
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
                        <textarea
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
            </Form>
        );
    }
}

export default ContactForm;
