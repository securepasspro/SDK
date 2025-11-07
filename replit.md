# SecurePass Pro JavaScript SDK

## Overview

SecurePass Pro SDK is an official JavaScript library for secure password generation and management. It provides a client-side interface to interact with the SecurePass Pro API, enabling cryptographically secure password generation (256-bit encryption), bulk password creation, team management, and usage tracking. The SDK is distributed as an npm package with support for Node.js (CommonJS and ES Modules) and browser environments (UMD format).

This is a lightweight client library that wraps HTTP API calls to a remote SecurePass Pro service. The SDK handles authentication, request formatting, error handling, and provides a simple developer-friendly interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Client Library Architecture

**Purpose**: The SDK is a thin client wrapper around REST API endpoints. It does not perform password generation locally - instead, it forwards requests to the SecurePass Pro API service.

**Design Pattern**: The codebase follows a simple class-based singleton pattern where `SecurePassSDK` encapsulates all API interactions. Each public method corresponds to a specific API endpoint.

**Key Architectural Decisions**:

1. **API Key Authentication**: Uses bearer token authentication with API keys prefixed with `spro_`. The SDK validates API key format on initialization to fail fast on invalid credentials.

2. **Universal JavaScript Module Support**: 
   - Built using Rollup to generate three output formats (CommonJS for Node.js, ES Modules for modern bundlers, and UMD for browsers)
   - Allows the same codebase to work seamlessly in Node.js backend, frontend frameworks, and vanilla browser environments
   - Decision rationale: Maximize distribution reach and ease of integration

3. **Minimal Dependencies**: Zero runtime dependencies - the SDK only uses native fetch/http capabilities. This reduces bundle size and eliminates supply chain security concerns.

4. **Timeout and Error Handling**: All API requests have configurable timeouts (default 10 seconds) and structured error handling that surfaces meaningful error messages to developers.

5. **Security Validations**: Client-side input validation (password length limits, API key format) prevents malformed requests and provides quick feedback.

### Build System

**Rollup**: Chosen for its tree-shaking capabilities and excellent ES module support. Generates three distribution formats from a single source file:
- `dist/securepasspro.js` - CommonJS (for Node.js `require()`)
- `dist/securepasspro.esm.js` - ES Module (for `import` statements)
- `dist/securepasspro.min.js` - Minified UMD (for browser `<script>` tags)

**Testing**: Jest is configured for unit testing with ES module support via `NODE_OPTIONS='--experimental-vm-modules'`.

**Code Quality**: ESLint with Prettier integration enforces consistent code style and catches common errors.

**Semantic Release**: Automated versioning and publishing workflow triggered by Git tags (not commit messages). When a version tag like `v1.2.3` is pushed, GitHub Actions automatically runs tests, builds the package, generates changelog, and publishes to npm.

### Distribution Strategy

**npm Registry**: Primary distribution method. Package published as `@securepasspro/sdk`.

**CDN**: Secondary distribution via jsDelivr for direct browser inclusion without build tools.

**GitHub Releases**: Source code and built artifacts attached to GitHub releases for transparency and direct download.

### API Surface

The SDK exposes these primary methods:

- `generatePassword(options)` - Generate single password
- `generateBulkPasswords(count, options)` - Generate up to 1000 passwords
- `getUsage()` - Check API usage statistics and limits
- `testConnection()` - Verify API connectivity and authentication
- `getTeamInfo()` - Retrieve team member information
- `addTeamMember(email, role)` - Add user to team
- `removeTeamMember(userId)` - Remove team member
- `updateTeamMemberRole(userId, role)` - Update member permissions

Each method returns a Promise that resolves with API response data or rejects with descriptive error messages.

## External Dependencies

### Runtime Dependencies

**None** - The SDK has zero runtime dependencies. It uses native browser/Node.js capabilities:
- `fetch` API (browsers) or `http`/`https` modules (Node.js)
- Native `JSON` parsing
- Native `Promise` support

### Development Dependencies

**Build Tools**:
- `rollup` - Module bundler for generating distribution files
- `@rollup/plugin-commonjs` - Convert CommonJS modules to ES6
- `@rollup/plugin-node-resolve` - Resolve node_modules imports
- `@rollup/plugin-terser` - Minification for production builds

**Testing**:
- `jest` - JavaScript testing framework for unit tests

**Code Quality**:
- `eslint` - Linting tool for code quality
- `prettier` - Code formatter
- `eslint-config-prettier` - Disable ESLint rules that conflict with Prettier
- `eslint-plugin-prettier` - Run Prettier as an ESLint rule

**Release Automation**:
- `semantic-release` - Automated version management and package publishing
- `@semantic-release/changelog` - Generate changelog from commits
- `@semantic-release/git` - Commit version changes
- `@semantic-release/github` - Create GitHub releases
- `@semantic-release/npm` - Publish to npm registry

**TypeScript** (for type definitions only, not for compilation):
- `typescript` - Generate type definition files for IDE autocomplete

### External Services

**SecurePass Pro API**: The backend service that performs actual password generation and user management. Default endpoint: `https://securepasspro.co/api`

**npm Registry**: Package distribution platform at `npmjs.com`

**jsDelivr CDN**: Content delivery network for browser-based distribution

**GitHub**: Source control, CI/CD (GitHub Actions), and release hosting

### API Integration Points

The SDK communicates with these API endpoints (all require authentication):

- `POST /api/password` - Password generation
- `POST /api/passwords/bulk` - Bulk password generation
- `GET /api/usage` - Usage statistics
- `GET /api/test` - Connection test
- `GET /api/team` - Team information
- `POST /api/team/members` - Add team member
- `DELETE /api/team/members/:id` - Remove team member
- `PUT /api/team/members/:id/role` - Update member role

All API communication uses HTTPS with API key bearer authentication in headers.