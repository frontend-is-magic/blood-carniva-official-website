# AGENTS.md

## Project Standards

- Use Next.js for the application framework.
- Use JavaScript only. Do not introduce TypeScript files, TypeScript config, or TS-only patterns unless explicitly requested.
- Use `.js` and `.jsx` for source files.
- Use Tailwind CSS for styling.
- Prefer Tailwind utility classes over custom CSS when practical.
- If global state management is needed, use Jotai.
- Do not add another global state library such as Redux, Zustand, MobX, or Recoil unless explicitly requested.

## Implementation Guidelines

- Follow existing project structure and conventions when they exist.
- Keep changes focused and minimal.
- Prefer simple React components and idiomatic Next.js patterns.
- Avoid unnecessary abstractions, dependencies, or large refactors.
- Keep UI styling consistent through Tailwind classes.
- Add comments only when they explain non-obvious reasoning.

## Verification

When practical, verify changes with the smallest meaningful command available, such as:

- `npm run lint`
- `npm run build`
- targeted tests, if tests exist

Clearly report whether verification passed, failed, or was not run.
