'use strict';

exports.handler = async (event, context) => {
  try {
    const { receiver_email, subject, body_text } = JSON.parse(event.body);

const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports.sendEmail = async (event) => {
  try {
    // Parse the incoming request body
    const requestBody = JSON.parse(event.body);
    const { receiver_email, subject, body_text } = requestBody;

    // Validate input
    if (!receiver_email || !subject || !body_text) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'Missing required fields: receiver_email, subject, or body_text',
        }),
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(receiver_email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'Invalid email format for receiver_email',
        }),
      };
    }

    // Create transporter (using Gmail as example)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: receiver_email,
      subject: subject,
      text: body_text,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Email sent successfully',
      }),
    };
  } catch (error) {
    console.error('Error sending email:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Failed to send email',
        error: error.message,
      }),
    };
  }
};

 return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent!" })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};