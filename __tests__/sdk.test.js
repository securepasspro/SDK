import SecurePassSDK from '../src/securepasspro.js';

describe('SecurePassSDK', () => {
  let sdk;

  beforeEach(() => {
    sdk = new SecurePassSDK('spro_test_api_key_1234567890123456789012345678901234567890', {
      baseURL: 'http://localhost:3000/api'
    });
  });

  test('should initialize with API key', () => {
    expect(sdk.apiKey).toBe('spro_test_api_key_1234567890123456789012345678901234567890');
    expect(sdk.baseURL).toBe('http://localhost:3000/api');
  });

  test("should initialize SDK correctly", () => {
    const sdk = new SecurePassSDK("spro_test_key_valid_1234567890123456789012345678901234567890");
    expect(sdk).toBeDefined();
  });
  
  test('should throw error for invalid API key', () => {
    expect(() => new SecurePassSDK('')).toThrow('Invalid API key provided');
    expect(() => new SecurePassSDK('short')).toThrow('Invalid API key provided');
  });

  test('should have all required methods', () => {
    expect(typeof sdk.generatePassword).toBe('function');
    expect(typeof sdk.generateBulkPasswords).toBe('function');
    expect(typeof sdk.getUsage).toBe('function');
    expect(typeof sdk.testConnection).toBe('function');
    expect(typeof sdk.getTeamInfo).toBe('function');
    expect(typeof sdk.addTeamMember).toBe('function');
    expect(typeof sdk.removeTeamMember).toBe('function');
    expect(typeof sdk.updateTeamMemberRole).toBe('function');
  });
}); 