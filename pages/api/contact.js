const nodemailer = require("nodemailer");
// var transporter = nodemailer.createTransport({
//   host: "smtp-mail.outlook.com", // hostname
//   secureConnection: false, // TLS requires secureConnection to be false
//   port: 587, // port for secure SMTP
//   tls: {
//     ciphers:'SSLv3'
//   },
//   requireTLS:true,//this parameter solved problem for me
//   auth: {
//     user: 'yourmail@outlook.com',
//     pass: 'yourpassword'
//   }
// });
export default (req, res) => {
  // const { name, email, text } = req.body;
  const { name, email, text } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secureConnection: false,
    port: 587,
    tls: {
      ciphers: "SSLv3",
    },
    requireTLS: true,
    auth: {
      user: "bhagasidhfurnitureindustry@gmail.com",
      pass: process.env.PASSWORD,
    },
  });

  const mailOption = {
    from: `${email}`,
    to: process.env.EMAIL,
    subject: `New mail from ${email}`,
    text: `
    ${name} wrote:
    ${text}
    `,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
      res.send("error" + JSON.stringify(err));
    } else {
      console.log("mail send");
      res.send("success");
    }
  });

  console.log(name, email, text);
  res.send("success");
};
