# tailwindcss1

## Installation

Install NodeJs or PNPM or Yarn or Bun
Here we use Bun:
```
$ bun install
```

See https://tailwindcss.com/docs/installation for more details

## Run HTML with Tailwind CSS
```
$ bun run dev
```
## Build Tailwind CSS
```
$ bun run buildt
```
## Build minified Tailwind CSS
```
$ bun run minify
```
## Build for deployment
```
$ bun run build
```
open dis/index.html -> right click -> open with live server ... if not working, remove the slash symbol before "assets" in HTML to import css and js files: assets/, not /assets/

Zip and upload the dist directory into your hosting
