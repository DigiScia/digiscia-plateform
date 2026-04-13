const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const teamDir = path.join(__dirname, 'src', 'assets', 'team');

async function processImages() {
  const files = fs.readdirSync(teamDir);
  
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      const inputPath = path.join(teamDir, file);
      const parsedPath = path.parse(file);
      const outputPath = path.join(teamDir, parsedPath.name + '.webp');
      
      console.log(`Processing ${file}...`);
      
      try {
        await sharp(inputPath)
          .resize(280, 280, { fit: 'cover', withoutEnlargement: true }) // 2x resolution for 140px display
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        console.log(`Successfully created ${parsedPath.name}.webp`);
        
        // Remove the original to save space / force update
        if (inputPath !== outputPath) {
          fs.unlinkSync(inputPath);
          console.log(`Deleted original ${file}`);
        }
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

processImages().then(() => console.log('Image compression complete!'));
