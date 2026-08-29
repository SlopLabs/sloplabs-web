# sloplabs-web

The landing page for [SlopLabs](https://github.com/SlopLabs). Next.js 15, TypeScript,
Tailwind CSS v4.

## Development

```bash
npm install
npm run dev          # http://localhost:3000
```

Checks:

```bash
npm run check        # lint + typecheck
npm run format:check
npm run build
```

## Design notes

The palette comes from the SlopOS brand assets (`assets/logo-on-dark.svg` in the slopos
repo): `#8EE451` phosphor green on a cool near-black. The site is dark only, matching
the OS and the docs site. Tokens live in `src/styles/globals.css`.

Type is Geist and Geist Mono through `next/font`, the same pairing the docs site uses,
so the two properties read as one family.

Photography in `public/images/` is cropped from `assets/hardware.jpg` in the slopos
repo. That is a real photo of SlopOS running on a Lenovo laptop, not a mockup.

Every number on the page traces back to the slopos README. If you change a figure
there, change it here.

## License

See `LISENCE`.
