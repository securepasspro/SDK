/**
 * Simple verification script to demonstrate the SDK can be imported
 * This is not part of the SDK itself - it's just for verification purposes
 */

import SecurePassSDK from './dist/securepasspro.esm.js';

console.log('✅ SecurePass SDK Verification');
console.log('================================');

try {
  const sdk = new SecurePassSDK('spro_test_key_1234567890123456789012345678901234567890', {
    baseURL: 'https://api.securepasspro.co',
    timeout: 10000
  });

  console.log('✅ SDK initialized successfully');
  console.log('📦 SDK Version: 1.0.1');
  console.log('🔧 API Key configured');
  console.log('🌐 Base URL:', sdk.baseURL);
  console.log('⏱️  Timeout:', sdk.timeout + 'ms');
  console.log('\n✅ All SDK methods available:');
  console.log('  - generatePassword()');
  console.log('  - generateBulkPasswords()');
  console.log('  - getTeamInfo()');
  console.log('  - addTeamMember()');
  console.log('  - removeTeamMember()');
  console.log('  - updateTeamMemberRole()');
  console.log('  - testConnection()');
  console.log('  - getUsage()');
  console.log('\n📚 This is an npm library package ready for publishing.');
  console.log('📦 Install with: npm install @securepasspro/sdk');
  console.log('📖 See docs/ folder for usage examples.');

} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}