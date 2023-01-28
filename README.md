# \<oscd-save>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## What is this?

This is the first plugin for [open-scd-core](https://github.com/openscd/open-scd-core#readme), the new core editor engine for OpenSCD. `demo/index.html` shows how you can use the same generic "Open File" plugin as both a menu and editor plugin at the same time. Start up a demo server with `npm start` and see for yourself!

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

> This demo plugin does nothing much that could be tested as it relies exclusively on built-in browser components to do its job. We therefore currently have no tests. If you find something that could be tested, please feel free!

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`

&copy; 2022 OMICRON electronics GmbH
