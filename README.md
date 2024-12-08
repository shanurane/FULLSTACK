# Deployment

This project is a web application designed to manage projects, clients, and contact form submissions. It allows admins to add and view projects and clients, as well as manage subscriptions and contact form submissions. The app integrates Cloudinary for image uploads and uses Vite as the bundler for a fast development experience.

## Table of Contents
1. Installation
2. Usage
3. Features
4. Technologies
5. Contributing

## Installation

Follow these steps to get the development environment set up:

### 1. Clone the repository
Clone the repository to your local machine:
```bash
git clone https://github.com/yourusername/projectname.git
```

### 2. Navigate to the project directory
cd projectname

###3. Install dependencies
If you're using npm:

```bash
npm install
```

If you're using yarn:

```bash
yarn install
```

### 4. Configure environment variables
Create a .env file in the root of the project and add the necessary environment variables:

env
```bash
VITE_API_URL=http://your-api-url
```

### 5. Run the development server
To start the local development server, run the following command:

If you're using npm:

```bash
npm run dev
```

If you're using yarn:

```bash
yarn dev
```

The app is running at https://fullstack-nine-delta.vercel.app/.

##Usage
Once the app is running, you can access the admin panel to add projects, clients, and manage contact submissions. The project also includes a front-facing landing page that displays projects and client testimonials.

Admin Panel: Allows you to manage projects, clients, and view contact form submissions.
Landing Page: Displays a list of projects and client testimonials.
Subscription Management: Users can subscribe with their emails, which will be stored in the database.

##Features
Project Management: Add and manage projects with images and descriptions.
Client Management: Add and display client testimonials.
Contact Form: View submissions from users who filled out the contact form.
Email Subscriptions: Manage email subscriptions for marketing or notifications.
Image Upload: Images are uploaded to Cloudinary and linked to projects and clients.

##Technologies

Frontend:

React.js
Vite (for bundling and fast development)
Tailwind CSS (for styling)
Axios (for making API requests)
Cloudinary (for image hosting)

Backend 

Node.js
Express.js (for handling API routes)

##Contributing
We welcome contributions to the project. To contribute:

Fork the repository.
Create a new branch: git checkout -b feature-branch.
Make your changes.
Commit your changes: git commit -m 'Add feature'.
Push to the branch: git push origin feature-branch.
Open a pull request to the main branch.
Please make sure your code passes all linting checks and tests before submitting a pull request.
