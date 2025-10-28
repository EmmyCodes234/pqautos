#!/usr/bin/env node

import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

async function optimizeImages() {
  console.log('Starting image optimization...');

  try {
    // Optimize JPG images in public/cars directory
    await imagemin(['public/cars/*.jpg'], {
      destination: 'public/cars',
      plugins: [
        imageminMozjpeg({ quality: 85 })
      ]
    });
    console.log('✓ Optimized images in public/cars');

    // Optimize JPG images in public/our work directory
    await imagemin(['public/our work/*.jpg'], {
      destination: 'public/our work',
      plugins: [
        imageminMozjpeg({ quality: 85 })
      ]
    });
    console.log('✓ Optimized images in public/our work');

    // Optimize PNG and JPG images in public root directory
    await imagemin(['public/*.{png,jpg,jpeg}'], {
      destination: 'public',
      plugins: [
        imageminMozjpeg({ quality: 85 }),
        imageminPngquant({
          quality: [0.6, 0.8]
        })
      ]
    });
    console.log('✓ Optimized images in public root');

    console.log('\n✅ All images optimized successfully!');
    console.log('\nRecommended next steps:');
    console.log('1. For video optimization, use FFmpeg:');
    console.log('   ffmpeg -i public/coastal.mp4 -vcodec libx264 -crf 28 -preset fast -acodec aac -b:a 128k -movflags +faststart public/coastal-optimized.mp4');
    console.log('2. For SVG optimization, use SVGOMG online tool:');
    console.log('   https://jakearchibald.github.io/svgomg/');
    console.log('3. Test the optimized assets by running: npm run dev');
    console.log('4. Build for production: npm run build');

  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

// Run the optimization
optimizeImages();