import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "isomorphic-fetch";

const spin = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

const Icon = styled.div`
    height: 1.5rem;
    width: 1.5rem;
    //padding: 1rem;
    animation: ${({ submitting }) => (submitting ? spin : "")} 1s steps(8, end)
        infinite;
`;

const Form = styled.form`
    fieldset,
    input,
    textarea {
        width: 100%;
    }
    fieldset {
        display: flex;
        flex-direction: column;
    }
    textarea {
        min-height: 5rem;
    }
    button {
        align-self: flex-end;
    }
`;

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: false,
            submitted: false,
            error: false,
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
            this.setState({ submitting: false });
            res.status === 200
                ? this.setState({ submitted: true })
                : this.setState({ error: true });
        });
    };

    render() {
        const {
            name,
            email,
            message,
            submitting,
            submitted,
            error
        } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <fieldset disabled={submitting || submitted}>
                    <label htmlFor="name">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={name}
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
                            value={email}
                            onChange={this.handleChange}
                            placeholder="Your email"
                        />
                    </label>
                    <label htmlFor="email">
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={message}
                            onChange={this.handleChange}
                            placeholder="Your message"
                        />
                    </label>
                    <button type="submit">
                        {!submitting && !submitted && !error && "Send"}
                        {submitting && (
                            <Icon submitting>
                                <FontAwesomeIcon icon="spinner" />
                            </Icon>
                        )}
                        {submitted && (
                            <Icon>
                                <FontAwesomeIcon icon="check" />
                            </Icon>
                        )}
                        {error && "Problem Sending"}
                    </button>
                </fieldset>
            </Form>
        );
    }
}

export default ContactForm;
