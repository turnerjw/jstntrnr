require("dotenv").config();
const { send, json } = require("micro");

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (req, res) => {
    const { email = "", name = "", message = "" } = await json(req);
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
};
