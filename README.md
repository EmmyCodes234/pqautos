<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1SJtNMqFx3AKedDu-f_jOwUcTNf-v_ZZa

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Netlify

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Sign up for a Netlify account at https://netlify.com
3. Click "New site from Git" and select your repository
4. Netlify will automatically detect the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Add your environment variables in the Netlify dashboard:
   - `GEMINI_API_KEY` with your Gemini API key
6. Click "Deploy site"

### Manual Deployment

You can also deploy manually:

1. Build the project:
   `npm run build`
2. Upload the contents of the `dist` folder to Netlify

### Environment Variables

Make sure to set the following environment variables in your Netlify dashboard:
- `GEMINI_API_KEY` - Your Gemini API key for AI features

## Asset Optimization

To optimize media assets for faster loading:

1. Run the optimization script:
   `npm run optimize`

2. Follow the guide to compress:
   - Videos (coastal.mp4)
   - Images in public/cars, public/our work, and root public directory
   - SVG icons in public/car icons

Recommended compression settings:
- JPEG: Quality 80-85%
- PNG: Use lossy compression
- Video: CRF 28-30 for web
- SVG: Remove unnecessary metadata

For best results, use tools like:
- FFmpeg for video compression
- ImageOptim/TinyPNG for images
- SVGOMG for SVG files