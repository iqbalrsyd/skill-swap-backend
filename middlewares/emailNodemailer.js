const nodemailer = require('nodemailer');
const crypto = require('crypto');

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true, 
        logger: true,
        debug: true,
        secureConnection: false,
        auth: {
            user: process.env.EMAIL_USERNAME, 
            pass: process.env.EMAIL_PASSWORD, 
        },
        tls: {
            rejectUnauthorized: true 
        }
    });

    const emailOptions = {
        from: process.env.EMAIL_FROM, 
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    await transporter.sendMail(emailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

const emailVerify = async (user, req, type) => {
  let subject, message, tokenField, tokenExpiryField;

  const verificationToken = crypto.randomBytes(32).toString('hex');
  const hashedToken = crypto.createHash('sha256').update(verificationToken).digest('hex');

  switch (type) {
    case 'signup':
      tokenField = 'VerificationToken';
      tokenExpiryField = 'VerificationExpires';
      subject = 'Verify Account HR Management Employee';
      message = `Click on the following link to verify your email: ${req.protocol}://${req.get('host')}/user/verifyEmail/${verificationToken}`;
      break;

    case 'forgotPassword':
      tokenField = 'VerificationToken';
      tokenExpiryField = 'VerificationExpires';
      subject = 'Password Reset Account HR Management Employee';
      message = `Click on the following link to reset your password: ${req.protocol}://${req.get('host')}/user/verifyEmail/${verificationToken}`;
      break;

    default:
      throw new Error('Invalid email verification type');
  }

  user[tokenField] = hashedToken;
  user[tokenExpiryField] = Date.now() + 1 * 60 * 1000;
  await user.save({ validateBeforeSave: false });

  await sendEmail({
    email: user.email,
    subject,
    message,
  });
};

module.exports = emailVerify;

module.exports = sendEmail;