
# Release Checklist for SecurePass Pro SDK

This SDK uses **automated releases** via semantic-release and GitHub Actions. This checklist helps ensure smooth releases.

## Before Creating a Release Tag

- [ ] All changes are committed and pushed to `main` branch
- [ ] All tests pass locally: `npm test`
- [ ] Build succeeds: `npm run build`
- [ ] Linter passes: `npm run lint`
- [ ] `CHANGELOG.md` reflects latest changes (auto-generated on release)
- [ ] Documentation is up to date
- [ ] Version number in `package.json` will be auto-updated (don't edit manually)

## NPM Token Setup (One-Time)

- [ ] NPM token created at npmjs.com (Automation type)
- [ ] Token added to GitHub repo secrets as `NPM_TOKEN`
- [ ] Token has not expired (check expiration date)

## Creating a Release

### Determine Version Bump

Choose the appropriate version based on changes:

- **Patch** (1.0.0 → 1.0.1): Bug fixes, minor changes
- **Minor** (1.0.0 → 1.1.0): New features, backward compatible
- **Major** (1.0.0 → 2.0.0): Breaking changes

### Create and Push Tag

```bash
# Patch release
git tag v1.0.1
git push origin v1.0.1

# Minor release
git tag v1.1.0
git push origin v1.1.0

# Major release
git tag v2.0.0
git push origin v2.0.0
```

## After Pushing Tag

The GitHub Action automatically:

- [ ] Runs build
- [ ] Runs tests
- [ ] Runs linter
- [ ] Updates version in package.json
- [ ] Generates changelog from commits
- [ ] Publishes to npm with provenance
- [ ] Creates GitHub release with assets

## Verify Release

- [ ] GitHub Action completed successfully (check Actions tab)
- [ ] Package visible on npm: https://www.npmjs.com/package/@securepasspro/sdk
- [ ] GitHub release created with correct version
- [ ] CHANGELOG.md updated in repository
- [ ] Installation works: `npm install @securepasspro/sdk`
- [ ] CDN links work: https://cdn.jsdelivr.net/npm/@securepasspro/sdk/

## Test Installation

```bash
# Create test directory
mkdir test-sdk-install
cd test-sdk-install

# Install package
npm install @securepasspro/sdk

# Test import
node -e "const SDK = require('@securepasspro/sdk'); console.log('✅ SDK loaded successfully');"
```

## Rollback (if needed)

If release fails or has issues:

1. Delete the tag locally and remotely:
   ```bash
   git tag -d v1.0.1
   git push origin :refs/tags/v1.0.1
   ```

2. Fix issues in code

3. Create new tag with next version:
   ```bash
   git tag v1.0.2
   git push origin v1.0.2
   ```

## Common Issues

### "npm publish failed"
- Verify NPM_TOKEN is valid and not expired
- Check npm token permissions
- Ensure package name is available

### "GitHub release failed"
- Check GITHUB_TOKEN permissions
- Verify repository allows Actions to create releases

### "Build or tests failed"
- Fix failing tests/build locally
- Create new tag after fixes

## Commit Message Guidelines

For better changelog generation, use conventional commits:

```bash
git commit -m "feat: add new password validation method"
git commit -m "fix: resolve timeout issue in bulk generation"
git commit -m "docs: update API reference"
git commit -m "chore: update dependencies"
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`

## Resources

- [AUTOMATED_RELEASES.md](./AUTOMATED_RELEASES.md) - Full automation guide
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [semantic-release Docs](https://semantic-release.gitbook.io/)
