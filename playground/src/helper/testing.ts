export const TESTING_SAMPLE_OUTPUT_FILETREE = [
  {
    fileName: 'next.config.ts',
    fileContent: 'import type { NextConfig } from "next";\r\n' +
      '\r\n' +
      'const nextConfig: NextConfig = {\r\n' +
      '  /* config options here */\r\n' +
      '};\r\n' +
      '\r\n' +
      'export default nextConfig;\r\n'
  },
  {
    fileName: 'package-lock.json',
    fileContent: '{\r\n' +
      '  "name": "dashboard",\r\n' +
      '  "version": "0.1.0",\r\n' +
      '  "lockfileVersion": 3,\r\n' +
      '  "requires": true,\r\n' +
      '  "packages": {\r\n' +
      '    "": {\r\n' +
      '      "name": "dashboard",\r\n' +
      '      "version": "0.1.0",\r\n' +
      '      "dependencies": {\r\n' +
      '        "@types/axios": "^0.9.36",\r\n' +
      '        "@types/recoil": "^0.0.1",\r\n' +
      '        "axios": "^1.9.0",\r\n' +
      '        "lucide-react": "^0.511.0",\r\n' +
      '        "next": "15.3.3",\r\n' +
      '        "react": "^19.0.0",\r\n' +
      '        "react-dom": "^19.0.0",\r\n' +
      '        "recoil": "^0.7.7"\r\n' +
      '      },\r\n' +
      '      "devDependencies": {\r\n' +
      '        "@tailwindcss/postcss": "^4",\r\n' +
      '        "@types/node": "^20",\r\n' +
      '        "@types/react": "^19",\r\n' +
      '        "@types/react-dom": "^19",\r\n' +
      '        "tailwindcss": "^4",\r\n' +
      '        "typescript": "^5"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@alloc/quick-lru": {\r\n' +
      '      "version": "5.2.0",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",\r\n' +
      '      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",\r\n' +
      '      "dev": true,\r\n' +
      '      "license": "MIT",\r\n' +
      '      "engines": {\r\n' +
      '        "node": ">=10"\r\n' +
      '      },\r\n' +
      '      "funding": {\r\n' +
      '        "url": "https://github.com/sponsors/sindresorhus"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@ampproject/remapping": {\r\n' +
      '      "version": "2.3.0",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz",\r\n' +
      '      "integrity": "sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==",\r\n' +
      '      "dev": true,\r\n' +
      '      "license": "Apache-2.0",\r\n' +
      '      "dependencies": {\r\n' +
      '        "@jridgewell/gen-mapping": "^0.3.5",\r\n' +
      '        "@jridgewell/trace-mapping": "^0.3.24"\r\n' +
      '      },\r\n' +
      '      "engines": {\r\n' +
      '        "node": ">=6.0.0"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@emnapi/runtime": {\r\n' +
      '      "version": "1.4.3",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.4.3.tgz",\r\n' +
      '      "integrity": "sha512-pBPWdu6MLKROBX05wSNKcNb++m5Er+KQ9QkB+WVM+pW2Kx9hoSrVTnu3BdkI5eBLZoKu/J6mW/B6i6bJB2ytXQ==",\r\n' +
      '      "license": "MIT",\r\n' +
      '      "optional": true,\r\n' +
      '      "dependencies": {\r\n' +
      '        "tslib": "^2.4.0"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@img/sharp-darwin-arm64": {\r\n' +
      '      "version": "0.34.2",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.34.2.tgz",\r\n' +
      '      "integrity": "sha512-OfXHZPppddivUJnqyKoi5YVeHRkkNE2zUFT2gbpKxp/JZCFYEYubnMg+gOp6lWfasPrTS+KPosKqdI+ELYVDtg==",\r\n' +
      '      "cpu": [\r\n' +
      '        "arm64"\r\n' +
      '      ],\r\n' +
      '      "license": "Apache-2.0",\r\n' +
      '      "optional": true,\r\n' +
      '      "os": [\r\n' +
      '        "darwin"\r\n' +
      '      ],\r\n' +
      '      "engines": {\r\n' +
      '        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"\r\n' +
      '      },\r\n' +
      '      "funding": {\r\n' +
      '        "url": "https://opencollective.com/libvips"\r\n' +
      '      },\r\n' +
      '      "optionalDependencies": {\r\n' +
      '        "@img/sharp-libvips-darwin-arm64": "1.1.0"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@img/sharp-darwin-x64": {\r\n' +
      '      "version": "0.34.2",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.34.2.tgz",\r\n' +
      '      "integrity": "sha512-dYvWqmjU9VxqXmjEtjmvHnGqF8GrVjM2Epj9rJ6BUIXvk8slvNDJbhGFvIoXzkDhrJC2jUxNLz/GUjjvSzfw+g==",\r\n' +
      '      "cpu": [\r\n' +
      '        "x64"\r\n' +
      '      ],\r\n' +
      '      "license": "Apache-2.0",\r\n' +
      '      "optional": true,\r\n' +
      '      "os": [\r\n' +
      '        "darwin"\r\n' +
      '      ],\r\n' +
      '      "engines": {\r\n' +
      '        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"\r\n' +
      '      },\r\n' +
      '      "funding": {\r\n' +
      '        "url": "https://opencollective.com/libvips"\r\n' +
      '      },\r\n' +
      '      "optionalDependencies": {\r\n' +
      '        "@img/sharp-libvips-darwin-x64": "1.1.0"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@img/sharp-libvips-darwin-arm64": {\r\n' +
      '      "version": "1.1.0",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.1.0.tgz",\r\n' +
      '      "integrity": "sha512-HZ/JUmPwrJSoM4DIQPv/BfNh9yrOA8tlBbqbLz4JZ5uew2+o22Ik+tHQJcih7QJuSa0zo5coHTfD5J8inqj9DA==",\r\n' +
      '      "cpu": [\r\n' +
      '        "arm64"\r\n' +
      '      ],\r\n' +
      '      "license": "LGPL-3.0-or-later",\r\n' +
      '      "optional": true,\r\n' +
      '      "os": [\r\n' +
      '        "darwin"\r\n' +
      '      ],\r\n' +
      '      "funding": {\r\n' +
      '        "url": "https://opencollective.com/libvips"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@img/sharp-libvips-darwin-x64": {\r\n' +
      '      "version": "1.1.0",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.1.0.tgz",\r\n' +
      '      "integrity": "sha512-Xzc2ToEmHN+hfvsl9wja0RlnXEgpKNmftriQp6XzY/RaSfwD9th+MSh0WQKzUreLKKINb3afirxW7A0fz2YWuQ==",\r\n' +
      '      "cpu": [\r\n' +
      '        "x64"\r\n' +
      '      ],\r\n' +
      '      "license": "LGPL-3.0-or-later",\r\n' +
      '      "optional": true,\r\n' +
      '      "os": [\r\n' +
      '        "darwin"\r\n' +
      '      ],\r\n' +
      '      "funding": {\r\n' +
      '        "url": "https://opencollective.com/libvips"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@img/sharp-libvips-linux-arm": {\r\n' +
      '      "version": "1.1.0",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.1.0.tgz",\r\n' +
      '      "integrity": "sha512-s8BAd0lwUIvYCJyRdFqvsj+BJIpDBSxs6ivrOPm/R7piTs5UIwY5OjXrP2bqXC9/moGsyRa37eYWYCOGVXxVrA==",\r\n' +
      '      "cpu": [\r\n' +
      '        "arm"\r\n' +
      '      ],\r\n' +
      '      "license": "LGPL-3.0-or-later",\r\n' +
      '      "optional": true,\r\n' +
      '      "os": [\r\n' +
      '        "linux"\r\n' +
      '      ],\r\n' +
      '      "funding": {\r\n' +
      '        "url": "https://opencollective.com/libvips"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@img/sharp-libvips-linux-arm64": {\r\n' +
      '      "version": "1.1.0",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.1.0.tgz",\r\n' +
      '      "integrity": "sha512-IVfGJa7gjChDET1dK9SekxFFdflarnUB8PwW8aGwEoF3oAsSDuNUTYS+SKDOyOJxQyDC1aPFMuRYLoDInyV9Ew==",\r\n' +
      '      "cpu": [\r\n' +
      '        "arm64"\r\n' +
      '      ],\r\n' +
      '      "license": "LGPL-3.0-or-later",\r\n' +
      '      "optional": true,\r\n' +
      '      "os": [\r\n' +
      '        "linux"\r\n' +
      '      ],\r\n' +
      '      "funding": {\r\n' +
      '        "url": "https://opencollective.com/libvips"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@img/sharp-libvips-linux-ppc64": {\r\n' +
      '      "version": "1.1.0",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.1.0.tgz",\r\n' +
      '      "integrity": "sha512-tiXxFZFbhnkWE2LA8oQj7KYR+bWBkiV2nilRldT7bqoEZ4HiDOcePr9wVDAZPi/Id5fT1oY9iGnDq20cwUz8lQ==",\r\n' +
      '      "cpu": [\r\n' +
      '        "ppc64"\r\n' +
      '      ],\r\n' +
      '      "license": "LGPL-3.0-or-later",\r\n' +
      '      "optional": true,\r\n' +
      '      "os": [\r\n' +
      '        "linux"\r\n' +
      '      ],\r\n' +
      '      "funding": {\r\n' +
      '        "url": "https://opencollective.com/libvips"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@img/sharp-libvips-linux-s390x": {\r\n' +
      '      "version": "1.1.0",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.1.0.tgz",\r\n' +
      '      "integrity": "sha512-xukSwvhguw7COyzvmjydRb3x/09+21HykyapcZchiCUkTThEQEOMtBj9UhkaBRLuBrgLFzQ2wbxdeCCJW/jgJA==",\r\n' +
      '      "cpu": [\r\n' +
      '        "s390x"\r\n' +
      '      ],\r\n' +
      '      "license": "LGPL-3.0-or-later",\r\n' +
      '      "optional": true,\r\n' +
      '      "os": [\r\n' +
      '        "linux"\r\n' +
      '      ],\r\n' +
      '      "funding": {\r\n' +
      '        "url": "https://opencollective.com/libvips"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@img/sharp-libvips-linux-x64": {\r\n' +
      '      "version": "1.1.0",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.1.0.tgz",\r\n' +
      '      "integrity": "sha512-yRj2+reB8iMg9W5sULM3S74jVS7zqSzHG3Ol/twnAAkAhnGQnpjj6e4ayUz7V+FpKypwgs82xbRdYtchTTUB+Q==",\r\n' +
      '      "cpu": [\r\n' +
      '        "x64"\r\n' +
      '      ],\r\n' +
      '      "license": "LGPL-3.0-or-later",\r\n' +
      '      "optional": true,\r\n' +
      '      "os": [\r\n' +
      '        "linux"\r\n' +
      '      ],\r\n' +
      '      "funding": {\r\n' +
      '        "url": "https://opencollective.com/libvips"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {\r\n' +
      '      "version": "1.1.0",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.1.0.tgz",\r\n' +
      '      "integrity": "sha512-jYZdG+whg0MDK+q2COKbYidaqW/WTz0cc1E+tMAusiDygrM4ypmSCjOJPmFTvHHJ8j/6cAGyeDWZOsK06tP33w==",\r\n' +
      '      "cpu": [\r\n' +
      '        "arm64"\r\n' +
      '      ],\r\n' +
      '      "license": "LGPL-3.0-or-later",\r\n' +
      '      "optional": true,\r\n' +
      '      "os": [\r\n' +
      '        "linux"\r\n' +
      '      ],\r\n' +
      '      "funding": {\r\n' +
      '        "url": "https://opencollective.com/libvips"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@img/sharp-libvips-linuxmusl-x64": {\r\n' +
      '      "version": "1.1.0",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.1.0.tgz",\r\n' +
      '      "integrity": "sha512-wK7SBdwrAiycjXdkPnGCPLjYb9lD4l6Ze2gSdAGVZrEL05AOUJESWU2lhlC+Ffn5/G+VKuSm6zzbQSzFX/P65A==",\r\n' +
      '      "cpu": [\r\n' +
      '        "x64"\r\n' +
      '      ],\r\n' +
      '      "license": "LGPL-3.0-or-later",\r\n' +
      '      "optional": true,\r\n' +
      '      "os": [\r\n' +
      '        "linux"\r\n' +
      '      ],\r\n' +
      '      "funding": {\r\n' +
      '        "url": "https://opencollective.com/libvips"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@img/sharp-linux-arm": {\r\n' +
      '      "version": "0.34.2",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.34.2.tgz",\r\n' +
      '      "integrity": "sha512-0DZzkvuEOqQUP9mo2kjjKNok5AmnOr1jB2XYjkaoNRwpAYMDzRmAqUIa1nRi58S2WswqSfPOWLNOr0FDT3H5RQ==",\r\n' +
      '      "cpu": [\r\n' +
      '        "arm"\r\n' +
      '      ],\r\n' +
      '      "license": "Apache-2.0",\r\n' +
      '      "optional": true,\r\n' +
      '      "os": [\r\n' +
      '        "linux"\r\n' +
      '      ],\r\n' +
      '      "engines": {\r\n' +
      '        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"\r\n' +
      '      },\r\n' +
      '      "funding": {\r\n' +
      '        "url": "https://opencollective.com/libvips"\r\n' +
      '      },\r\n' +
      '      "optionalDependencies": {\r\n' +
      '        "@img/sharp-libvips-linux-arm": "1.1.0"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@img/sharp-linux-arm64": {\r\n' +
      '      "version": "0.34.2",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.34.2.tgz",\r\n' +
      '      "integrity": "sha512-D8n8wgWmPDakc83LORcfJepdOSN6MvWNzzz2ux0MnIbOqdieRZwVYY32zxVx+IFUT8er5KPcyU3XXsn+GzG/0Q==",\r\n' +
      '      "cpu": [\r\n' +
      '        "arm64"\r\n' +
      '      ],\r\n' +
      '      "license": "Apache-2.0",\r\n' +
      '      "optional": true,\r\n' +
      '      "os": [\r\n' +
      '        "linux"\r\n' +
      '      ],\r\n' +
      '      "engines": {\r\n' +
      '        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"\r\n' +
      '      },\r\n' +
      '      "funding": {\r\n' +
      '        "url": "https://opencollective.com/libvips"\r\n' +
      '      },\r\n' +
      '      "optionalDependencies": {\r\n' +
      '        "@img/sharp-libvips-linux-arm64": "1.1.0"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@img/sharp-linux-s390x": {\r\n' +
      '      "version": "0.34.2",\r\n' +
      '      "resolved'
  },
  {
    fileName: 'package.json',
    fileContent: '{\r\n' +
      '  "name": "dashboard",\r\n' +
      '  "version": "0.1.0",\r\n' +
      '  "private": true,\r\n' +
      '  "scripts": {\r\n' +
      '    "dev": "next dev --turbopack",\r\n' +
      '    "build": "next build",\r\n' +
      '    "start": "next start",\r\n' +
      '    "lint": "next lint"\r\n' +
      '  },\r\n' +
      '  "dependencies": {\r\n' +
      '    "@types/axios": "^0.9.36",\r\n' +
      '    "@types/recoil": "^0.0.1",\r\n' +
      '    "axios": "^1.9.0",\r\n' +
      '    "lucide-react": "^0.511.0",\r\n' +
      '    "next": "15.3.3",\r\n' +
      '    "react": "^19.0.0",\r\n' +
      '    "react-dom": "^19.0.0",\r\n' +
      '    "recoil": "^0.7.7"\r\n' +
      '  },\r\n' +
      '  "devDependencies": {\r\n' +
      '    "@tailwindcss/postcss": "^4",\r\n' +
      '    "@types/node": "^20",\r\n' +
      '    "@types/react": "^19",\r\n' +
      '    "@types/react-dom": "^19",\r\n' +
      '    "tailwindcss": "^4",\r\n' +
      '    "typescript": "^5"\r\n' +
      '  }\r\n' +
      '}\r\n'
  },
  {
    fileName: 'README.md',
    fileContent: 'This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).\r\n' +
      '\r\n' +
      '## Getting Started\r\n' +
      '\r\n' +
      'First, run the development server:\r\n' +
      '\r\n' +
      '```bash\r\n' +
      'npm run dev\r\n' +
      '# or\r\n' +
      'yarn dev\r\n' +
      '# or\r\n' +
      'pnpm dev\r\n' +
      '# or\r\n' +
      'bun dev\r\n' +
      '```\r\n' +
      '\r\n' +
      'Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.\r\n' +
      '\r\n' +
      'You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.\r\n' +
      '\r\n' +
      'This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.\r\n' +
      '\r\n' +
      '## Learn More\r\n' +
      '\r\n' +
      'To learn more about Next.js, take a look at the following resources:\r\n' +
      '\r\n' +
      '- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.\r\n' +
      '- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.\r\n' +
      '\r\n' +
      'You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!\r\n' +
      '\r\n' +
      '## Deploy on Vercel\r\n' +
      '\r\n' +
      'The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.\r\n' +
      '\r\n' +
      'Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.\r\n'
  },
  {
    fileName: 'tsconfig.json',
    fileContent: '{\r\n' +
      '  "compilerOptions": {\r\n' +
      '    "target": "ES2017",\r\n' +
      '    "lib": ["dom", "dom.iterable", "esnext"],\r\n' +
      '    "allowJs": true,\r\n' +
      '    "skipLibCheck": true,\r\n' +
      '    "strict": true,\r\n' +
      '    "noEmit": true,\r\n' +
      '    "esModuleInterop": true,\r\n' +
      '    "module": "esnext",\r\n' +
      '    "moduleResolution": "bundler",\r\n' +
      '    "resolveJsonModule": true,\r\n' +
      '    "isolatedModules": true,\r\n' +
      '    "jsx": "preserve",\r\n' +
      '    "incremental": true,\r\n' +
      '    "plugins": [\r\n' +
      '      {\r\n' +
      '        "name": "next"\r\n' +
      '      }\r\n' +
      '    ],\r\n' +
      '    "paths": {\r\n' +
      '      "@/*": ["./*"]\r\n' +
      '    }\r\n' +
      '  },\r\n' +
      '  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],\r\n' +
      '  "exclude": ["node_modules"]\r\n' +
      '}\r\n'
  },
  {
    fileName: 'app\\globals.css',
    fileContent: '@import "tailwindcss";\r\n' +
      '\r\n' +
      ':root {\r\n' +
      '    --background: 0 0% 100%;\r\n' +
      '    --foreground: 222.2 84% 4.9%;\r\n' +
      '    --card: 0 0% 100%;\r\n' +
      '    --card-foreground: 222.2 84% 4.9%;\r\n' +
      '    --popover: 0 0% 100%;\r\n' +
      '    --popover-foreground: 222.2 84% 4.9%;\r\n' +
      '    --primary: 221.2 83.2% 53.3%;\r\n' +
      '    --primary-foreground: 210 40% 98%;\r\n' +
      '    --secondary: 210 40% 96%;\r\n' +
      '    --secondary-foreground: 222.2 84% 4.9%;\r\n' +
      '    --muted: 210 40% 96%;\r\n' +
      '    --muted-foreground: 215.4 16.3% 46.9%;\r\n' +
      '    --accent: 210 40% 96%;\r\n' +
      '    --accent-foreground: 222.2 84% 4.9%;\r\n' +
      '    --destructive: 0 84.2% 60.2%;\r\n' +
      '    --destructive-foreground: 210 40% 98%;\r\n' +
      '    --border: 214.3 31.8% 91.4%;\r\n' +
      '    --input: 214.3 31.8% 91.4%;\r\n' +
      '    --ring: 221.2 83.2% 53.3%;\r\n' +
      '    --radius: 0.5rem;\r\n' +
      '}\r\n' +
      '\r\n' +
      '.dark {\r\n' +
      '    --background: 222.2 84% 4.9%;\r\n' +
      '    --foreground: 210 40% 98%;\r\n' +
      '    --card: 222.2 84% 4.9%;\r\n' +
      '    --card-foreground: 210 40% 98%;\r\n' +
      '    --popover: 222.2 84% 4.9%;\r\n' +
      '    --popover-foreground: 210 40% 98%;\r\n' +
      '    --primary: 217.2 91.2% 59.8%;\r\n' +
      '    --primary-foreground: 222.2 84% 4.9%;\r\n' +
      '    --secondary: 217.2 32.6% 17.5%;\r\n' +
      '    --secondary-foreground: 210 40% 98%;\r\n' +
      '    --muted: 217.2 32.6% 17.5%;\r\n' +
      '    --muted-foreground: 215 20.2% 65.1%;\r\n' +
      '    --accent: 217.2 32.6% 17.5%;\r\n' +
      '    --accent-foreground: 210 40% 98%;\r\n' +
      '    --destructive: 0 62.8% 30.6%;\r\n' +
      '    --destructive-foreground: 210 40% 98%;\r\n' +
      '    --border: 217.2 32.6% 17.5%;\r\n' +
      '    --input: 217.2 32.6% 17.5%;\r\n' +
      '    --ring: 224.3 76.3% 94.1%;\r\n' +
      '}\r\n' +
      '\r\n' +
      '@theme inline {\r\n' +
      '  --color-background: var(--background);\r\n' +
      '  --color-foreground: var(--foreground);\r\n' +
      '  --font-sans: var(--font-geist-sans);\r\n' +
      '  --font-mono: var(--font-geist-mono);\r\n' +
      '}\r\n' +
      '\r\n' +
      '@media (prefers-color-scheme: dark) {\r\n' +
      '  :root {\r\n' +
      '    --background: #0a0a0a;\r\n' +
      '    --foreground: #ededed;\r\n' +
      '  }\r\n' +
      '}\r\n' +
      '\r\n' +
      'body {\r\n' +
      '  background: var(--background);\r\n' +
      '  color: var(--foreground);\r\n' +
      '  font-family: Arial, Helvetica, sans-serif;\r\n' +
      '}\r\n'
  }
]