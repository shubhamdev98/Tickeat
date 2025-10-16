Thank you for contributing to this project! This short guide helps you get set up and follow the repository conventions.

Getting started
- Clone the repo and install dependencies:

  npm install

- Husky hooks are installed by the `prepare` script. If you haven't run it (or hooks are missing), run:

  npm run prepare

Formatting & linting
- This repo uses Prettier + ESLint. Before committing, `pre-commit` hook runs a full lint check and format on staged files.

  # format the whole codebase
  npm run format

  # lint the codebase
  npm run lint
  npm run lint:fix

Commit messages
- The repository enforces Conventional Commits. Examples:
  - feat(auth): add login endpoint
  - fix(api): handle null response
  - chore: bump dependencies

- Commits are validated by commitlint in Husky `commit-msg` hook. If your message fails, update it to follow the format.

Pre-commit / pre-push hooks
- pre-commit: runs a full ESLint check and then `lint-staged` to format and fix staged files. Commits will be blocked if lint errors remain.
- pre-push: runs a final ESLint check and commitlint for the most recent commit(s).

How to bypass hooks (use sparingly)
- To bypass hooks for a single commit:

  git commit --no-verify -m "chore: bypass hooks"

How to run tests (local)
- Tests are not included by default. See `tests/README.md` for recommended test setup.

If you need help, open an issue with a short description and steps to reproduce.
