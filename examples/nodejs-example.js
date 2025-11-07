/**
 * SecurePass Pro SDK - Node.js Example
 * 
 * Installation:
 *   npm install @securepasspro/sdk
 * 
 * Usage:
 *   node nodejs-example.js
 * 
 * Or set API key as environment variable:
 *   SECUREPASS_API_KEY=spro_your-key-here node nodejs-example.js
 */

// Import the SDK
const SecurePassSDK = require('@securepasspro/sdk');
// For ES Modules, use: import SecurePassSDK from '@securepasspro/sdk';

// Get API key from environment or use placeholder
const API_KEY = process.env.SECUREPASS_API_KEY || 'spro_your-api-key-here';

// Initialize SDK
const sdk = new SecurePassSDK(API_KEY, {
  baseURL: 'https://securepasspro.co/api',
  timeout: 10000
});

async function main() {
  try {
    // 1. Test connection
    console.log('Testing connection...');
    const test = await sdk.testConnection();
    if (!test.success) {
      throw new Error('Connection failed');
    }
    console.log('✅ Connected successfully!');
    console.log('User:', test.data.user.email);
    console.log('Plan:', test.data.user.plan);

    // 2. Check usage
    console.log('\n--- Checking Usage ---');
    const usage = await sdk.getUsage();
    console.log(`Plan: ${usage.plan}`);
    console.log(`Used: ${usage.usedGenerations}/${usage.passwordLimit}`);
    console.log(`Remaining: ${usage.passwordLimit - usage.usedGenerations}`);

    // 3. Generate single password
    console.log('\n--- Generating Password ---');
    const password = await sdk.generatePassword({
      length: 20,
      includeUppercase: true,
      includeLowercase: true,
      includeNumbers: true,
      includeSymbols: true
    });
    console.log(`Password: ${password.password}`);
    console.log(`Strength: ${password.strength}`);
    console.log(`Entropy: ${password.entropy}`);
    console.log(`Quantum Resistant: ${password.quantumResistant}`);

    // 4. Generate bulk passwords
    console.log('\n--- Generating Bulk Passwords ---');
    const bulk = await sdk.generateBulkPasswords(5, { length: 16 });
    console.log(`Generated ${bulk.count} passwords:`);
    bulk.passwords.forEach((pwd, i) => {
      console.log(`  ${i + 1}. ${pwd}`);
    });

    console.log('\n✅ All operations completed successfully!');
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the main function
main();