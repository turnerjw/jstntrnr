//require("dotenv").config();
const sgMail = require("@sendgrid/mail");
console.log(process.env.SENDGRID_API_KEY);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handle(req, res) {
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
            send(res, 200, "success");
        })
        .catch(error => {
            console.log("failed", error);
            send(res, 500, "failed");
        });
}
