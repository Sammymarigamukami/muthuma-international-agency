
 Holland & Barrett Inspired eCommerce Platform
A full-stack eCommerce web application built with Next.js, inspired by the Holland & Barrett health and wellness brand. This project goes beyond a simple storefront to implement secure authentication, persistent shopping, real-time database integration, and mobile payments via M-Pesa STK Push API.
The goal of this project was to replicate the experience of a real-world eCommerce platform while showcasing my skills in full-stack development, authentication, API integration, and cloud deployment.

 Introduction
This project is a full-stack Next.js eCommerce platform designed to provide a secure, scalable, and user-friendly online shopping experience. The idea was inspired by Holland & Barrett, a global retailer of health and wellness products.
Unlike many practice projects that only focus on the frontend, this project integrates frontend + backend + database + authentication + payments, making it production-ready and closer to real-world applications.
By combining Next.js for full-stack capabilities, Neon PostgreSQL for data storage, BetterAuth for user authentication, Resend for email verification, and M-Pesa STK Push API for payments, I was able to deliver a project that reflects how professional eCommerce platforms are built.

 Objectives
The key objectives of this project were:
 -To design and implement a complete online shopping experience.
 -To practice building secure user authentication flows.
 -To work with a relational database (PostgreSQL) for storing users, products, and orders.
 -To integrate a real-world payment system (M-Pesa STK Push).
 -To ensure the application is responsive, scalable, and deployable on cloud platforms.
 -To improve my skills in Next.js full-stack development and modern API integrations.

 Core Features
User Authentication & Security
 -Register/Login via BetterAuth
 -Email-based login and verification with Resend
 -Secure session management   
 
Product Management
 -Product catalog with categories
 -Individual product detail pages
 -Optimized product fetching with Next.js API routes
 
Shopping Cart
 -Add to cart & remove from cart functionality
 -Persistent cart using localStorage
 -Cart survives refreshes and logouts
 
Payments
 -M-Pesa STK Push API integration for mobile money checkout
 -Secure, real-time payment flow
 
Database
-Neon PostgreSQL stores user accounts, products, and orders
-Prisma ORM for database schema and queries

UI/UX
 -Responsive layout using Tailwind CSS + Shadcn/UI
 -Mobile-first design
 -Clean, modern interface
 
Deployment
 -Frontend + backend hosted on Vercel
 -Database hosted on Neon (serverless PostgreSQL)

 System Architecture
User ──> Next.js Frontend ──> Next.js API Routes ──> Neon PostgreSQL Database
          │                        │
          │                        └──> Authentication (BetterAuth + Resend)
          │
          └──> Checkout ──> M-Pesa STK Push API ──> Safaricom Payment Gateway

This architecture ensures that the app is modular, scalable, and secure. Next.js acts as both the frontend framework and backend server, while Neon provides a cloud-native PostgreSQL solution.

 Tech Stack
Frontend: Next.js, React.js, Tailwind CSS, Shadcn/UI
Backend: Next.js API routes
Database: PostgreSQL (Neon) + Prisma ORM
Authentication: BetterAuth, Resend (for email login/verification)
Payments: M-Pesa Daraja API (STK Push integration)
Deployment: Vercel , Neon (database)
version Control: Git & GitHub

 Detailed Walkthrough
1. User Authentication
Users can register and log in using BetterAuth.
Resend integration ensures that login and verification emails are delivered securely.
Sessions are maintained across pages with JWT/session cookies.

2. Product Catalog
Categories allow users to filter products easily.
Each product has a detail page with images, description, and price.

3. Shopping Cart
Built with React state + localStorage.
Cart persists even after page refresh.
Synced with backend for logged-in users.

4. Checkout & Payments
At checkout, users can pay via M-Pesa STK Push.
On submitting payment, the app sends a request to Safaricom’s Daraja API.
The user receives a push notification on their phone, enters their M-Pesa PIN, and payment is confirmed.
Orders are then saved in the Neon PostgreSQL database.

 M-Pesa STK Push Integration
Integrating M-Pesa STK Push was one of the most exciting parts of this project.
Used Daraja API for secure requests.
Backend API routes handle payment initiation and callbacks.
Orders are marked “paid” only after confirmation from Safaricom.
This feature demonstrates real-world fintech integration, which is particularly relevant for East African markets where M-Pesa is widely used.

 Challenges & Solutions
Challenge: Managing authentication and email flows.
Solution: Integrated BetterAuth + Resend for a reliable and scalable solution.
Challenge: Ensuring cart persistence across sessions.
Solution: Implemented a hybrid approach using localStorage + backend sync.
Challenge: Payment integration with M-Pesa Daraja API.
Solution: Set up secure API routes in Next.js and handled STK Push callbacks properly.
Challenge: Database hosting and scaling.
Solution: Used Neon PostgreSQL, a cloud-native solution that scales easily.

 Learning Outcomes
This project helped me strengthen:
Full-stack Next.js development (frontend + backend in one framework).
Authentication flows with modern tools (BetterAuth, Resend).
Database design and queries with PostgreSQL + Prisma.
Third-party API integrations, especially M-Pesa STK Push.
Cloud deployment practices using Vercel and Neon.
Responsive UI/UX design with Tailwind CSS + Shadcn/UI.
Scalable architecture thinking, making apps production-ready.

 Future Improvements
Add search functionality for products.
Integrate additional payment gateways (e.g., Stripe/PayPal).
Add an admin dashboard for product and order management.
Improve SEO with Next.js server-side rendering.

 Conclusion
This project was an excellent opportunity to bring together multiple aspects of full-stack web development into a real-world style eCommerce platform. From authentication and database management to payments and deployment, every step reflected challenges faced in professional development.
By completing this project, I gained deeper experience in Next.js, PostgreSQL, authentication, API integration, and cloud deployment, while also demonstrating my ability to build applications that are both technically solid and user-friendly.

 If you found this project interesting, feel free to explore the live site and code. Feedback and suggestions are always welcome!
 https://holland-and-barrett-site-xu6q.vercel.app/
