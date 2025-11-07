# Contributing to SecurePass Pro SDK

Thank you for your interest in contributing to the SecurePass Pro JavaScript SDK! 🎉

## 🤝 How to Contribute

### Reporting Bugs

Found a bug? Please help us fix it!

1. **Check existing issues** - Search [GitHub Issues](https://github.com/securepasspro/sdk/issues) first
2. **Create a new issue** with:
   - Clear, descriptive title
   - Steps to reproduce the bug
   - Expected vs actual behavior
   - Your environment (Node.js version, browser, OS)
   - Code samples if applicable

### Suggesting Features

Have an idea for improvement?

1. **Check existing feature requests** first
2. **Create a new issue** with:
   - Clear description of the feature
   - Use cases and benefits
   - Example code/API design if applicable

### Submitting Pull Requests

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes**:
   - Follow existing code style
   - Add tests for new functionality
   - Update documentation as needed
4. **Run tests**: `npm test`
5. **Run linter**: `npm run lint`
6. **Commit with meaningful messages**:
   - Use [Conventional Commits](https://www.conventionalcommits.org/)
   - Example: `feat: add password strength validator`
7. **Push to your fork**: `git push origin feature/your-feature-name`
8. **Create a Pull Request**

## 📝 Commit Message Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/) for automated releases:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code formatting (no logic changes)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Build/tooling changes

Examples:
```bash
git commit -m "feat: add password validation method"
git commit -m "fix: resolve timeout issue in bulk generation"
git commit -m "docs: update API reference examples"
```

## 🧪 Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/securepasspro/sdk.git
cd securepass-pro-sdk

# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build

# Run linter
npm run lint
```

## 🔒 Security

**Never commit sensitive data** like API keys or credentials. Report security vulnerabilities privately - see [SECURITY.md](SECURITY.md).

## ✅ Code Review Process

1. All PRs require at least one approval
2. All tests must pass
3. Linter must pass
4. Documentation must be updated
5. Changes should follow existing patterns

## 📚 Resources

- [README.md](README.md) - Main documentation
- [GETTING_STARTED.md](docs/GETTING_STARTED.md) - Setup guide
- [AUTOMATED_RELEASES.md](docs/AUTOMATED_RELEASES.md) - Release process

## 💬 Questions?

- Open an issue for general questions
- Email support@securepasspro.com for private inquiries

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for making SecurePass Pro SDK better!** 🚀

