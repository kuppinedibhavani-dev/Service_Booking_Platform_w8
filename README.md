# Service Booking Platform

A full-stack MERN application for booking home services with secure online payments, notifications, and admin management.

---

## Live Demo

🌐 Frontend: https://service-booking-platform-w8.vercel.app/  
⚙ Backend: https://service-booking-platform-w8.onrender.com/

---

## Features

### User Side
- User Registration & Login
- Browse available services
- Book services with preferred date, time, and address
- Secure online payment with Razorpay
- Email confirmation after booking
- SMS confirmation after booking
- View booking history
- Track booking status

### Admin Side
- View all bookings
- Manage customer bookings
- Update booking status:
  - Pending
  - Confirmed
  - Completed
  - Cancelled

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Integrations
- Razorpay
- Nodemailer
- Twilio

---

## Project Structure

```bash
Service_Booking_Platform_w8/
│── backend/
│   │── config/
│   │── controllers/
│   │── middleware/
│   │── models/
│   │── routes/
│   │── utils/
│   │── server.js
│
│── frontend/
│   │── public/
│   │── src/
│   │── package.json
```

---

## Installation

### Clone repository

```bash
git clone https://github.com/your-username/Service_Booking_Platform_w8.git
cd Service_Booking_Platform_w8
```

---

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## Environment Variables

Create a `.env` file inside backend folder:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret

EMAIL_USER=your_email
EMAIL_PASS=your_email_app_password

TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```

---

## API Routes

### Auth Routes

```bash
POST /api/auth/register
POST /api/auth/login
```

### Service Routes

```bash
POST /api/services
GET /api/services
```

### Booking Routes

```bash
POST /api/bookings
GET /api/bookings/my-bookings
GET /api/bookings
PUT /api/bookings/:id
```

### Payment Routes

```bash
POST /api/payment/create-order
POST /api/payment/verify
```

---

## Deployment

Frontend deployed on Vercel  
Backend deployed on Render  
Database hosted on MongoDB Atlas

---

## Future Improvements

- Service CRUD for Admin
- User profile management
- Service provider profiles
- Reviews & ratings
- Real-time booking tracking
- Coupon system

---
