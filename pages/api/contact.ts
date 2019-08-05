import { NextApiRequest, NextApiResponse } from "next";
const sgMail = require("@sendgrid/mail");
console.log(process.env.SENDGRID_API_KEY);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handle(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body);

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
            res.status(200).end("success");
        })
        .catch(error => {
            console.log("failed", error);
            res.status(500).end("failure");
        });
}
