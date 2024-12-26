const { execSync } = require('child_process');
const os = require('os');

try {
  // Check if `npx` is available
  execSync('npx --version', { stdio: 'ignore' });

  // If `npx` is available, run npm-force-resolutions
  execSync('npx npm-force-resolutions', { stdio: 'inherit' });
} catch (error) {
  console.log('npm-force-resolutions not found, skipping resolutions.');
  process.exit(0); // Exit gracefully if npx is not found
}
