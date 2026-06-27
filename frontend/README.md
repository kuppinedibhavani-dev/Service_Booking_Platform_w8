# Service Booking Platform

A full-stack MERN application for booking home services with secure online payments, notifications, and admin management.

## Features

* User Authentication (Register/Login)
* Browse available services
* Book services with date, time, and address
* Secure payments using Razorpay
* Booking confirmation through Email and SMS
* User dashboard to track booking history
* Admin dashboard to manage all bookings
* Update booking statuses (Pending, Confirmed, Completed, Cancelled)

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Integrations

* Razorpay (Payments)
* Nodemailer (Email Notifications)
* Twilio (SMS Notifications)

## Live Demo

Frontend: https://service-booking-platform-w8.vercel.app/

Backend: https://service-booking-platform-w8.onrender.com/

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm start
```

## Environment Variables

Create `.env` file:

PORT=5000
MONGO_URI=mongodb+srv://kuppinedibhavani_db_user:Venki5158@cluster0.d5zc4zt.mongodb.net/?appName=Cluster0
JWT_SECRET=bhavani123
RAZORPAY_KEY_ID=rzp_test_T6ayDvdZzNmKXH
RAZORPAY_KEY_SECRET=XRQoBjXs8FxKGvxfX3ETbDfz
EMAIL_USER=kuppinedibhavani@gmail.com
EMAIL_PASS=dmvfayztidcmazhi
TWILIO_ACCOUNT_SID=AC4332337aad75f899751b32c075596a16
TWILIO_AUTH_TOKEN=0c22544169251e5719cdaeb0106ab25c
TWILIO_PHONE_NUMBER=+12568843675


## Future Improvements

* Real-time booking updates
* Service provider profiles
* Reviews and ratings
* Location tracking
* Coupon system
