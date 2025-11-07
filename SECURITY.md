
# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

**Please DO NOT report security vulnerabilities through public GitHub issues.**

Instead, please report security vulnerabilities by emailing:

**security@securepasspro.com**

Include the following information:

- Type of issue (e.g., buffer overflow, SQL injection, cross-site scripting)
- Full paths of source file(s) related to the issue
- Location of the affected source code (tag/branch/commit or direct URL)
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

You should receive a response within 48 hours. If for some reason you do not, please follow up to ensure we received your original message.

## Security Updates

Security updates will be released as patch versions and announced through:

- GitHub Security Advisories
- npm security advisories
- Email to registered users (for critical issues)

## Security Best Practices

When using the SecurePass Pro SDK:

1. **Never expose API keys** in client-side code or public repositories
2. **Use environment variables** for sensitive credentials
3. **Rotate API keys** regularly (every 90 days recommended)
4. **Monitor usage** for unauthorized access
5. **Revoke compromised keys** immediately
6. **Use HTTPS** for all API communications
7. **Keep the SDK updated** to the latest version

## Disclosure Policy

When we receive a security bug report, we will:

1. Confirm the problem and determine affected versions
2. Audit code to find similar problems
3. Prepare fixes for all supported releases
4. Release patches as soon as possible

We appreciate your efforts to responsibly disclose your findings.

---

**Thank you for helping keep SecurePass Pro and our users safe!** 🔒
