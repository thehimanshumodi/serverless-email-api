# 📧 Serverless Email API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-blue)
![License](https://img.shields.io/badge/License-MIT-orange)

A serverless function that sends emails via API using Netlify Functions and Nodemailer.

## Table of Contents
- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [API Documentation](#-api-documentation)
- [Local Development](#-local-development)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

## 🌟 Features
- Send emails via REST API
- Input validation for required fields
- Environment variable security
- Netlify Functions deployment
- CORS headers included
- Error handling

## 🛠️ Prerequisites
- [Node.js](https://nodejs.org/) v18+
- [Netlify account](https://app.netlify.com/)
- Email service credentials (Gmail recommended)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/) (for local testing)

## 📥 Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/serverless-email-api.git
cd serverless-email-api

# Install dependencies
npm install
```

## ⚙️ Configuration

1. Rename `.env.example` to `.env`
2. Update with your email credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```
# Email API Documentation

## API Overview
This API allows you to send emails through a serverless endpoint deployed on Netlify. It handles email delivery with proper validation, error handling, and response formatting.

## Base Configuration
- **Base URL**: `https://your-site.netlify.app/api`
- **Content-Type**: `application/json`
- **Authentication**: Bearer token (if enabled)

## Send Email Endpoint

### Request
`POST /send-email`

#### Headers
```http
Content-Type: application/json
Authorization: Bearer your_api_key_here  # If authentication enable
```

### Request Body
```json
{
  "receiver_email": "recipient@example.com",
  "subject": "Your email subject",
  "body_text": "The content of your email message"
}
```
## Successful Response
### HTTP Response
```text
200 OK
Content-Type: application/json
```
## Response Body
```json
{
  "status": "success",
  "message": "Email queued for delivery",
  "data": {
    "to": "recipient@example.com",
    "subject": "Your email subject",
    "message_id": "12345-abcde",
    "timestamp": "2023-11-15T12:00:00Z"
  }
}
```

