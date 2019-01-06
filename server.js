const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
require("dotenv").config();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.json());

    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.post("/api/contact", (req, res) => {
        const { email = "", name = "", message = "" } = req.body;
        const msg = {
            to: "jstnwllmtrnr@gmail.com",
            from: email,
            subject: `New message from ${name}`,
            text: message
        };
        console.log(msg);

        sgMail
            .send(msg)
            .then(() => {
                console.log("success");
                res.send("success");
            })
            .catch(error => {
                console.log("failed", error);
                res.send("badddd");
            });
    });

    server.listen(3000, err => {
        if (err) throw err;
        console.log("> Read on http://localhost:3000");
    });
});
