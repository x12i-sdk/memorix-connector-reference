# @x12i/memorix-connector-reference usage example

Reference Memorix connectors — cursor, watermark, fullScanHash, workflow, XML, staging, and signed push patterns.

This consuming application demonstrates **pull every page from the bundled cursor reference provider** using the published npm package, pinned to `1.0.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Study the published reference connector patterns for the pinned version.
- Compare a connector's checkpoint handling with the reference implementation.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorix-connector-reference)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

This example consumes bundled assets or deterministic local fixtures. It does not contact providers, acquire real records, seed a database, or persist a production graph. Report examples check HTML generation only. Theme examples generate `preview.html`; visual appearance still needs browser review.
