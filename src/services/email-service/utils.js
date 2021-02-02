const invariant = require("invariant");
const sgMail = require("@sendgrid/mail");
const mjml2html = require("mjml");

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

const EMAIL_FROM = process.env.EMAIL_FROM;

module.exports = {
  mjml2html,
  sendEmail(args) {
    invariant(SENDGRID_API_KEY, "process.env.SENDGRID_API_KEY not defined");
    invariant(EMAIL_FROM, "process.env.EMAIL_FROM is not defined");

    return sgMail.send({
      from: EMAIL_FROM,
      ...args,
    });
  },
};
