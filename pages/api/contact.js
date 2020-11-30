const nodemailer = require("nodemailer");

export default (req, res) => {
  // const { name, email, text } = req.body;
  const { name, email, text } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
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
