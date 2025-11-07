# SecurePass Pro SDK - Usage Examples

Complete, working examples for using the SecurePass Pro SDK in different environments.

## 📦 Installation

```bash
npm install @securepasspro/sdk
```

## 📝 Examples

### Node.js (CommonJS)

```javascript
const SecurePassSDK = require('@securepasspro/sdk');

const sdk = new SecurePassSDK('spro_your-api-key-here');

async function main() {
  try {
    // Test connection
    const test = await sdk.testConnection();
    console.log('Connection:', test.success);

    // Generate password
    const result = await sdk.generatePassword({ length: 16 });
    console.log('Password:', result.password);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
```

**Run:** `node example.js`

### Node.js (ES Modules)

```javascript
import SecurePassSDK from '@securepasspro/sdk';

const sdk = new SecurePassSDK('spro_your-api-key-here');

const result = await sdk.generatePassword({ length: 16 });
console.log(result.password);
```

**Run:** `node --experimental-modules example.mjs`

### Browser (ES Module)

```html
<!DOCTYPE html>
<html>
<head>
    <title>SecurePass Pro SDK Example</title>
</head>
<body>
    <h1>Password Generator</h1>
    <button onclick="generate()">Generate Password</button>
    <div id="result"></div>

    <script type="module">
        import SecurePassSDK from 'https://cdn.jsdelivr.net/npm/@securepasspro/sdk/dist/securepasspro.esm.js';
        
        const sdk = new SecurePassSDK('spro_your-api-key-here');
        
        window.generate = async function() {
            try {
                const result = await sdk.generatePassword({ length: 16 });
                document.getElementById('result').textContent = result.password;
            } catch (error) {
                document.getElementById('result').textContent = 'Error: ' + error.message;
            }
        };
    </script>
</body>
</html>
```

### Browser (UMD)

```html
<!DOCTYPE html>
<html>
<head>
    <title>SecurePass Pro SDK Example</title>
</head>
<body>
    <h1>Password Generator</h1>
    <button onclick="generate()">Generate Password</button>
    <div id="result"></div>

    <script src="https://cdn.jsdelivr.net/npm/@securepasspro/sdk/dist/securepasspro.min.js"></script>
    <script>
        const sdk = new SecurePassSDK('spro_your-api-key-here');
        
        async function generate() {
            try {
                const result = await sdk.generatePassword({ length: 16 });
                document.getElementById('result').textContent = result.password;
            } catch (error) {
                document.getElementById('result').textContent = 'Error: ' + error.message;
            }
        }
    </script>
</body>
</html>
```

### React Component

```javascript
import React, { useState } from 'react';
import SecurePassSDK from '@securepasspro/sdk';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const sdk = new SecurePassSDK('spro_your-api-key-here');

  const generatePassword = async () => {
    setLoading(true);
    try {
      const result = await sdk.generatePassword({ length: 16 });
      setPassword(result.password);
    } catch (error) {
      console.error('Error:', error.message);
      alert('Failed to generate password: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={generatePassword} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Password'}
      </button>
      {password && <p>Password: {password}</p>}
    </div>
  );
}

export default PasswordGenerator;
```

### Vue.js Component

```vue
<template>
  <div>
    <button @click="generatePassword" :disabled="loading">
      {{ loading ? 'Generating...' : 'Generate Password' }}
    </button>
    <p v-if="password">Password: {{ password }}</p>
  </div>
</template>

<script>
import SecurePassSDK from '@securepasspro/sdk';

export default {
  data() {
    return {
      password: '',
      loading: false,
      sdk: new SecurePassSDK('spro_your-api-key-here')
    };
  },
  methods: {
    async generatePassword() {
      this.loading = true;
      try {
        const result = await this.sdk.generatePassword({ length: 16 });
        this.password = result.password;
      } catch (error) {
        console.error('Error:', error.message);
        alert('Failed to generate password: ' + error.message);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
```

### Complete Example with Error Handling

```javascript
import SecurePassSDK from '@securepasspro/sdk';

const sdk = new SecurePassSDK(process.env.SECUREPASS_API_KEY || 'spro_your-api-key-here');

async function main() {
  try {
    // 1. Test connection
    console.log('Testing connection...');
    const test = await sdk.testConnection();
    if (!test.success) {
      throw new Error('Connection failed');
    }
    console.log('✅ Connected successfully!');

    // 2. Check usage
    const usage = await sdk.getUsage();
    console.log(`Plan: ${usage.plan}, Used: ${usage.usedGenerations}/${usage.passwordLimit}`);

    // 3. Generate password
    const password = await sdk.generatePassword({
      length: 20,
      includeUppercase: true,
      includeLowercase: true,
      includeNumbers: true,
      includeSymbols: true
    });
    console.log(`Password: ${password.password}`);
    console.log(`Strength: ${password.strength}`);

    // 4. Generate bulk passwords
    const bulk = await sdk.generateBulkPasswords(5, { length: 16 });
    console.log(`Generated ${bulk.count} passwords:`);
    bulk.passwords.forEach((pwd, i) => console.log(`  ${i + 1}. ${pwd}`));

  } catch (error) {
    // Handle specific errors
    if (error.message.includes('401')) {
      console.error('❌ Authentication failed. Check your API key.');
    } else if (error.message.includes('429')) {
      console.error('❌ Rate limit exceeded. Please try again later.');
    } else if (error.message.includes('403')) {
      console.error('❌ Access denied. Ensure you have Enterprise or Annual plan.');
    } else {
      console.error('❌ Error:', error.message);
    }
    process.exit(1);
  }
}

main();
```

## 📚 More Examples

See the `examples/` directory for:
- `nodejs-example.js` - Complete Node.js example
- `browser.html` - Interactive browser example

## 🔑 Getting Your API Key

1. Log in to [SecurePass Pro Dashboard](https://securepasspro.com)
2. Go to **API Integration** tab
3. Click **"Create API Key"**
4. Copy your API key (only shown once!)

## 📖 Full Documentation

- [Getting Started Guide](./GETTING_STARTED.md)
- [API Reference](./README.md#api-reference)
- [Support](./README.md#support)

