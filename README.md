# Elzero TypeScript Assignments Lab 🧪💫

This repository contains solutions to the TypeScript assignments provided by Elzero Web School. The assignments are designed to test and improve your TypeScript skills.

## Assignment Folders

Each assignment has its own folder, which is created using the `init-assignments.sh` script. This script creates a folder with the assignment name, installs TypeScript as a dev dependency, creates an `index.ts` file in the `src` folder, and updates the `tsconfig.json` file to set the `rootDir` and `outDir` properties.

## Running the Solutions**

> I use [pnpm](https://pnpm.io/) as my package manager. You can use any package manager you like.

To run the solutions, navigate to the assignment folder and run the following command:

First, install the dependencies:
```bash
pnpm install
```
Then run the TypeScript compiler:
```bash
pnpm tsc && node ./dist/index.js
```

This will install the necessary dependencies, compile the TypeScript files, and run the compiled JavaScript file using Node.js.

Alternatively, you can add the following scripts to the `package.json` file for each assignment:

```json
{
  "scripts": {
    "start": "pnpm tsc && node ./dist/index.js",
    "build": "pnpm tsc"
  }
}
```

This will allow you to run pnpm start to compile the TypeScript files, and run the compiled JavaScript file using Node.js, or pnpm run build to compile the TypeScript files without installing dependencies.

## Contributing

If you have a better solution to any of the assignments, or if you find a bug in any of the solutions, please feel free to create a pull request.

## License

This project is licensed under the MIT License.
