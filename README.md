# jstntrnr.com
This is a personal website that I can use to introduce myself and show off some of my projects.

Check it out live: jstntrnr.com

## How it's made
- This project uses Next.js since it makes routing and server side rendering super easy.
- For styling, I went with styled-components since it eliminates scope bugs and is also just really nice to use
- [react-scroll-parallax](https://github.com/jscottsmith/react-scroll-parallax) and [react-visibility-sensor](https://github.com/joshwnj/react-visibility-sensor) add a little bit more visual flair
- SendGrid was used for the contact form
- It also uses the variable font [Jost](https://indestructibletype.com/Jost.html), allowing me to have a lot of control over the typeface, while also reducing the payload size.
- Icons are provided by Font Awesome (server side rendering makes this component somewhat finicky)

## Deployment
This project was deployed using [Now 2.0](https://zeit.co/now).
All decisions were made to accomodate the project being deployed serverlessly, which cuts running costs significantly (I'm actually only paying for the domain name).
I also like saying that my website is serverlessly server side rendered.

Figuring out how to accommodate the mailer locally and live was interesting.
To set up the mailer locally, I created a Next.js node server and a route that simply uses the SengGrid package.
It worked like a charm locally, but a server like this would be difficult to deploy serverlessly.
The solution was to break the mailer function out and configure it to be deployed on its own as a serverless lambda, but also having the Next.js server import it so it can be used locally.
The mailer function uses [micro](https://github.com/zeit/micro) to handle HTTP things.
