/**
 * SecurePass Pro SDK — Example Usage
 * ----------------------------------
 * Demonstrates installation, initialization, and common SDK functions.
 *
 * npm install @securepasspro/sdk
 */

import SecurePassSDK from "@securepasspro/sdk"; // ESM import

// Optional: environment variable or fallback
const API_KEY = process.env.SECUREPASS_API_KEY || "spro_your-api-key-here";

// Initialize the SDK
const sdk = new SecurePassSDK(API_KEY);

async function main() {
  try {
    // Test connection
    console.log('Testing connection...');
    const test = await sdk.testConnection();
    if (!test.success) {
      throw new Error('Connection test failed');
    }
    console.log('✅ Connected successfully!');

    // Check usage
    console.log('\nChecking usage...');
    const usage = await sdk.getUsage();
    console.log(`Plan: ${usage.plan}`);
    console.log(`Used: ${usage.usedGenerations}/${usage.passwordLimit}`);

    // Generate password
    console.log('\nGenerating password...');
    const password = await sdk.generatePassword({
      length: 20,
      includeUppercase: true,
      includeLowercase: true,
      includeNumbers: true,
      includeSymbols: true
    });
    console.log(`Generated: ${password.password}`);
    console.log(`Strength: ${password.strength}`);

    // Generate bulk passwords
    console.log('\nGenerating bulk passwords...');
    const bulk = await sdk.generateBulkPasswords(5, { length: 16 });
    console.log(`Generated ${bulk.count} passwords:`);
    bulk.passwords.forEach((pwd, i) => {
      console.log(`  ${i + 1}. ${pwd}`);
    });

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();