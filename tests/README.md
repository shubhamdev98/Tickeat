Tests

This project doesn't include a test runner by default. Recommended approach for Vite + React + TypeScript:

- Use Vitest for unit tests and Testing Library for React component tests.

Quick setup (optional):

  npm install -D vitest @testing-library/react @testing-library/jest-dom

Add scripts to `package.json`:

  "test": "vitest",
  "test:watch": "vitest --watch"

Create `vitest.config.ts` at the project root and a `tests/` folder for unit tests.

Example test file: `tests/example.test.ts`

```ts
import { describe, it, expect } from 'vitest'

describe('smoke', () => {
  it('works', () => {
    expect(1 + 1).toBe(2)
  })
})
```

Run tests:

  npm run test
