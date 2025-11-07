# Automated Release System

This package uses **semantic-release** for automated publishing to npm when you create a version tag.

## 🚀 How It Works

When you push a tag like `v1.2.3`:
1. ✅ **Builds** the package
2. ✅ **Runs tests** 
3. ✅ **Runs linter**
4. ✅ **Generates changelog** from commits
5. ✅ **Updates version** in package.json
6. ✅ **Publishes to npm** with provenance
7. ✅ **Creates GitHub release** with assets

**You control when releases happen by creating tags!** 🎯

## 🏷️ Creating a Release

To publish a new version, create and push a tag:

### Patch Release (1.0.0 → 1.0.1)
Bug fixes and minor changes:
```bash
git tag v1.0.1
git push origin v1.0.1
```

### Minor Release (1.0.0 → 1.1.0)
New features (backward compatible):
```bash
git tag v1.1.0
git push origin v1.1.0
```

### Major Release (1.0.0 → 2.0.0)
Breaking changes:
```bash
git tag v2.0.0
git push origin v2.0.0
```

### Or create tag and push together:
```bash
git tag v1.2.3 && git push origin v1.2.3
```

## 📝 Commit Message Format (Optional)

Using **Conventional Commits** helps generate better changelogs:

```bash
git commit -m "fix: resolve API timeout issue"
git commit -m "feat: add bulk password deletion method"
git commit -m "feat!: redesign API interface"
```

## 📋 Commit Types

| Type | Description | Version Bump |
|------|-------------|--------------|
| `feat:` | New feature | Minor (1.x.0) |
| `fix:` | Bug fix | Patch (1.0.x) |
| `docs:` | Documentation only | Patch (1.0.x) |
| `refactor:` | Code refactoring | Patch (1.0.x) |
| `style:` | Code formatting | Patch (1.0.x) |
| `perf:` | Performance improvement | Patch (1.0.x) |
| `test:` | Add/update tests | No release |
| `chore:` | Build/tooling changes | No release |
| `ci:` | CI config changes | No release |
| `BREAKING CHANGE:` | Breaking change | Major (x.0.0) |

## 🔧 Setup Instructions

### 1. Create NPM Token
1. Go to [npmjs.com](https://www.npmjs.com/)
2. Login → Account Settings → Access Tokens
3. Click **"Generate New Token"** → **"Automation"** type
4. Copy the token (starts with `npm_...`)

### 2. Add NPM Token to GitHub
1. Go to your GitHub repo
2. Settings → Secrets and variables → Actions
3. Click **"New repository secret"**
4. Name: `NPM_TOKEN`
5. Value: Paste your npm token
6. Click **"Add secret"**

### 3. Create and Push Tag
```bash
# Make changes and commit
git add .
git commit -m "feat: add new feature"
git push origin main

# When ready to release, create a version tag
git tag v1.0.0
git push origin v1.0.0
```

The GitHub Action will automatically:
- Run all checks (build, test, lint)
- Generate changelog from commits
- Publish to npm if checks pass
- Create GitHub release

## 📦 What Gets Published

Every release includes:
- Built distribution files (`dist/`)
- README, LICENSE, examples
- TypeScript definitions
- Source maps
- npm provenance attestation

## 🔍 Monitoring Releases

### Check Release Status
- GitHub: Go to **Actions** tab to see workflow runs
- npm: Check https://www.npmjs.com/package/@securepasspro/sdk

### View Release History
- GitHub Releases: https://github.com/YOUR_ORG/sdk/releases
- CHANGELOG.md: Auto-updated in repo

## 🛠️ Manual Release (Optional)

If you need to trigger a release manually:

```bash
# Ensure you're on main branch with latest changes
git checkout main
git pull

# Run semantic-release locally
npx semantic-release --no-ci
```

**Note**: You'll need `NPM_TOKEN` and `GITHUB_TOKEN` environment variables set.

## 🚫 Working Without Release

You can commit and push to `main` without triggering a release:

```bash
git add .
git commit -m "chore: update dependencies"
git push origin main  # No release - only tags trigger releases
```

Only pushing a version tag triggers the release workflow.

## 📊 Example Workflow

```bash
# 1. Create feature branch
git checkout -b feature/new-method

# 2. Make changes and commit
git add .
git commit -m "feat: add password validation method"

# 3. Push and create PR
git push origin feature/new-method
# Create PR on GitHub

# 4. Merge PR to main
git checkout main
git pull

# 5. Create tag to trigger release
git tag v1.1.0
git push origin v1.1.0
# Automated release triggers!
```

## ❓ Troubleshooting

### "No release published"
- Verify you pushed a tag (not just commits to main)
- Tag must match format: `v*.*.*` (e.g., v1.2.3)
- See Actions tab for detailed logs

### "npm publish failed"
- Verify `NPM_TOKEN` secret is set correctly
- Check npm token hasn't expired
- Ensure you have publish permissions for @securepass scope

### "GitHub release failed"
- Verify `GITHUB_TOKEN` permissions
- Check repository settings allow Actions to create releases

## 📚 Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [semantic-release Docs](https://semantic-release.gitbook.io/)
- [Commit Message Guidelines](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)

## 🎯 Best Practices

1. **Write clear commit messages** - They become your changelog
2. **Keep commits focused** - One change per commit
3. **Test locally first** - Run `npm test` before pushing
4. **Use feature branches** - Don't commit directly to main
5. **Review PRs carefully** - Merged commits trigger releases!
