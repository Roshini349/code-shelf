# Code Shelf

Code Shelf is a project built with Next.js, React, TypeScript, and Express.

## Tech Stack

- **Frontend:** Next.js, React, TypeScript
- **Backend:** Express.js, Node.js, TypeScript
- **Linting:** ESLint

## Prerequisites

Install Node.js and npm before running the project.

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/osl-vvce/code-shelf.git
cd code-shelf
npm install
```

If you are working from a fork, clone your fork's URL instead.

### Run the Frontend

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Run the Express Backend

Open a second terminal in the project directory and run:

```bash
npm run server:dev
```

The backend runs at [http://localhost:4000](http://localhost:4000).

Verify that it is running by opening [http://localhost:4000/api/health](http://localhost:4000/api/health). A successful response contains a status of `ok` and a confirmation message.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Build the Next.js application |
| `npm run start` | Start the built Next.js application |
| `npm run lint` | Run ESLint |
| `npm run server:dev` | Run the Express backend in watch mode |
| `npm run server:build` | Compile the Express backend TypeScript |
| `npm run server:start` | Start the compiled Express backend |

To run the compiled backend, first execute `npm run server:build`, then execute `npm run server:start`.

## Project Structure

```text
code-shelf/
├── data/                  # Project data
├── public/                # Static assets
├── src/
│   ├── app/               # Next.js application and API routes
│   └── components/        # Reusable UI components
├── server/
│   ├── index.ts           # Express application entry point
│   ├── routes/             # Express route modules
│   ├── tsconfig.json       # Backend TypeScript configuration
│   └── dist/               # Generated backend build (not committed)
├── package.json
└── README.md
```

The Next.js application and Express backend run as separate processes. Existing Next.js API routes remain part of the Next.js application.

## Contributing

Create a feature branch for your changes, run the relevant lint and build checks, and submit a pull request for review.
