# Deployment Guide for Bill Splitter

This document outlines the step-by-step process for deploying the Bill Splitter application to a live environment using Vercel.

## 1. Local Prerequisites
Before deploying, ensure your local application is ready for Vercel:
- **`server.js` export**: Your Express server must export the `app` at the end of the file (`module.exports = app;`) instead of just listening to a port.
- **`vercel.json` configuration**: A `vercel.json` file must exist in the root directory to route traffic correctly to your `server.js` backend.
- **`.gitignore`**: Make sure you have a `.gitignore` file that includes `.env` and `node_modules`. This is crucial to prevent your secret API key from being exposed.

## 2. Pushing Code to GitHub
1. Create a repository on GitHub.
2. Initialize a local Git repository and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/manasikabra/BillSplitter.git
   git push -u origin main
   ```

## 3. Deploying to Vercel
Once your code is safely stored in your GitHub repository, you can deploy it to Vercel:

1. **Log In**: Navigate to [Vercel](https://vercel.com/) and log in using your GitHub account.
2. **Add a New Project**: On your Vercel Dashboard, click **Add New...** and select **Project**.
3. **Import Repository**: Under the "Import Git Repository" section, locate your `BillSplitter` repository and click **Import**.
4. **Configure the Project**:
   - You can leave the "Framework Preset" as "Other".
   - Leave the "Root Directory" default settings.
5. **Add Environment Variables (Crucial)**:
   - In the **Environment Variables** section, you must add your secret keys. 
   - **Name**: `GEMINI_API_KEY`
   - **Value**: `[Your actual Google Gemini API Key]` (Copy this from your local `.env` file).
   - Click **Add**.
6. **Deploy**: Click the **Deploy** button.

## 4. Final Review
Vercel will begin building and deploying your application. The process typically takes less than a minute. Once completed, Vercel will provide you with a live, public URL where your application is hosted.

Every time you push new code to the `main` branch of your GitHub repository, Vercel will automatically re-build and re-deploy your app with the latest changes!
