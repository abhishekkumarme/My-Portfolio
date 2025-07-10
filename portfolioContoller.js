const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_EMAIL_PASS,
  },
});

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    // 1️⃣ Send message to yourself (admin)
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: "📩 New Portfolio Contact Message",
      html: `
        <h3>New Message from Portfolio</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Message:</strong> ${msg}</li>
        </ul>
      `,
    });

    // 2️⃣ Send confirmation to user
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: email,
      subject: "✅ We Received Your Message!",
      html: `
        <h4>Hi ${name},</h4>
        <p>Thanks for contacting me through my portfolio. I have received your message and will get back to you as soon as possible.</p>
        <hr />
        <p><strong>Your Message:</strong></p>
        <blockquote>${msg}</blockquote>
        <p>Best Regards,<br/>Abhishek Kumar</p>
      `,
    });

    res.status(200).send({
      success: true,
      message: "Message sent successfully! Confirmation email also sent.",
    });

  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).send({
      success: false,
      message: "Failed to send email",
      error,
    });
  }
};

module.exports = { sendEmailController };
