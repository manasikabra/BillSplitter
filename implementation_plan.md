# Goal Description

We will build a platform-agnostic Node.js backend using Express. This setup will keep your HTML file separate and exactly as it is, while moving the secure Google API request to a private server. 

Because it is a standard Node.js server, you can run it locally with a simple command (`node server.js`), and you can deploy it to any hosting platform in the world (Vercel, Render, Heroku, AWS, etc.) without relying on platform-specific features.

## User Review Required

> [!IMPORTANT]  
> Your `.env` file is currently empty (0 bytes). Before we can test this, you will need to open the `.env` file and paste your API key in this exact format:
> `GEMINI_API_KEY=your_actual_key_here`

## Proposed Changes

### [NEW] `package.json`
I will run `npm init -y` to create a package file, and then install three standard libraries:
- `express`: The web server framework.
- `dotenv`: To allow the server to read your `.env` file.
- `cors`: To allow your frontend to communicate with your backend securely.

### [NEW] `server.js`
I will create a standard Node.js server file. This file will do two things:
1. When a user visits your website, it will send them your `BillSplitter.htm` file.
2. It will provide an `/api/scan` endpoint. When your frontend sends an image here, the server will securely read your `GEMINI_API_KEY`, send the image to Google, and pass the results back to the frontend.

### [MODIFY] `BillSplitter.htm`
I will make two small tweaks to your existing frontend code:
- Remove the `const apiKey = ""` variable (so it's no longer exposed in the browser).
- Change the frontend `fetch` request so it sends the image to our new `/api/scan` server endpoint instead of sending it directly to Google.

## Verification Plan

### Local Testing
1. I will run `npm install` to set up the dependencies.
2. I will start your new server by running `node server.js` (or `npm start`).
3. You will open `http://localhost:3000` in your browser and test uploading a bill.

### Deployment
Once we verify it works locally, I will guide you on how to push the project to GitHub and deploy it. Since it's a standard Node.js app, you'll be able to deploy it to Vercel (or any other service) with just a few clicks!
