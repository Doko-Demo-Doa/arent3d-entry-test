Entry test submission for Arent3D, powered by NextJS and Mantine UI kit + Typescript

You can see a live deployment here: [Link](https://arent3d-entry-test.vercel.app/)

## Requirements

- NodeJS 16+ (latest LTS, which should be 18 by now, is recommended)

## Tools used

- [Zustand](https://github.com/pmndrs/zustand)
- [Mantine Kit](https://mantine.dev/)
- [NextJS](https://nextjs.org/)

## Getting Started

Install the dependencies:

```bash
npm ci
```

Run the development server:

```bash
npm run dev
```

To run the unit test:

```bash
npm run test
```

it should print something like this:

```
 ✓ __tests__/hooks/use-fake-api.test.ts (1)
 ✓ __tests__/layouts/master-layout.test.tsx (1)

 Test Files  2 passed (2)
      Tests  2 passed (2)
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To build the production app:

```bash
npm run build
```

To run the production app (must build it first):

```bash
npm run start
```

## The quirks

### 1. Problems

Arent3d's assessment is not complicated, but the amount of things that need to be solved is considerable. It must:

- Comply with the design (color palette, font families,...)
- There are three screens with different kinds of component.
- It must emulate real-world use cases such as click-to-scroll, data filtering, data fetching,...
- While it's not required, but mobile-screen responsibility is a plus, so I decided to implement it anyway.
- It has charts (to be more precise, Line Chart), and it should display some data, with filters.

### 2. The solution(s):

- I decided to use **NextJS**. So I don't need to care about setting up routing, also Vercel can host it for me.
- **Mantine Kit** as the main UI kit. It includes almost everything I need to develop a regular website: responsive layout systems, utility hooks, pre-composed components that only need to be customized a bit more, dark-light mode support. And it looks nice by default.
- **Zustand** for state management: It is not actually used in the app, but I have installed it, just in case. It's a simpler version of Redux and can go really well with...
- **react-query**: A popular library for data fetching and caching. Using it as hook library to provide robust DX.
- **Vitest**: A much faster and easier, with less boilerplate, than jest. It can be configured easily with similar APIs as mocha/jest.

## Project structure

This project uses NextJS 13, but does not use newly added [app folder structure](https://beta.nextjs.org/docs/app-directory-roadmap). Instead, it uses traditional structure with some personal preferences.

- `components`: Contains components that are specific to certain screens, and is not re-usable.
- `layouts`: Contains layout files, which can be used at per-file level.
- `pages`: The main NextJS routing directory. Be aware that sub-route should be put into their respective directory, even if it is the sole route with no child inside.
- `themes`: Stores main theme files used by Mantine kit. You can also define color palettes in here.
- `shared`: Includes two important sub-folders:
  - `components`: Contains components that are re-usable and can be separated into other package/library. In microfrontend structure, this should be the "shared" package among others.
  - `hooks`: Same as components, but they are, well, hooks. Including API-related hooks, utility hooks, and more.
- `types`: Contains custom Typescript typing definitions.
- `utils`: Contains utility files, for testing, for data transforming,...

## Note

_It usually run on port 3000. Access localhost:3000 for the dev website_

I also include a Dockerfile for Docker deployment, if you are into that as well. It runs on port 4173 by default so you might want to forward the port later.
