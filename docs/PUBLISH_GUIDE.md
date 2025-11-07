# Publishing SecurePass Pro SDK to npm

**⚠️ IMPORTANT:** This package uses **automated releases** with semantic-release. Publishing happens automatically when you push version tags to GitHub. Manual publishing is rarely needed.

**See [AUTOMATED_RELEASES.md](./AUTOMATED_RELEASES.md) for the recommended release process.**

---

## Manual Publishing (Advanced Users Only)

This guide is for manual publishing in case automated releases fail or for initial setup.

## 📋 Prerequisites

1. **npm account** - Create at [npmjs.com](https://www.npmjs.com/signup)
2. **npm CLI** - Should be installed with Node.js
3. **Package ready** - All tests pass, build succeeds
4. **NPM_TOKEN** - Set up in GitHub secrets for automated releases

## 🔧 Pre-Publish Checklist

- [x] Package is built (`npm run build`)
- [x] All tests pass (`npm test`)
- [x] Version number is correct in `package.json`
- [x] `README.md` is complete and accurate
- [x] `GETTING_STARTED.md` is included
- [x] Examples are included
- [x] License file is present
- [x] `.npmignore` is configured correctly
- [x] `dist/` folder contains all built files
- [x] TypeScript definitions are included

## 📦 Step 1: Login to npm

```bash
npm login
```

Enter your credentials:
- Username: (your npm username)
- Password: (your npm password)
- Email: (your npm email)
- OTP: (if 2FA is enabled)

## 📦 Step 2: Verify Package

```bash
# Check what will be published
npm pack --dry-run

# Actually create the tarball to inspect
npm pack
```

This creates a `.tgz` file. Extract it to verify all files are included:
```bash
tar -xzf @securepasspro/sdk-1.0.0.tgz
ls -la package/
```

## 📦 Step 3: Publish to npm

```bash
# Publish to npm registry
npm publish

# Or publish publicly (if private package)
npm publish --access public
```

## 📦 Step 4: Verify Publication

Visit your package on npm:
```
https://www.npmjs.com/package/@securepasspro/sdk
```

Test installation:
```bash
# Create a test directory
mkdir test-install
cd test-install

# Install the package
npm install @securepasspro/sdk

# Test it works
node -e "const SDK = require('@securepasspro/sdk'); console.log('SDK loaded:', typeof SDK);"
```

## 🔄 Updating the Package

When you need to update:

1. **Update version** in `package.json`:
   ```json
   {
     "version": "1.0.1"  // Increment patch, minor, or major
   }
   ```

2. **Update CHANGELOG.md** with changes

3. **Rebuild**:
   ```bash
   npm run build
   ```

4. **Test**:
   ```bash
   npm test
   ```

5. **Publish**:
   ```bash
   npm publish
   ```

## 📝 Version Numbers

Follow [Semantic Versioning](https://semver.org/):
- **Major** (1.0.0 → 2.0.0): Breaking changes
- **Minor** (1.0.0 → 1.1.0): New features, backward compatible
- **Patch** (1.0.0 → 1.0.1): Bug fixes, backward compatible

## 🚀 Publishing First Time

```bash
# 1. Make sure everything is ready
npm run build
npm test

# 2. Login to npm
npm login

# 3. Check what will be published
npm pack --dry-run

# 4. Publish
npm publish --access public

# 5. Verify
npm view @securepasspro/sdk
```

## 🔍 Post-Publish Checklist

- [ ] Package is visible on npmjs.com
- [ ] README displays correctly
- [ ] Installation works: `npm install @securepasspro/sdk`
- [ ] Import works: `require('@securepasspro/sdk')` or `import SecurePassSDK from '@securepasspro/sdk'`
- [ ] CDN link works (if configured)
- [ ] GitHub repository link works
- [ ] Documentation links work

## 📚 npm Registry Links

After publishing, your package will be available at:

- **npm**: https://www.npmjs.com/package/@securepasspro/sdk
- **Install**: `npm install @securepasspro/sdk`
- **CDN**: https://cdn.jsdelivr.net/npm/@securepasspro/sdk@latest/dist/securepasspro.min.js

## 🆘 Troubleshooting

### "You do not have permission to publish"
- Make sure you're logged in: `npm whoami`
- Check package name is available: `npm search @securepasspro/sdk`
- If name is taken, choose a different name in `package.json`

### "Package name already exists"
- Choose a different name in `package.json`
- Or use scoped package: `@your-org/@securepasspro/sdk`

### "Invalid package name"
- Package names must be lowercase
- Can only contain letters, numbers, hyphens, and underscores
- Must start with a letter

### Build fails
- Check `rollup.config.js` is correct
- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors

## 📦 Package Structure

After publishing, npm will include:
```
@securepasspro/sdk/
├── dist/
│   ├── securepasspro.js
│   ├── securepasspro.esm.js
│   ├── securepasspro.min.js
│   └── securepasspro.d.ts
├── examples/
│   ├── browser.html
│   └── nodejs-example.js
├── README.md
├── GETTING_STARTED.md
├── USAGE_EXAMPLES.md
├── LICENSE
└── package.json
```

## ✅ Success!

Once published, developers can install and use your SDK:

```bash
npm install @securepasspro/sdk
```

```javascript
import SecurePassSDK from '@securepasspro/sdk';
const sdk = new SecurePassSDK('spro_your-api-key');
```

🎉 **Your SDK is now available to the world!**

