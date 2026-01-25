export const TESTING_SAMPLE_OUTPUT_FILETREE = 
[
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
    fileName: 'components\\Header.tsx',
    fileContent: "import Link from 'next/link'\r\n" +
      "import React from 'react'\r\n" +
      '\r\n' +
      'const Header = () => {\r\n' +
      '  return (\r\n' +
      "    <header className='container mx-auto py-4 z-10 border-b-[1px] border-gray-400 font-serif'>\r\n" +
      "      <div className='flex justify-between items-center mx-32'>\r\n" +
      `        <button className='text-3xl font-bold'> <Link href={"/"}>Admin Dashboard</Link></button>\r\n` +
      '        <div>\r\n' +
      "          <button className='cursor-pointer border-[1px] border-black bg-black text-white font-mono px-3 py-2 rounded-lg'> Toggle </button>\r\n" +
      '        </div>\r\n' +
      '      </div>\r\n' +
      '    </header>\r\n' +
      '  )\r\n' +
      '}\r\n' +
      '\r\n' +
      'export default Header\r\n'
  },
  { fileName: 'components\\HomePage.tsx', fileContent: '' },
  {
    fileName: 'components\\Skeleton.tsx',
    fileContent: '\r\n' +
      "import React from 'react';\r\n" +
      '\r\n' +
      'const Skeleton= ({ \r\n' +
      '  rows = 5, \r\n' +
      '  columns = 4, \r\n' +
      '  showHeader = true,\r\n' +
      '  className = "" \r\n' +
      '}) => {\r\n' +
      '  const SkeletonBar = ({ width = "100%" }) => (\r\n' +
      '    <div \r\n' +
      '      className={`h-4 bg-gray-300 rounded animate-pulse`}\r\n' +
      '      style={{ width }}\r\n' +
      '    />\r\n' +
      '  );\r\n' +
      '\r\n' +
      '  return (\r\n' +
      '    <>\r\n' +
      "        <div className='container mx-auto'>\r\n" +
      "        <div className='text-xl font-semibold pl-10 mt-22 w-3/4 mx-auto'>DashBoard </div>\r\n" +
      '            <div className={`w-3/4 mx-auto overflow-hidden mt-6 rounded-lg border border-gray-200 ${className}`}>\r\n' +
      '        <table className="w-full">\r\n' +
      '            {showHeader && (\r\n' +
      '            <thead className="bg-gray-50">\r\n' +
      '                <tr>\r\n' +
      '                {Array.from({ length: columns }).map((_, colIndex) => (\r\n' +
      '                    <th key={colIndex} className="px-4 py-4">\r\n' +
      '                        {colIndex === 0 && <p>Name</p>}\r\n' +
      '                        {colIndex === 1 && <p>Email</p>}\r\n' +
      '                        {colIndex === 2 && <p>Address</p>}\r\n' +
      '                        {colIndex === 3 && <p>Phone</p>}\r\n' +
      '                    </th>\r\n' +
      '                ))}\r\n' +
      '                </tr>\r\n' +
      '            </thead>\r\n' +
      '            )}\r\n' +
      '            <tbody className="divide-y divide-gray-200">\r\n' +
      '            {Array.from({ length: rows }).map((_, rowIndex) => (\r\n' +
      '                <tr key={rowIndex} className="hover:bg-gray-50">\r\n' +
      '                {Array.from({ length: columns }).map((_, colIndex) => (\r\n' +
      '                    <td key={colIndex} className="px-6 py-4">\r\n' +
      '                    <SkeletonBar width={`${40 + Math.random() * 50}%`} />\r\n' +
      '                    </td>\r\n' +
      '                ))}\r\n' +
      '                </tr>\r\n' +
      '            ))}\r\n' +
      '            </tbody>\r\n' +
      '        </table>\r\n' +
      '        </div>\r\n' +
      '        </div>\r\n' +
      '    </>\r\n' +
      '  );\r\n' +
      '};\r\n' +
      '\r\n' +
      'export default Skeleton;'
  },
  {
    fileName: 'components\\UserAddForm.tsx',
    fileContent: '"use client"\r\n' +
      'import { useContext, useState } from "react";\r\n' +
      "import { ArrowLeftFromLine, ArrowLeftFromLineIcon, Check, MapPinHouseIcon, PackageCheckIcon, User } from 'lucide-react';\r\n" +
      'import { useRouter } from "next/navigation";\r\n' +
      'import { UserContext } from "@/app/dashboard/layout";\r\n' +
      '\r\n' +
      'const UserAddForm = () =>{\r\n' +
      '    \r\n' +
      '    const {userListContext, setUserListContext} = useContext(UserContext);\r\n' +
      '    const router = useRouter()\r\n' +
      '    const [step , setStep] = useState(1);\r\n' +
      '    const [formData, setFormData] = useState<any>({\r\n' +
      '        name : "",\r\n' +
      '        email : "",\r\n' +
      '        city : "",\r\n' +
      '        zip : "",\r\n' +
      '        street : ""\r\n' +
      '    })\r\n' +
      '    const [error, setError] = useState<any>({\r\n' +
      '        name : false,\r\n' +
      '        email : false,\r\n' +
      '        street : false,\r\n' +
      '        city : false,\r\n' +
      '        zip : false\r\n' +
      '    })\r\n' +
      '    const [ submitted, setSubmitted ] = useState<boolean>(false);\r\n' +
      '    const [stepOnePassed, setStepOnePassed] = useState<boolean>(false)\r\n' +
      '    const handleInputChange = (e : any) => {\r\n' +
      '        setFormData((prev : any)  => ({\r\n' +
      '            ...prev, \r\n' +
      '            [e.target.name] : e.target.value\r\n' +
      '        }))\r\n' +
      '        setError((prev : any)=>({\r\n' +
      '            ...prev , \r\n' +
      '            [e.target.name] : false\r\n' +
      '        }))\r\n' +
      '    }\r\n' +
      '    \r\n' +
      '    function errorHandleFormOne(){\r\n' +
      '        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\r\n' +
      '        let hasError = false;\r\n' +
      "        if(formData.name === ''){\r\n" +
      '            setError((prev : any) =>({\r\n' +
      '                ...prev , \r\n' +
      '                name : true\r\n' +
      '            }))\r\n' +
      '            hasError = true;\r\n' +
      '        }\r\n' +
      "        if(formData.email === '' || !emailRegex.test(formData.email)){\r\n" +
      '            setError((prev : any) =>({\r\n' +
      '                ...prev , \r\n' +
      '                email : true\r\n' +
      '            }))\r\n' +
      '            hasError = true;\r\n' +
      '        }\r\n' +
      '        return hasError;\r\n' +
      '    }\r\n' +
      '    \r\n' +
      '    function handleStepOneNext(e : any){\r\n' +
      '        e.preventDefault();\r\n' +
      '        if(!errorHandleFormOne()){\r\n' +
      '            if(step < 3) {\r\n' +
      '                setStep(step+1)\r\n' +
      '                setStepOnePassed(true)\r\n' +
      '            } \r\n' +
      '        }\r\n' +
      '    }\r\n' +
      '    function errorHandleFormTwo(){\r\n' +
      '        let hasError = false;\r\n' +
      "        if(formData.street === ''){\r\n" +
      '            setError((prev : any) =>({\r\n' +
      '                ...prev , \r\n' +
      '                name : true\r\n' +
      '            }))\r\n' +
      '            hasError = true;\r\n' +
      '        }\r\n' +
      "        if(formData.city === ''){\r\n" +
      '            setError((prev : any) =>({\r\n' +
      '                ...prev , \r\n' +
      '                email : true\r\n' +
      '            }))\r\n' +
      '            hasError = true;\r\n' +
      '        }\r\n' +
      "        if(formData.zip === ''){\r\n" +
      '            setError((prev : any) =>({\r\n' +
      '                ...prev , \r\n' +
      '                zip : true\r\n' +
      '            }))\r\n' +
      '            hasError = true;\r\n' +
      '        }\r\n' +
      '        return hasError;\r\n' +
      '    }\r\n' +
      '    \r\n' +
      '    function handleStepTwoNext(e : any){\r\n' +
      '        e.preventDefault()\r\n' +
      '        if(!errorHandleFormTwo()){\r\n' +
      '            if(step < 3) setStep(step+1)\r\n' +
      '        }\r\n' +
      '    }\r\n' +
      '\r\n' +
      '    function handleSubmitForm(e : any){\r\n' +
      '        e.preventDefault()\r\n' +
      '        setSubmitted(true)\r\n' +
      '        // use recoil to add the new user to the userList\r\n' +
      '        \r\n' +
      '        const newUser = {\r\n' +
      '            id : Math.ceil(Math.random()*(10000)),\r\n' +
      '            name : formData.name,\r\n' +
      '            email : formData.email,\r\n' +
      '            city: formData.city,\r\n' +
      '            phone : "XXX-XXX-XXXX"\r\n' +
      '        }\r\n' +
      '        setUserListContext((prev : any)=>([ newUser , ...prev ]))\r\n' +
      '        alert(`${formData.name} added succesfully`)\r\n' +
      '        router.push("/dashboard")\r\n' +
      '    }\r\n' +
      '\r\n' +
      '    function handleCancelForm(){\r\n' +
      '        setFormData((prev : any)=>({\r\n' +
      '            ...prev ,\r\n' +
      "            name : '',\r\n" +
      "            email : '',\r\n" +
      "            street : '',\r\n" +
      "            city : '',\r\n" +
      "            zip : '',\r\n" +
      '        }))\r\n' +
      '        setStep(1)\r\n' +
      '        setSubmitted(false)\r\n' +
      '        setStepOnePassed(false)\r\n' +
      '    }\r\n' +
      '    return(\r\n' +
      '        <div className="w-full flex flex-col justify-center gap-1 items-center mt-20 font-serif">\r\n' +
      '            <div className="flex flex-start w-3/4">\r\n' +
      '                <button onClick={()=>router.push("/dashboard")}><div className="flex justify-center items-center gap-4 cursor-pointer text-lg text-gray-100 rounded-lg bg-black px-4 py-2 font-serif ">\r\n' +
      '                <ArrowLeftFromLineIcon />    \r\n' +
      '                Go To Dashboard\r\n' +
      '            </div></button>\r\n' +
      '            </div>\r\n' +
      '            <div className="flex justify-around items-center mb-4 w-1/3">\r\n' +
      '                {/* for step circles */}\r\n' +
      '                {(step === 2 || stepOnePassed) ? (\r\n' +
      '                    <div className="h-12 w-12 bg-black rounded-[50%] border-[2px] border-black flex justify-center items-center text-lg text-white font-bold"><Check/></div>\r\n' +
      '                ) : (\r\n' +
      '                    <div className="h-12 w-12 bg-white rounded-[50%] border-[2px] border-gray-500 flex justify-center items-center text-lg text-gray-500 font-bold"><User /></div>\r\n' +
      '                )}\r\n' +
      '\r\n' +
      '                {step === 3 ? (\r\n' +
      '                    <div className="h-12 w-12 bg-black rounded-[50%] border-[2px] border-black flex justify-center items-center text-lg text-white font-bold"><Check/></div>\r\n' +
      '                ) : (\r\n' +
      '                    <div className="h-12 w-12 bg-white rounded-[50%] border-[2px] border-gray-500 flex justify-center items-center text-lg text-gray-500 font-bold"><MapPinHouseIcon /></div>\r\n' +
      '                )}\r\n' +
      '\r\n' +
      '                {submitted  ? (\r\n' +
      '                     <div className="h-12 w-12 bg-black rounded-[50%] border-[2px] border-black flex justify-center items-center text-lg text-white font-bold"><Check/></div>\r\n' +
      '                ):(\r\n' +
      '                    <div className="h-12 w-12 bg-white rounded-[50%] border-[2px] border-gray-500 flex justify-center items-center text-lg text-gray-500 font-bold"><PackageCheckIcon /></div>\r\n' +
      '                )}\r\n' +
      '            </div>\r\n' +
      '\r\n' +
      '            <div className="bg-white border-[2px] border-gray-200 w-1/2 rounded-lg z-10 font-serif">\r\n' +
      '                {/* for step forms */}\r\n' +
      '\r\n' +
      '                {step === 1 && (\r\n' +
      '                   <>\r\n' +
      '                    <div className="flex justify-center py-4 text-xl font-semibold">\r\n' +
      '                        <p className="text-2xl font-serif text-gray-700">Step 1 : Basic Info</p>\r\n' +
      '                    </div>\r\n' +
      '                    \r\n' +
      '                    <div className="py-6 flex flex-col gap-6">\r\n' +
      '                        <div className="flex flex-col gap-1 pl-10">\r\n' +
      '                            <p className="text-lg ">Enter Name</p>\r\n' +
      '\r\n' +
      '                            <input type="text" className="w-1/2 py-2 px-3 border-[1px] border-black rounded-lg text-md text-gray-800" name = "name" placeholder="Enter your name....." onChange={handleInputChange} required/>\r\n' +
      '                            {error.name && <p className="text-red-600">Name must not be empty.</p>}\r\n' +
      '                        </div>\r\n' +
      '                        <div className="flex flex-col gap-1 pl-10">\r\n' +
      '                            <p className="text-lg ">Enter Email</p>\r\n' +
      '                            <input type="email" className="w-1/2 py-2 px-3 border-[1px] border-black rounded-lg text-md text-gray-800"\r\n' +
      '                            name="email"\r\n' +
      '                            placeholder="Enter your email...."\r\n' +
      '                            onChange={handleInputChange} required/>\r\n' +
      '                            {error.email && <p className="text-red-600">Email must be a valid email.</p>}\r\n' +
      '                        </div>\r\n' +
      '                    </div>\r\n' +
      '\r\n' +
      '                    <div className="flex flex-row-reverse pb-6 pr-10 ">\r\n' +
      '                        <button className="border-[1px] bg-black text-white text-lg  px-4 py-2 rounded-lg cursor-pointer" onClick={handleStepOneNext}> Next </button>\r\n' +
      '                    </div>\r\n' +
      '                   </>\r\n' +
      '                )}\r\n' +
      '\r\n' +
      '                {step === 2 && (\r\n' +
      '                   <>\r\n' +
      '                    <div className="flex justify-center py-4 text-xl font-semibold">\r\n' +
      '                        <p className="text-2xl font-serif text-gray-700">Step 2 : Address Info </p>\r\n' +
      '                    </div>\r\n' +
      '                    \r\n' +
      '                    <div className="py-6 flex flex-col gap-6">\r\n' +
      '                        <div className="flex flex-col gap-1 pl-10">\r\n' +
      '                            <p className="text-lg ">Enter Street</p>\r\n' +
      '\r\n' +
      '                            <input type="text" className="w-1/2 py-2 px-3 border-[1px] border-black rounded-lg text-md text-gray-800" name = "street" placeholder="Enter your street....." onChange={handleInputChange} required/>\r\n' +
      '                            {error.street && <p className="text-red-600">Street must not be empty.</p>}\r\n' +
      '\r\n' +
      '\r\n' +
      '                        </div>\r\n' +
      '                        <div className="flex flex-col gap-1 pl-10">\r\n' +
      '                            <p className="text-lg ">Enter City</p>\r\n' +
      '\r\n' +
      '                            <input type="text" className="w-1/2 py-2 px-3 border-[1px] border-black rounded-lg text-md text-gray-800"\r\n' +
      '                            name="city"\r\n' +
      '                            placeholder="Enter your city...."\r\n' +
      '                            onChange={handleInputChange} required/>\r\n' +
      '                            {error.city && <p className="text-red-600">City must not be empty.</p>}\r\n' +
      '                        </div>\r\n' +
      '                        <div className="flex flex-col gap-1 pl-10">\r\n' +
      '                            <p className="text-lg ">Enter Zip Code</p>\r\n' +
      '\r\n' +
      '                            <input type="number" className="w-1/2 py-2 px-3 border-[1px] border-black rounded-lg text-md text-gray-800"\r\n' +
      '                            name="zip"\r\n' +
      '                            placeholder="Enter your zip code...."\r\n' +
      '                            onChange={handleInputChange} required/>\r\n' +
      '                            {error.zip && <p className="text-red-600">Enter a valid Zip code.</p>}\r\n' +
      '                        </div>\r\n' +
      '                    </div>\r\n' +
      '\r\n' +
      '                    <div className="flex flex-row-reverse pb-6 pr-10 ">\r\n' +
      '                        <button className="border-[1px] bg-black text-white text-md  px-3 py-2 rounded-lg cursor-pointer" onClick={handleStepTwoNext}> Next </button>\r\n' +
      '              '
  },
  {
    fileName: 'components\\UserDisplay.tsx',
    fileContent: '"use client"\r\n' +
      '\r\n' +
      'import axios from "axios"\r\n' +
      'import { useRouter } from "next/navigation";\r\n' +
      'import { useContext, useEffect, useState } from "react"\r\n' +
      'import Skeleton from "./Skeleton";\r\n' +
      'import { UserContext } from "@/app/dashboard/layout";\r\n' +
      '\r\n' +
      'export default function UserDisplay(){\r\n' +
      '\r\n' +
      '    const [userList, setUserList] = useState<any>([])\r\n' +
      '    const [searchWord, setSearchWord] = useState<string>("");\r\n' +
      '    const [currentPage, setCurrentPage] = useState(1);\r\n' +
      '    const [ loading , setLoading ] = useState<boolean>(false)\r\n' +
      '    const [filteredUserList, setFilteredUserList] = useState<any>([]);\r\n' +
      '\r\n' +
      '    const {userListContext , setUserListContext}  = useContext(UserContext)\r\n' +
      '\r\n' +
      '    const router = useRouter();\r\n' +
      '\r\n' +
      '    useEffect(()=>{\r\n' +
      '        async function fetchUsers(){\r\n' +
      '            setLoading(true)\r\n' +
      '            const res = await axios.get("https://jsonplaceholder.typicode.com/users")\r\n' +
      '            const data : any = await res.data;\r\n' +
      '\r\n' +
      '            const users = data.map((user : any)=>({\r\n' +
      '                id : user.id,\r\n' +
      '                name : user.name,\r\n' +
      '                email : user.email,\r\n' +
      '                phone : user.phone,\r\n' +
      '                city : user.address.city\r\n' +
      '            }))\r\n' +
      '            setUserList(users);\r\n' +
      '            setLoading(false);\r\n' +
      '        }\r\n' +
      '        // fetchUsers() deleted this , and added userListContext as dependency\r\n' +
      '        setUserList(userListContext)\r\n' +
      '    },[userListContext])\r\n' +
      '\r\n' +
      '    useEffect(() => {\r\n' +
      '        setFilteredUserList(\r\n' +
      '            userList.filter((user: any) =>\r\n' +
      '                user.name.toLowerCase().includes(searchWord.toLowerCase()) ||\r\n' +
      '                user.city.toLowerCase().includes(searchWord.toLowerCase())\r\n' +
      '            )\r\n' +
      '        );\r\n' +
      '        setCurrentPage(1)\r\n' +
      '    }, [userList, searchWord]);\r\n' +
      '    \r\n' +
      '    // Pagination\r\n' +
      '    const usersPerPage = 5;\r\n' +
      '    const totalPages = Math.ceil(userList.length / usersPerPage)\r\n' +
      '    let totalPagesData = [];\r\n' +
      '\r\n' +
      '    for(let i =0; i<totalPages ; i++){\r\n' +
      '        totalPagesData.push({\r\n' +
      '            pageNumber : i+1\r\n' +
      '        })\r\n' +
      '    }\r\n' +
      '\r\n' +
      '    const startFrom = (currentPage-1) * usersPerPage;\r\n' +
      '    const endOn = startFrom + usersPerPage;\r\n' +
      '    const paginatedUsers = filteredUserList.slice(startFrom, endOn)\r\n' +
      '\r\n' +
      '\r\n' +
      '    return(\r\n' +
      '        <div className="min-h-calc[(100vh - 4rem)] max-w-screen mt-2">\r\n' +
      '            \r\n' +
      '            <div className="w-full px-8 py-6 flex flex-col gap-3 pl-20">\r\n' +
      '\r\n' +
      '                <div className="flex justify-between w-full items-center">\r\n' +
      '                    <h2 className="font-normal text-3xl">Dashboard</h2>\r\n' +
      '                    <button onClick={()=>router.push("/dashboard/add-user")}>\r\n' +
      '                        <div className="border-[1px] bg-black text-white text-lg px-3 py-2 cursor-pointer rounded-lg"> Add User </div>\r\n' +
      '                    </button>\r\n' +
      '                </div>\r\n' +
      '  \r\n' +
      '                <input type="text" onChange={(e)=>setSearchWord(e.target.value)} placeholder="Search for name, city..." className="border-[1px] py-2 border-black rounded-lg w-1/3 px-6"/>\r\n' +
      '            </div>\r\n' +
      '\r\n' +
      '            {loading && <Skeleton rows={8} columns={4} showHeader={true}/> }\r\n' +
      '            {}\r\n' +
      '            <div className="mt-6 ">\r\n' +
      '                <div className="w-full px-24 pb-2 text-md">\r\n' +
      '                    Showing {filteredUserList.length === 0 ? 0 : startFrom + 1} to {Math.min(endOn, filteredUserList.length)} users from total {filteredUserList.length} filtered users.\r\n' +
      '                </div>\r\n' +
      '                <div className="mx-20  px-10 py-6 rounded-lg z-10 border-[1px] border-gray-500">\r\n' +
      '                <table className="w-full">\r\n' +
      '                    <thead className="bg-gray-50 text-left text-sm uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">\r\n' +
      '                        <tr>\r\n' +
      '                            <th className="px-16 py-3">Name</th>\r\n' +
      '                            <th className="px-16 py-3">Email</th>\r\n' +
      '                            <th className="px-16 py-3">City</th>\r\n' +
      '                            <th className="px-16 py-3">Phone</th>\r\n' +
      '                        </tr>\r\n' +
      '                    </thead>\r\n' +
      '                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">  \r\n' +
      '                        {paginatedUsers.map((user : any)=>(\r\n' +
      '                            <tr key={user.id} className="bg-white dark:bg-gray-800">\r\n' +
      '                                <td className="px-6 py-4">\r\n' +
      '                                <div className="h-4 w-[150px] rounded ">{user.name}</div>\r\n' +
      '                                </td>\r\n' +
      '                                <td className="px-6 py-4">\r\n' +
      '                                <div className="h-4 w-[200px] rounded">{user.email}</div>\r\n' +
      '                                </td>\r\n' +
      '                                <td className="px-6 py-4">\r\n' +
      '                                <div className="h-4 w-[120px] rounded">{user.city}</div>\r\n' +
      '                                </td>\r\n' +
      '                                <td className="px-6 py-4">\r\n' +
      '                                <div className="h-4 w-[200px] rounded ">{user.phone}</div>\r\n' +
      '                                </td>\r\n' +
      '                            </tr>\r\n' +
      '                        ))}\r\n' +
      '                    </tbody>\r\n' +
      '                </table>\r\n' +
      '            </div>\r\n' +
      '                        \r\n' +
      '            <div className="flex justify-center w-full gap-2 items-center pt-6">\r\n' +
      '                {totalPagesData.map((data)=>(\r\n' +
      '                    <button key={data.pageNumber} onClick={(e)=>setCurrentPage(data.pageNumber)}>\r\n' +
      '                        <div className={` border-[1px] rounded-lg border-black flex justify-center items-center  cursor-pointer ${data.pageNumber === currentPage ? "h-10 w-10 text-xl bg-black text-white" : "h-8 w-8 text-md bg-white text-black"}`}>\r\n' +
      '                            {data.pageNumber} \r\n' +
      '                        </div>\r\n' +
      '                    </button>\r\n' +
      '                ))}\r\n' +
      '            </div>\r\n' +
      '        </div>\r\n' +
      '        </div>\r\n' +
      '    )\r\n' +
      '}'
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
  },
  {
    fileName: 'app\\layout.tsx',
    fileContent: 'import type { Metadata } from "next";\r\n' +
      'import { Geist, Geist_Mono } from "next/font/google";\r\n' +
      'import "./globals.css";\r\n' +
      '\r\n' +
      'const geistSans = Geist({\r\n' +
      '  variable: "--font-geist-sans",\r\n' +
      '  subsets: ["latin"],\r\n' +
      '});\r\n' +
      '\r\n' +
      'const geistMono = Geist_Mono({\r\n' +
      '  variable: "--font-geist-mono",\r\n' +
      '  subsets: ["latin"],\r\n' +
      '});\r\n' +
      '\r\n' +
      'export const metadata: Metadata = {\r\n' +
      '  title: "Create Next App",\r\n' +
      '  description: "Generated by create next app",\r\n' +
      '};\r\n' +
      '\r\n' +
      'export default function RootLayout({\r\n' +
      '  children,\r\n' +
      '}: Readonly<{\r\n' +
      '  children: React.ReactNode;\r\n' +
      '}>) {\r\n' +
      '  return (\r\n' +
      '    <html lang="en">\r\n' +
      '      <body\r\n' +
      '        className={`${geistSans.variable} ${geistMono.variable} antialiased`}\r\n' +
      '      >\r\n' +
      '        {children}\r\n' +
      '      </body>\r\n' +
      '    </html>\r\n' +
      '  );\r\n' +
      '}\r\n'
  },
  {
    fileName: 'app\\page.tsx',
    fileContent: '"use client"\r\n' +
      'import Header from "@/components/Header";\r\n' +
      'import Skeleton from "@/components/Skeleton";\r\n' +
      'import {  useRouter } from "next/navigation"\r\n' +
      'import { useEffect } from "react";\r\n' +
      '\r\n' +
      'export default function Home() {\r\n' +
      '  const router = useRouter();\r\n' +
      '  \r\n' +
      '  useEffect(()=>{\r\n' +
      '    router.push("/dashboard")\r\n' +
      '  })\r\n' +
      '  return (\r\n' +
      '    <>\r\n' +
      '      <Header/>\r\n' +
      '      <Skeleton rows={8} columns={4} showHeader={true} />  \r\n' +
      '    </>\r\n' +
      '  )\r\n' +
      '}\r\n'
  },
  {
    fileName: 'app\\dashboard\\layout.tsx',
    fileContent: '"use client"\r\n' +
      'import { createContext, useEffect, useState } from "react";\r\n' +
      '\r\n' +
      '\r\n' +
      'export const UserContext = createContext<any>({\r\n' +
      '    userListContext: [],\r\n' +
      '    setUserListContext: () => {}\r\n' +
      '});\r\n' +
      '\r\n' +
      'export default function DashboardLayout({ children }: { children: React.ReactNode }) {\r\n' +
      '    const [userListContext, setUserListContext] = useState<any>([]);\r\n' +
      '\r\n' +
      '    useEffect(() => {\r\n' +
      '        // On mount, check localStorage for userList\r\n' +
      '        const localList = localStorage.getItem("userList");\r\n' +
      '        if (localList !== null && JSON.parse(localList).length !==0) {\r\n' +
      '            setUserListContext(JSON.parse(localList));\r\n' +
      '        } else {\r\n' +
      '            async function getUsers() {\r\n' +
      '                const res = await fetch("https://jsonplaceholder.typicode.com/users");\r\n' +
      '                const data = await res.json();\r\n' +
      '                const users = data.map((user: any) => ({\r\n' +
      '                    id: user.id,\r\n' +
      '                    name: user.name,\r\n' +
      '                    email: user.email,\r\n' +
      '                    phone: user.phone,\r\n' +
      '                    city: user.address.city\r\n' +
      '                }));\r\n' +
      '                setUserListContext(users);\r\n' +
      '                localStorage.setItem("userList", JSON.stringify(users));\r\n' +
      '            }\r\n' +
      '            getUsers();\r\n' +
      '        }\r\n' +
      '    }, []);\r\n' +
      '\r\n' +
      '    useEffect(() => {\r\n' +
      '        // Whenever userListContext changes, update localStorage\r\n' +
      '        localStorage.setItem("userList", JSON.stringify(userListContext));\r\n' +
      '    }, [userListContext]);\r\n' +
      '\r\n' +
      '    return (\r\n' +
      '        <UserContext.Provider value={{ userListContext, setUserListContext }}>\r\n' +
      '            {children}\r\n' +
      '        </UserContext.Provider>\r\n' +
      '    );\r\n' +
      '}\r\n'
  },
  {
    fileName: 'app\\dashboard\\page.tsx',
    fileContent: '"use client"\r\n' +
      'import Header from "@/components/Header";\r\n' +
      'import UserDisplay from "@/components/UserDisplay";\r\n' +
      '\r\n' +
      'export default function DashBoard(){\r\n' +
      '\r\n' +
      '    return(\r\n' +
      '        <>\r\n' +
      '            <Header/>\r\n' +
      '            <div className="container mx-auto w-full min-h-calc[(100vh - 4rem)] font-ser">\r\n' +
      '                    <UserDisplay/>\r\n' +
      '            </div>\r\n' +
      '        </>\r\n' +
      '    )\r\n' +
      '}'
  },
  {
    fileName: 'app\\dashboard\\add-user\\page.tsx',
    fileContent: '"use client"\r\n' +
      'import Header from "@/components/Header";\r\n' +
      'import UserAddForm from "@/components/UserAddForm";\r\n' +
      'import { ArrowLeftFromLineIcon } from "lucide-react";\r\n' +
      'import { useRouter } from "next/navigation";\r\n' +
      'import { useContext } from "react";\r\n' +
      'import { UserContext } from "../layout";\r\n' +
      '\r\n' +
      'export default function AddUser(){\r\n' +
      '    return(\r\n' +
      '        <div>\r\n' +
      '            <Header/>\r\n' +
      '            <div className="container mx-auto w-full min-h-calc[(100vh - 4rem)] dark:bg-white">\r\n' +
      '                <UserAddForm/>\r\n' +
      '            </div>\r\n' +
      '        </div>\r\n' +
      '    )\r\n' +
      '}\r\n'
  }
]


export const TESTING_TREE_PYTHON = 
[
  {
    fileName: '.env.example',
    fileContent: 'EMAIL_APP_PASSWORD="<--gmail-app-password-->"\r\n' +
      'OPENAI_API_KEY=""\r\n' +
      'TAVILY_API_KEY=""'
  },
  {
    fileName: 'agent.py',
    fileContent: 'from agno.agent import Agent\r\n' +
      'from agno.models.openai import OpenAIChat\r\n' +
      'from agno.tools.duckduckgo import DuckDuckGoTools\r\n' +
      '\r\n' +
      'from datetime import date\r\n' +
      '\r\n' +
      'web_agent = Agent(\r\n' +
      '    name="Web Agent",\r\n' +
      '    role=f"Search the web for latest news, focusing on Geopolitics, Finance, Global stock market, Global financial markets, Indian stock market, War, AI, Technology, and Indian Politics for the date {date.today()}",\r\n' +
      '    model=OpenAIChat(id="gpt-4o"),\r\n' +
      '    tools=[DuckDuckGoTools()],\r\n' +
      '    instructions="Always include the source URLs for each news item. Present information factually, citing where the news is sourced from.\\n"\r\n' +
      '    "Search for top 5 news for each sector",\r\n' +
      '    show_tool_calls=True,\r\n' +
      '    markdown=True,\r\n' +
      ')\r\n' +
      '\r\n' +
      'relation_agent = Agent(\r\n' +
      '    name="Relation Analyzer",\r\n' +
      '    role="Analyze the interrelation between multiple news articles to identify common themes, dependencies, or causal links.",\r\n' +
      '    model=OpenAIChat(id="gpt-4o"),\r\n' +
      '    instructions=(\r\n' +
      '        "You will be given multiple news content with their source links.\\n"\r\n' +
      '        "- Identify which stories are related.\\n"\r\n' +
      `        "- Describe how they're connected (e.g., economic, political, technological).\\n"\r\n` +
      `        - "Cluster them under shared themes like 'AI and Regulation' or 'Geopolitics and Energy'.\\n"\r\n` +
      '        "- Output in a markdown-friendly format.\\n"\r\n' +
      '        "- Highlight meaningful patterns across sectors."\r\n' +
      '    ),\r\n' +
      '    markdown=True\r\n' +
      ')\r\n' +
      '\r\n' +
      'summarizer_agent = Agent(\r\n' +
      '    name="Summarizer",\r\n' +
      '    role="Summarizes news articles retrieved by the Web Agent into short, clear bullet points.",\r\n' +
      '    model=OpenAIChat(id="gpt-4o"),\r\n' +
      '    instructions=(\r\n' +
      '        "Summarize each news article into 200-300 words.\\n"\r\n' +
      '        "Using the relatedness context between the news , include the relatedness of the news with its partner news in your summary\\n"\r\n' +
      '        "Each summary should include the source URL.\\n"\r\n' +
      '        "Put the source URL of each news as plain text in the respective news\\n"\r\n' +
      '        "Maintain a neutral tone."\r\n' +
      '    ),\r\n' +
      '    markdown=True\r\n' +
      ')\r\n' +
      '\r\n' +
      '\r\n' +
      'writer_agent = Agent(\r\n' +
      '    name="Writer",\r\n' +
      '    role="Create a well-written news digest from the summarized news.",\r\n' +
      '    model=OpenAIChat(id="gpt-4o"),\r\n' +
      '    instructions=(\r\n' +
      '        "Use the summarized news articles to write a coherent, structured news brief for the day.\\n"\r\n' +
      '        "Put the source URL of each news as plain text in the respective news."\r\n' +
      '        "Organize content into categories (e.g., Geopolitics, Finance, AI, Tech, Indian Politics).\\n"\r\n' +
      '        "Use a journalistic, formal, and engaging tone.\\n"\r\n' +
      '        "Cite sources where relevant.\\n"\r\n' +
      '        "Format content using markdown for readability."\r\n' +
      '    ),\r\n' +
      ')\r\n' +
      '\r\n' +
      '\r\n' +
      'agent_team = Agent(\r\n' +
      '    team=[web_agent,relation_agent, summarizer_agent, writer_agent],\r\n' +
      '    model=OpenAIChat(id="gpt-4o"),\r\n' +
      '    instructions=(\r\n' +
      '        "Work together to answer high-level questions by:\\n"\r\n' +
      '        "- Web Agent: Finding recent financial/market data from reputable sources.\\n"\r\n' +
      '        "- Summarizer: Structuring findings into clean, concise points.\\n"\r\n' +
      '        "- Writer: Writing a final answer using markdown, tables, and proper sourcing.\\n"\r\n' +
      '        "Focus strictly on factual content. If data is unavailable, state that."\r\n' +
      '    ),\r\n' +
      '    show_tool_calls=True,\r\n' +
      '    markdown=True,\r\n' +
      ')\r\n' +
      '\r\n' +
      'agent_team.print_response("What are the latest updates across the globe. Focus on Geopolitics, Finance, AI, Tech, Indian Politics", stream=True)\r\n' +
      '\r\n'
  },
  {
    fileName: 'convert_markdown.py',
    fileContent: 'from mail_sent import send_mail\r\n' +
      'import markdown\r\n' +
      'with open("example.md", "r", encoding="utf-8") as f:\r\n' +
      '    md_text = f.read()\r\n' +
      '\r\n' +
      'html = markdown.markdown(md_text)\r\n' +
      'print(html)\r\n' +
      'send_mail(html)\r\n' +
      '# Save to HTML file\r\n' +
      'with open("output.html", "w", encoding="utf-8") as f:\r\n' +
      '    f.write(html)\r\n' +
      '\r\n'
  },
  {
    fileName: 'example.md',
    fileContent: '# 🗞️ Daily Global Digest – August 7, 2025\r\n' +
      '\r\n' +
      '## Geopolitics\r\n' +
      '\r\n' +
      '**U.S. and China Initiate New Era of Trade Talks** \r\n' +
      'The United States and China have officially resumed high-level trade discussions, marking an effort to thaw the icy relations between the two economic giants. This decision comes after a summit in Geneva where both nations pledged to address tariffs and technology transfers that have strained their relationship over the past few years. The renewed dialogue aims to establish a more stable economic partnership amid global challenges. [Source](https://www.example-news-source.com)\r\n' +
      '\r\n' +
      '**NATO to Deploy Additional Forces in Eastern Europe** \r\n' +
      "NATO has announced plans to deploy additional forces to its Eastern European allies in response to increasing tensions with Russia. This strategic move is intended to reassure member states and deter any potential threats from the East, with military exercises scheduled for later this year. The deployment underscores NATO's commitment to maintaining security in the region as geopolitical uncertainties grow. [Source](https://www.example-news-source.com)\r\n" +
      '\r\n' +
      '## Finance\r\n' +
      '\r\n' +
      '**Global Markets Respond to New Fed Interest Rates** \r\n' +
      "Financial markets around the world are reacting to the U.S. Federal Reserve's latest decision to increase interest rates by 25 basis points. This move aims to curb inflation which has been persistently above targets. Investors are adjusting their portfolios in light of the anticipated economic slowdown expected from the increased borrowing costs. Emerging markets, in particular, are facing tightening financial conditions as a result. [Source](https://www.example-news-source.com)\r\n" +
      '\r\n' +
      '**European Banks Brace for Policy Shifts** \r\n' +
      'The European Central Bank has signaled a potential shift in monetary policy, suggesting an end to negative interest rates that have dominated the post-crisis era. This announcement has led European bank stocks to rally as investors anticipate better profitability models moving forward. The policy change reflects a stronger Eurozone economy and a cautious approach to potential inflation. [Source](https://www.example-news-source.com)\r\n' +
      '\r\n' +
      '## Global Stock Markets\r\n' +
      '\r\n' +
      '**Asian Markets Show Resilience Amid Global Uncertainty** \r\n' +
      'Asian stock markets exhibited resilience today, with major indices closing higher despite global economic uncertainties. Buoyed by strong corporate earnings, markets in Japan and South Korea led the gains. Analysts attribute this performance to robust domestic consumption and technological sector advancements that keep the markets stable amid external pressures. [Source](https://www.example-news-source.com)\r\n' +
      '\r\n' +
      '**Wall Street Experiences Volatility on Inflation Worries** \r\n' +
      'The U.S. stock market displayed volatility as concerns over inflation and future Federal Reserve policies unsettled investors. While technology and healthcare stocks gained slightly, overall market sentiment remains cautious. The mixed earnings reports from major companies have not helped, with investors seeking more clarity on the inflation outlook. [Source](https://www.example-news-source.com)\r\n' +
      '\r\n' +
      '## Indian Stock Market\r\n' +
      '\r\n' +
      '**Sensex Hits Record High Despite Inflation Fears** \r\n' +
      'The Sensex reached an all-time high today, driven by strong gains in banking and IT stocks. This surge comes despite growing concerns about domestic inflation which the RBI plans to address in its forthcoming policy review. Indian investors remain optimistic due to government reforms and infrastructure projects fueling economic growth. [Source](https://www.example-news-source.com)\r\n' +
      '\r\n' +
      '**Rupee Weakens Against Dollar as Oil Prices Surge** \r\n' +
      'The Indian Rupee weakened against the U.S. Dollar, reflecting concerns over rising global oil prices and its impact on the current account deficit. The government is reportedly contemplating measures to stabilize the currency while addressing longer-term energy independence initiatives. [Source](https://www.example-news-source.com)\r\n' +
      '\r\n' +
      '## War\r\n' +
      '\r\n' +
      '**Escalation of Tensions in Middle East with Recent Skirmishes** \r\n' +
      'Tensions have escalated in the Middle East following a series of skirmishes along the borders of two major regional powers. Both countries have accused each other of violating territorial sovereignty, leading to increased alerts and international calls for de-escalation. The conflict could impact global oil prices and regional stability further. [Source](https://www.example-news-source.com)\r\n' +
      '\r\n' +
      '## AI\r\n' +
      '\r\n' +
      '**Breakthrough in AI-Powered Robotics Announced** \r\n' +
      'A breakthrough in AI-powered robotics has been announced by a leading tech consortium, with the development of robots capable of self-learning advanced tasks in dynamic environments. This advancement is expected to revolutionize industries such as manufacturing, healthcare, and logistics by significantly enhancing efficiency and capabilities. [Source](https://www.example-news-source.com)\r\n' +
      '\r\n' +
      '## Technology\r\n' +
      '\r\n' +
      '**Quantum Computing Achieves New Milestone** \r\n' +
      'Tech firms have achieved a significant milestone in quantum computing, demonstrating the first successful execution of complex algorithms at a scale previously considered unattainable. This progress could lead to breakthroughs in fields ranging from cybersecurity to precision medicine, drastically changing computational possibilities. [Source](https://www.example-news-source.com)\r\n' +
      '\r\n' +
      '## Indian Politics\r\n' +
      '\r\n' +
      '**Indian Parliament Debates New Data Privacy Bill** \r\n' +
      "The Indian Parliament is currently debating a new Data Privacy Bill aimed at enhancing user data protection in an increasingly digital economy. The proposed legislation has sparked wide-ranging discussions about personal freedoms, corporate responsibility, and the framework necessary to secure citizens' digital footprints while promoting tech innovation. [Source](https://www.example-news-source.com)\r\n" +
      '\r\n' +
      '**Opposition Seeks to Bolster Coalition Ahead of Elections** \r\n' +
      "As India gears up for upcoming elections, the main opposition parties are working to strengthen their coalition. Leaders have emphasized unity and a common agenda to challenge the ruling party's policies, focusing on economic reforms, societal issues, and anti-corruption measures to gain voter trust. [Source](https://www.example-news-source.com)\r\n" +
      '\r\n' +
      '---\r\n' +
      '\r\n' +
      '## TL;DR\r\n' +
      '- **U.S. and China resume trade talks**, aiming to thaw relations and stabilize ties.\r\n' +
      '- **NATO plans additional deployments** to Eastern Europe amid Russian tensions.\r\n' +
      "- **Fed's interest rate hike affects global markets**, as European banks anticipate policy shifts.\r\n" +
      '- **Asian markets steady while Wall Street shows volatility** due to inflation fears.\r\n' +
      '- **Sensex hits a record high**, despite inflation pressures; Rupee weakens due to oil prices.\r\n' +
      '- **Middle Eastern tensions rise** with border skirmishes between regional powers.\r\n' +
      '- **AI and robotics** leap forward with robots mastering dynamic tasks.\r\n' +
      '- **Quantum computing reaches new heights**, promises to transform industries.\r\n' +
      '- **India debates a new Data Privacy Bill**, while opposition fortifies coalition before elections.\r\n'
  },
  {
    fileName: 'mail_sent.py',
    fileContent: 'import smtplib\r\n' +
      'from email.mime.text import MIMEText\r\n' +
      'from email.mime.multipart import MIMEMultipart\r\n' +
      'from datetime import date\r\n' +
      'from dotenv import load_dotenv\r\n' +
      'import os\r\n' +
      '\r\n' +
      'load_dotenv()\r\n' +
      '\r\n' +
      'SENDER_EMAIL = "sender@email.com"\r\n' +
      'RECIEVER_EMAIL = "reciever@email.com"\r\n' +
      'PASSWORD = os.getenv("EMAIL_APP_PASSWORD")\r\n' +
      '\r\n' +
      'def send_mail(content):\r\n' +
      '    # Sender and Receiver\r\n' +
      '    sender_email = SENDER_EMAIL\r\n' +
      '    receiver_email = RECIEVER_EMAIL\r\n' +
      '    password = PASSWORD  # Use an App Password, not your Gmail password\r\n' +
      '\r\n' +
      '    # Email Content\r\n' +
      '    \r\n' +
      '    subject = f"📊 AI Industry Update – {date.today().strftime("%#d %B - %Y")\r\n' +
      '}"\r\n' +
      '    body = f"""\\\r\n' +
      '    <h2> Hi there</h2>,\r\n' +
      '\r\n' +
      '    {content}  \r\n' +
      '    \r\n' +
      '    <h2>Best regards,</h2>\r\n' +
      '    <h2>Your AI Assistant</h2>\r\n' +
      '    """\r\n' +
      '\r\n' +
      '    message = MIMEMultipart()\r\n' +
      '    message["From"] = sender_email\r\n' +
      '    message["To"] = receiver_email\r\n' +
      '    message["Subject"] = subject\r\n' +
      '\r\n' +
      '    message.attach(MIMEText(content, "html"))\r\n' +
      '\r\n' +
      '    try:\r\n' +
      '        # Sending Email\r\n' +
      '        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:\r\n' +
      '            server.login(sender_email, password)\r\n' +
      '            server.sendmail(sender_email, receiver_email, message.as_string())\r\n' +
      '        print("Email sent successfully!")\r\n' +
      '    except Exception as e:\r\n' +
      '        print("Error occurred : \\n" + e)\r\n' +
      '\r\n'
  },
  {
    fileName: 'main.py',
    fileContent: 'from agents.index import agent_team\r\n' +
      'from agno.utils.pprint import pprint_run_response\r\n' +
      'from mail_sent import send_mail\r\n' +
      'import markdown\r\n' +
      '\r\n' +
      'query = "Generate a complete global news digest for today with categorized insights and related stories."\r\n' +
      '# agent_team.print_response(query, stream=True)\r\n' +
      '\r\n' +
      'def start_agent():\r\n' +
      '    try:\r\n' +
      '        response = agent_team.run(query)\r\n' +
      '\r\n' +
      '        html_content  = markdown.markdown(response.content)\r\n' +
      '\r\n' +
      '        print(response.content)\r\n' +
      '\r\n' +
      '        print("="*100)\r\n' +
      '\r\n' +
      '        print(html_content)\r\n' +
      '\r\n' +
      '        send_mail(html_content)\r\n' +
      '        \r\n' +
      '    except Exception as e:\r\n' +
      '        print("Some error occurred : \\n" + e)\r\n' +
      '\r\n' +
      '\r\n' +
      'start_agent()\r\n' +
      '\r\n' +
      '\r\n'
  },
  {
    fileName: 'Readme.md',
    fileContent: '# 🧠 Daily Global News Digest Agent\r\n' +
      '\r\n' +
      'This project is an AI-powered multi-agent system built using the [AGNO Framework](https://github.com/code100x/agno). \r\n' +
      'It fetches the latest global news, analyzes relationships between articles, summarizes them into readable digests, and emails a beautifully formatted HTML newsletter.\r\n' +
      '\r\n' +
      '---\r\n' +
      '\r\n' +
      '## 🚀 Features\r\n' +
      '\r\n' +
      '- 🔍 Web scraping + AI summarization\r\n' +
      '- 🧩 Relation analyzer between news stories\r\n' +
      '- 📰 Categorized news digest (Geopolitics, Finance, AI, etc.)\r\n' +
      '- 📧 Sends a beautiful HTML email every morning\r\n' +
      '- 💡 Powered by OpenAI, Tavily, and custom agents\r\n' +
      '\r\n' +
      '---\r\n' +
      '\r\n' +
      '## 📦 Getting Started\r\n' +
      '\r\n' +
      '### 1. Clone the Repository\r\n' +
      '\r\n' +
      '```bash\r\n' +
      'git clone https://github.com/Rayyan-Alam71/news-ai-agent\r\n' +
      'cd news-ai-agent\r\n' +
      '\r\n' +
      '# Create venv\r\n' +
      'python -m venv venv\r\n' +
      '\r\n' +
      '# Activate it\r\n' +
      '# On Linux/macOS:\r\n' +
      'source venv/bin/activate\r\n' +
      '\r\n' +
      '# On Windows:\r\n' +
      'venv\\Scripts\\activate\r\n' +
      '\r\n' +
      '# install the dependencies\r\n' +
      'pip install -r requirements.txt\r\n' +
      '\r\n' +
      '# set up environment variables\r\n' +
      'cp .env.example .env\r\n' +
      '\r\n' +
      '# then open .env and fill in the values:\r\n' +
      '\r\n' +
      '# run the main script\r\n' +
      'python main.py\r\n' +
      '\r\n'
  },
  {
    fileName: 'requirements.txt',
    fileContent: 'langchain\r\n' +
      'langchain-openai\r\n' +
      'agno\r\n' +
      'langchain-community\r\n' +
      'langchain-core\r\n' +
      'dotenv\r\n'
  },
  {
    fileName: 'agents\\index.py',
    fileContent: 'from agno.agent import Agent\r\n' +
      'from agno.models.openai import OpenAIChat\r\n' +
      'from agno.tools.duckduckgo import DuckDuckGoTools\r\n' +
      'from agno.tools.tavily import TavilyTools\r\n' +
      'from agno.team import Team\r\n' +
      '\r\n' +
      'from datetime import date\r\n' +
      'from dotenv import load_dotenv\r\n' +
      '\r\n' +
      'load_dotenv()\r\n' +
      '\r\n' +
      'web_agent = Agent(\r\n' +
      '    name="Web Agent",\r\n' +
      '    role=f"Search and gather top 5 detailed news items for each of these sectors on {date.today()}: Geopolitics, Finance, Global stock markets, Indian stock market, War, AI, Technology, and Indian Politics.",\r\n' +
      '    model=OpenAIChat(id="gpt-4o"),\r\n' +
      '    tools=[TavilyTools(\r\n' +
      '        search=True,\r\n' +
      '        max_tokens=8000,\r\n' +
      '        search_depth="advanced",\r\n' +
      '        format="markdown"\r\n' +
      '    )],\r\n' +
      '    instructions=(\r\n' +
      '        "For each category, retrieve and summarize the top 5 most relevant and credible news articles.\\n"\r\n' +
      '        "Each article should be 250–400 words long with proper context.\\n"\r\n' +
      '        "Include source URLs clearly in plain text below each article.\\n"\r\n' +
      '        "Organize results as:\\n"\r\n' +
      '        "## [Category Name]\\n### Headline\\nBody\\nSource: [URL]"\r\n' +
      '    ),\r\n' +
      '    show_tool_calls=True,\r\n' +
      '    markdown=True,\r\n' +
      ')\r\n' +
      '\r\n' +
      '#  Relation Agent – Clusters and cross-links news items\r\n' +
      'relation_agent = Agent(\r\n' +
      '    name="Relation Analyzer",\r\n' +
      '    role="Analyze and link news items across sectors.",\r\n' +
      '    model=OpenAIChat(id="gpt-4o"),\r\n' +
      '    instructions=(\r\n' +
      '        "You will be given detailed news items categorized by field.\\n"\r\n' +
      '        "Identify meaningful interrelations (cause-effect, dependencies, patterns).\\n"\r\n' +
      `        "- Group related items under shared themes (e.g., 'Geopolitical Tensions Impacting Markets').\\n"\r\n` +
      '        "- For each theme, list related articles and explain how they connect.\\n"\r\n' +
      '        "- Format using markdown. Use subheadings and bullet points.\\n"\r\n' +
      '        "- Do not remove or rewrite the original news, only add relational insights above each section."\r\n' +
      '    ),\r\n' +
      '    markdown=True\r\n' +
      ')\r\n' +
      '\r\n' +
      '#  Summarizer Agent – Makes in-depth category-based summaries\r\n' +
      'summarizer_agent = Agent(\r\n' +
      '    name="Summarizer",\r\n' +
      '    role="Convert raw news into polished, structured briefings for each category.",\r\n' +
      '    model=OpenAIChat(id="gpt-4o"),\r\n' +
      '    instructions=(\r\n' +
      '        "For each category (e.g., Geopolitics, Finance, War, AI):\\n"\r\n' +
      '        "- Create a concise digest (250–350 words) summarizing the key updates for that field.\\n"\r\n' +
      '        "- If any story is linked to another category, mention it.\\n"\r\n' +
      '        "- Attach the original source URL for each summary.\\n"\r\n' +
      '        "- Use markdown headings, and label sources as: Source: [URL]"\r\n' +
      '    ),\r\n' +
      '    markdown=True\r\n' +
      ')\r\n' +
      '\r\n' +
      '# Writer Agent – Final formatting and polishing into a digest\r\n' +
      'writer_agent = Agent(\r\n' +
      '    name="Writer",\r\n' +
      '    role="Write a professional-quality daily news digest.",\r\n' +
      '    model=OpenAIChat(id="gpt-4o"),\r\n' +
      '    instructions=(\r\n' +
      '        "Using all category-wise summaries, write a well-structured, formatted markdown news digest.\\n"\r\n' +
      '        "Structure it as:\\n"\r\n' +
      '        "# 🗞️ Daily Global Digest – [Date]\\n"\r\n' +
      '        "Then include each category:\\n"\r\n' +
      '        "## Geopolitics\\nContent...\\n\\n"\r\n' +
      '        "## Finance\\nContent...\\n\\n"\r\n' +
      '        "...and so on.\\n"\r\n' +
      '        "For each news item:\\n"\r\n' +
      '        "- Include title (bold), context (2–3 paragraphs), and Source link.\\n"\r\n' +
      '        "- Use bullet points or tables if needed.\\n"\r\n' +
      '        "Use a journalistic and objective tone.\\n"\r\n' +
      `        "End with a 'TL;DR' section at the end that summarizes everything in 5–7 bullets."\r\n` +
      '    ),\r\n' +
      '    markdown=True\r\n' +
      ')\r\n' +
      '\r\n' +
      '\r\n' +
      '\r\n' +
      'agent_team = Team(\r\n' +
      '    name="Global News Insight Team",\r\n' +
      '    members=[web_agent, relation_agent, summarizer_agent, writer_agent],\r\n' +
      '    model=OpenAIChat(id="gpt-4o"),\r\n' +
      '    markdown=True,\r\n' +
      '    show_members_responses=True,\r\n' +
      '    show_tool_calls=True,\r\n' +
      '    instructions=(\r\n' +
      '        "This team is responsible for generating a structured and interrelated daily global news digest.\\n"\r\n' +
      '        "Workflow:\\n"\r\n' +
      '        "1. Web Agent collects detailed articles (5 per category).\\n"\r\n' +
      '        "2. Relation Analyzer connects news across sectors.\\n"\r\n' +
      '        "3. Summarizer generates a 250–350 word section for each category.\\n"\r\n' +
      '        "4. Writer composes a final digest using markdown.\\n"\r\n' +
      '        "Final output must look like a full-fledged news report ready for email or publication.\\n"\r\n' +
      '        "All news must be sourced from credible URLs. Structure and formatting matter!"\r\n' +
      '    )\r\n' +
      ')\r\n' +
      '\r\n' +
      '# agent_team1 = Agent(\r\n' +
      '#     team=[web_agent,relation_agent, summarizer_agent, writer_agent],\r\n' +
      '#     model=OpenAIChat(id="gpt-4o"),\r\n' +
      '#     instructions=(\r\n' +
      '#         "Work together to answer high-level questions by:\\n"\r\n' +
      '#         "- Web Agent: Finding recent financial/market data from reputable sources.\\n"\r\n' +
      '#         "- Summarizer: Structuring findings into clean, concise points.\\n"\r\n' +
      '#         "- Writer: Writing a final answer using markdown, tables, and proper sourcing.\\n"\r\n' +
      '#         "Focus strictly on factual content. If data is unavailable, state that."\r\n' +
      '#     ),\r\n' +
      '#     show_tool_calls=True,\r\n' +
      '#     markdown=True,\r\n' +
      '# )'
  }
]

export const TESTING_TREE_REACT = [
  {
    fileName: 'eslint.config.js',
    fileContent: "import js from '@eslint/js'\r\n" +
      "import globals from 'globals'\r\n" +
      "import react from 'eslint-plugin-react'\r\n" +
      "import reactHooks from 'eslint-plugin-react-hooks'\r\n" +
      "import reactRefresh from 'eslint-plugin-react-refresh'\r\n" +
      '\r\n' +
      'export default [\r\n' +
      "  { ignores: ['dist'] },\r\n" +
      '  {\r\n' +
      "    files: ['**/*.{js,jsx}'],\r\n" +
      '    languageOptions: {\r\n' +
      '      ecmaVersion: 2020,\r\n' +
      '      globals: globals.browser,\r\n' +
      '      parserOptions: {\r\n' +
      "        ecmaVersion: 'latest',\r\n" +
      '        ecmaFeatures: { jsx: true },\r\n' +
      "        sourceType: 'module',\r\n" +
      '      },\r\n' +
      '    },\r\n' +
      "    settings: { react: { version: '18.3' } },\r\n" +
      '    plugins: {\r\n' +
      '      react,\r\n' +
      "      'react-hooks': reactHooks,\r\n" +
      "      'react-refresh': reactRefresh,\r\n" +
      '    },\r\n' +
      '    rules: {\r\n' +
      '      ...js.configs.recommended.rules,\r\n' +
      '      ...react.configs.recommended.rules,\r\n' +
      "      ...react.configs['jsx-runtime'].rules,\r\n" +
      '      ...reactHooks.configs.recommended.rules,\r\n' +
      "      'react/jsx-no-target-blank': 'off',\r\n" +
      "      'react-refresh/only-export-components': [\r\n" +
      "        'warn',\r\n" +
      '        { allowConstantExport: true },\r\n' +
      '      ],\r\n' +
      '    },\r\n' +
      '  },\r\n' +
      ']\r\n'
  },
  {
    fileName: 'index.html',
    fileContent: '<!doctype html>\r\n' +
      '<html lang="en">\r\n' +
      '  <head>\r\n' +
      '    <meta charset="UTF-8" />\r\n' +
      '    <link rel="icon" type="image/svg+xml" href="/vite.svg" />\r\n' +
      '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r\n' +
      '    <title>Vite + React</title>\r\n' +
      '  </head>\r\n' +
      '  <body>\r\n' +
      '    <div id="root"></div>\r\n' +
      '    <script type="module" src="/src/main.jsx"></script>\r\n' +
      '  </body>\r\n' +
      '</html>\r\n'
  },
  {
    fileName: 'package-lock.json',
    fileContent: '{\r\n' +
      '  "name": "frontend",\r\n' +
      '  "version": "0.0.0",\r\n' +
      '  "lockfileVersion": 3,\r\n' +
      '  "requires": true,\r\n' +
      '  "packages": {\r\n' +
      '    "": {\r\n' +
      '      "name": "frontend",\r\n' +
      '      "version": "0.0.0",\r\n' +
      '      "dependencies": {\r\n' +
      '        "axios": "^1.7.9",\r\n' +
      '        "dotenv": "^16.4.7",\r\n' +
      '        "lucide-react": "^0.473.0",\r\n' +
      '        "react": "^18.3.1",\r\n' +
      '        "react-dom": "^18.3.1"\r\n' +
      '      },\r\n' +
      '      "devDependencies": {\r\n' +
      '        "@eslint/js": "^9.17.0",\r\n' +
      '        "@types/react": "^18.3.18",\r\n' +
      '        "@types/react-dom": "^18.3.5",\r\n' +
      '        "@vitejs/plugin-react": "^4.3.4",\r\n' +
      '        "autoprefixer": "^10.4.20",\r\n' +
      '        "daisyui": "^4.12.23",\r\n' +
      '        "eslint": "^9.17.0",\r\n' +
      '        "eslint-plugin-react": "^7.37.2",\r\n' +
      '        "eslint-plugin-react-hooks": "^5.0.0",\r\n' +
      '        "eslint-plugin-react-refresh": "^0.4.16",\r\n' +
      '        "globals": "^15.14.0",\r\n' +
      '        "postcss": "^8.5.1",\r\n' +
      '        "tailwindcss": "^3.4.17",\r\n' +
      '        "vite": "^6.0.5"\r\n' +
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
      '    "node_modules/@babel/code-frame": {\r\n' +
      '      "version": "7.26.2",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.26.2.tgz",\r\n' +
      '      "integrity": "sha512-RJlIHRueQgwWitWgF8OdFYGZX328Ax5BCemNGlqHfplnRT9ESi8JkFlvaVYbS+UubVY6dpv87Fs2u5M29iNFVQ==",\r\n' +
      '      "dev": true,\r\n' +
      '      "license": "MIT",\r\n' +
      '      "dependencies": {\r\n' +
      '        "@babel/helper-validator-identifier": "^7.25.9",\r\n' +
      '        "js-tokens": "^4.0.0",\r\n' +
      '        "picocolors": "^1.0.0"\r\n' +
      '      },\r\n' +
      '      "engines": {\r\n' +
      '        "node": ">=6.9.0"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@babel/compat-data": {\r\n' +
      '      "version": "7.26.5",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.26.5.tgz",\r\n' +
      '      "integrity": "sha512-XvcZi1KWf88RVbF9wn8MN6tYFloU5qX8KjuF3E1PVBmJ9eypXfs4GRiJwLuTZL0iSnJUKn1BFPa5BPZZJyFzPg==",\r\n' +
      '      "dev": true,\r\n' +
      '      "license": "MIT",\r\n' +
      '      "engines": {\r\n' +
      '        "node": ">=6.9.0"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@babel/core": {\r\n' +
      '      "version": "7.26.0",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.26.0.tgz",\r\n' +
      '      "integrity": "sha512-i1SLeK+DzNnQ3LL/CswPCa/E5u4lh1k6IAEphON8F+cXt0t9euTshDru0q7/IqMa1PMPz5RnHuHscF8/ZJsStg==",\r\n' +
      '      "dev": true,\r\n' +
      '      "license": "MIT",\r\n' +
      '      "dependencies": {\r\n' +
      '        "@ampproject/remapping": "^2.2.0",\r\n' +
      '        "@babel/code-frame": "^7.26.0",\r\n' +
      '        "@babel/generator": "^7.26.0",\r\n' +
      '        "@babel/helper-compilation-targets": "^7.25.9",\r\n' +
      '        "@babel/helper-module-transforms": "^7.26.0",\r\n' +
      '        "@babel/helpers": "^7.26.0",\r\n' +
      '        "@babel/parser": "^7.26.0",\r\n' +
      '        "@babel/template": "^7.25.9",\r\n' +
      '        "@babel/traverse": "^7.25.9",\r\n' +
      '        "@babel/types": "^7.26.0",\r\n' +
      '        "convert-source-map": "^2.0.0",\r\n' +
      '        "debug": "^4.1.0",\r\n' +
      '        "gensync": "^1.0.0-beta.2",\r\n' +
      '        "json5": "^2.2.3",\r\n' +
      '        "semver": "^6.3.1"\r\n' +
      '      },\r\n' +
      '      "engines": {\r\n' +
      '        "node": ">=6.9.0"\r\n' +
      '      },\r\n' +
      '      "funding": {\r\n' +
      '        "type": "opencollective",\r\n' +
      '        "url": "https://opencollective.com/babel"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@babel/generator": {\r\n' +
      '      "version": "7.26.5",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.26.5.tgz",\r\n' +
      '      "integrity": "sha512-2caSP6fN9I7HOe6nqhtft7V4g7/V/gfDsC3Ag4W7kEzzvRGKqiv0pu0HogPiZ3KaVSoNDhUws6IJjDjpfmYIXw==",\r\n' +
      '      "dev": true,\r\n' +
      '      "license": "MIT",\r\n' +
      '      "dependencies": {\r\n' +
      '        "@babel/parser": "^7.26.5",\r\n' +
      '        "@babel/types": "^7.26.5",\r\n' +
      '        "@jridgewell/gen-mapping": "^0.3.5",\r\n' +
      '        "@jridgewell/trace-mapping": "^0.3.25",\r\n' +
      '        "jsesc": "^3.0.2"\r\n' +
      '      },\r\n' +
      '      "engines": {\r\n' +
      '        "node": ">=6.9.0"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@babel/helper-compilation-targets": {\r\n' +
      '      "version": "7.26.5",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.26.5.tgz",\r\n' +
      '      "integrity": "sha512-IXuyn5EkouFJscIDuFF5EsiSolseme1s0CZB+QxVugqJLYmKdxI1VfIBOst0SUu4rnk2Z7kqTwmoO1lp3HIfnA==",\r\n' +
      '      "dev": true,\r\n' +
      '      "license": "MIT",\r\n' +
      '      "dependencies": {\r\n' +
      '        "@babel/compat-data": "^7.26.5",\r\n' +
      '        "@babel/helper-validator-option": "^7.25.9",\r\n' +
      '        "browserslist": "^4.24.0",\r\n' +
      '        "lru-cache": "^5.1.1",\r\n' +
      '        "semver": "^6.3.1"\r\n' +
      '      },\r\n' +
      '      "engines": {\r\n' +
      '        "node": ">=6.9.0"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@babel/helper-module-imports": {\r\n' +
      '      "version": "7.25.9",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.25.9.tgz",\r\n' +
      '      "integrity": "sha512-tnUA4RsrmflIM6W6RFTLFSXITtl0wKjgpnLgXyowocVPrbYrLUXSBXDgTs8BlbmIzIdlBySRQjINYs2BAkiLtw==",\r\n' +
      '      "dev": true,\r\n' +
      '      "license": "MIT",\r\n' +
      '      "dependencies": {\r\n' +
      '        "@babel/traverse": "^7.25.9",\r\n' +
      '        "@babel/types": "^7.25.9"\r\n' +
      '      },\r\n' +
      '      "engines": {\r\n' +
      '        "node": ">=6.9.0"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@babel/helper-module-transforms": {\r\n' +
      '      "version": "7.26.0",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.26.0.tgz",\r\n' +
      '      "integrity": "sha512-xO+xu6B5K2czEnQye6BHA7DolFFmS3LB7stHZFaOLb1pAwO1HWLS8fXA+eh0A2yIvltPVmx3eNNDBJA2SLHXFw==",\r\n' +
      '      "dev": true,\r\n' +
      '      "license": "MIT",\r\n' +
      '      "dependencies": {\r\n' +
      '        "@babel/helper-module-imports": "^7.25.9",\r\n' +
      '        "@babel/helper-validator-identifier": "^7.25.9",\r\n' +
      '        "@babel/traverse": "^7.25.9"\r\n' +
      '      },\r\n' +
      '      "engines": {\r\n' +
      '        "node": ">=6.9.0"\r\n' +
      '      },\r\n' +
      '      "peerDependencies": {\r\n' +
      '        "@babel/core": "^7.0.0"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@babel/helper-plugin-utils": {\r\n' +
      '      "version": "7.26.5",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.26.5.tgz",\r\n' +
      '      "integrity": "sha512-RS+jZcRdZdRFzMyr+wcsaqOmld1/EqTghfaBGQQd/WnRdzdlvSZ//kF7U8VQTxf1ynZ4cjUcYgjVGx13ewNPMg==",\r\n' +
      '      "dev": true,\r\n' +
      '      "license": "MIT",\r\n' +
      '      "engines": {\r\n' +
      '        "node": ">=6.9.0"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@babel/helper-string-parser": {\r\n' +
      '      "version": "7.25.9",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.25.9.tgz",\r\n' +
      '      "integrity": "sha512-4A/SCr/2KLd5jrtOMFzaKjVtAei3+2r/NChoBNoZ3EyP/+GlhoaEGoWOZUmFmoITP7zOJyHIMm+DYRd8o3PvHA==",\r\n' +
      '      "dev": true,\r\n' +
      '      "license": "MIT",\r\n' +
      '      "engines": {\r\n' +
      '        "node": ">=6.9.0"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@babel/helper-validator-identifier": {\r\n' +
      '      "version": "7.25.9",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.25.9.tgz",\r\n' +
      '      "integrity": "sha512-Ed61U6XJc3CVRfkERJWDz4dJwKe7iLmmJsbOGu9wSloNSFttHV0I8g6UAgb7qnK5ly5bGLPd4oXZlxCdANBOWQ==",\r\n' +
      '      "dev": true,\r\n' +
      '      "license": "MIT",\r\n' +
      '      "engines": {\r\n' +
      '        "node": ">=6.9.0"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@babel/helper-validator-option": {\r\n' +
      '      "version": "7.25.9",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.25.9.tgz",\r\n' +
      '      "integrity": "sha512-e/zv1co8pp55dNdEcCynfj9X7nyUKUXoUEwfXqaZt0omVOmDe9oOTdKStH4GmAw6zxMFs50ZayuMfHDKlO7Tfw==",\r\n' +
      '      "dev": true,\r\n' +
      '      "license": "MIT",\r\n' +
      '      "engines": {\r\n' +
      '        "node": ">=6.9.0"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@babel/helpers": {\r\n' +
      '      "version": "7.26.0",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.26.0.tgz",\r\n' +
      '      "integrity": "sha512-tbhNuIxNcVb21pInl3ZSjksLCvgdZy9KwJ8brv993QtIVKJBBkYXz4q4ZbAv31GdnC+R90np23L5FbEBlthAEw==",\r\n' +
      '      "dev": true,\r\n' +
      '      "license": "MIT",\r\n' +
      '      "dependencies": {\r\n' +
      '        "@babel/template": "^7.25.9",\r\n' +
      '        "@babel/types": "^7.26.0"\r\n' +
      '      },\r\n' +
      '      "engines": {\r\n' +
      '        "node": ">=6.9.0"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@babel/parser": {\r\n' +
      '      "version": "7.26.5",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.26.5.tgz",\r\n' +
      '      "integrity": "sha512-SRJ4jYmXRqV1/Xc+TIVG84WjHBXKlxO9sHQnA2Pf12QQEAp1LOh6kDzNHXcUnbH1QI0FDoPPVOt+vyUDucxpaw==",\r\n' +
      '      "dev": true,\r\n' +
      '      "license": "MIT",\r\n' +
      '      "dependencies": {\r\n' +
      '        "@babel/types": "^7.26.5"\r\n' +
      '      },\r\n' +
      '      "bin": {\r\n' +
      '        "parser": "bin/babel-parser.js"\r\n' +
      '      },\r\n' +
      '      "engines": {\r\n' +
      '        "node": ">=6.0.0"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@babel/plugin-transform-react-jsx-self": {\r\n' +
      '      "version": "7.25.9",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.25.9.tgz",\r\n' +
      '      "integrity": "sha512-y8quW6p0WHkEhmErnfe58r7x0A70uKphQm8Sp8cV7tjNQwK56sNVK0M73LK3WuYmsuyrftut4xAkjjgU0twaMg==",\r\n' +
      '      "dev": true,\r\n' +
      '      "license": "MIT",\r\n' +
      '      "dependencies": {\r\n' +
      '        "@babel/helper-plugin-utils": "^7.25.9"\r\n' +
      '      },\r\n' +
      '      "engines": {\r\n' +
      '        "node": ">=6.9.0"\r\n' +
      '      },\r\n' +
      '      "peerDependencies": {\r\n' +
      '        "@babel/core": "^7.0.0-0"\r\n' +
      '      }\r\n' +
      '    },\r\n' +
      '    "node_modules/@babel/plugin-transform-react-jsx-source": {\r\n' +
      '      "version": "7.25.9",\r\n' +
      '      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.25.9.tg'
  },
  {
    fileName: 'package.json',
    fileContent: '{\r\n' +
      '  "name": "frontend",\r\n' +
      '  "private": true,\r\n' +
      '  "version": "0.0.0",\r\n' +
      '  "type": "module",\r\n' +
      '  "scripts": {\r\n' +
      '    "dev": "vite",\r\n' +
      '    "build": "vite build --output public",\r\n' +
      '    "lint": "eslint .",\r\n' +
      '    "preview": "vite preview"\r\n' +
      '  },\r\n' +
      '  "dependencies": {\r\n' +
      '    "axios": "^1.7.9",\r\n' +
      '    "dotenv": "^16.4.7",\r\n' +
      '    "lucide-react": "^0.473.0",\r\n' +
      '    "react": "^18.3.1",\r\n' +
      '    "react-dom": "^18.3.1"\r\n' +
      '  },\r\n' +
      '  "devDependencies": {\r\n' +
      '    "@eslint/js": "^9.17.0",\r\n' +
      '    "@types/react": "^18.3.18",\r\n' +
      '    "@types/react-dom": "^18.3.5",\r\n' +
      '    "@vitejs/plugin-react": "^4.3.4",\r\n' +
      '    "autoprefixer": "^10.4.20",\r\n' +
      '    "daisyui": "^4.12.23",\r\n' +
      '    "eslint": "^9.17.0",\r\n' +
      '    "eslint-plugin-react": "^7.37.2",\r\n' +
      '    "eslint-plugin-react-hooks": "^5.0.0",\r\n' +
      '    "eslint-plugin-react-refresh": "^0.4.16",\r\n' +
      '    "globals": "^15.14.0",\r\n' +
      '    "postcss": "^8.5.1",\r\n' +
      '    "tailwindcss": "^3.4.17",\r\n' +
      '    "vite": "^6.0.5"\r\n' +
      '  }\r\n' +
      '}\r\n'
  },
  {
    fileName: 'postcss.config.js',
    fileContent: 'export default {\r\n' +
      '  plugins: {\r\n' +
      '    tailwindcss: {},\r\n' +
      '    autoprefixer: {},\r\n' +
      '  },\r\n' +
      '}\r\n'
  },
  {
    fileName: 'README.md',
    fileContent: '# React + Vite\r\n' +
      '\r\n' +
      'This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.\r\n' +
      '\r\n' +
      'Currently, two official plugins are available:\r\n' +
      '\r\n' +
      '- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh\r\n' +
      '- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh\r\n'
  },
  {
    fileName: 'tailwind.config.js',
    fileContent: 'import daisyui from "daisyui"\r\n' +
      "/** @type {import('tailwindcss').Config} */\r\n" +
      'export default {\r\n' +
      '  content: [\r\n' +
      '    "./index.html",\r\n' +
      '    "./src/**/*.{js,ts,jsx,tsx}",\r\n' +
      '  ],\r\n' +
      '  theme: {\r\n' +
      '    extend: {},\r\n' +
      '  },\r\n' +
      '  plugins: [\r\n' +
      '    daisyui\r\n' +
      '  ],\r\n' +
      '}'
  },
  {
    fileName: 'vite.config.js',
    fileContent: "import { defineConfig } from 'vite'\r\n" +
      "import react from '@vitejs/plugin-react'\r\n" +
      '\r\n' +
      '// https://vite.dev/config/\r\n' +
      'export default defineConfig({\r\n' +
      '  plugins: [react()],\r\n' +
      '})\r\n'
  },
  { fileName: 'src\\App.css', fileContent: '' },
  {
    fileName: 'src\\App.jsx',
    fileContent: "import React, { useState, useEffect, useRef } from 'react';\r\n" +
      'import { AirVent, Send } from "lucide-react";\r\n' +
      "import axios from 'axios'\r\n" +
      "import Loading from './component/Loading';\r\n" +
      '\r\n' +
      '\r\n' +
      'const ChatPreview = () => {\r\n' +
      '  const [userInput, setUserInput] = useState("");\r\n' +
      '  const [loading, setLoading] = useState(false);\r\n' +
      '  const [msg, setMsg] = useState([]);\r\n' +
      '  const messagesEndRef = useRef(null);\r\n' +
      '\r\n' +
      '  useEffect(() => {\r\n' +
      '    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });\r\n' +
      '  }, [msg]);\r\n' +
      '\r\n' +
      '  const submitDataFromUser = async () => {\r\n' +
      '    if (!userInput.trim()) return;\r\n' +
      '    setMsg([...msg, { from: "user", content: userInput }]);\r\n' +
      '    setLoading(true);\r\n' +
      '    console.log(loading)\r\n' +
      '    try{\r\n' +
      '      const res = await axios.post(import.meta.env.VITE_SECRET, {\r\n' +
      '        message : userInput\r\n' +
      '      })\r\n' +
      '      const response = res.data;\r\n' +
      '      setMsg((prev)=> [...prev , {from :"ai", content:response}]);\r\n' +
      '    }\r\n' +
      '    catch(e){\r\n' +
      '      console.log(`error occure ${e}`)\r\n' +
      '    }\r\n' +
      '    setLoading(false);\r\n' +
      '    setUserInput("");\r\n' +
      '  };\r\n' +
      '\r\n' +
      '  const submitDataFromAI = () => {\r\n' +
      '    if (!userInput.trim()) return;\r\n' +
      '    setMsg([...msg, { from: "ai", content: userInput }]);\r\n' +
      '    setUserInput("");\r\n' +
      '  };\r\n' +
      '\r\n' +
      '  return (\r\n' +
      '    <div className="w-screen min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col justify-center items-center">\r\n' +
      '      <div className="w-[50%] flex flex-col gap-4 p-4 rounded-2xl shadow-2xl bg-white/30 backdrop-blur-sm">\r\n' +
      '        <div className="h-[80vh] overflow-y-auto rounded-xl bg-white/50 p-6">\r\n' +
      '          <div className="flex flex-col space-y-4">\r\n' +
      '            {msg.map((e, index) => (\r\n' +
      '              <div\r\n' +
      '                key={index}\r\n' +
      '                className={`flex ${e.from === "user" ? "justify-end" : "justify-start"}`}\r\n' +
      '              >\r\n' +
      '                <div\r\n' +
      '                  className={`max-w-[70%] break-words rounded-2xl px-4 py-3 ${\r\n' +
      '                    e.from === "user"\r\n' +
      '                      ? "bg-indigo-600 text-white rounded-tr-none"\r\n' +
      '                      : "bg-white rounded-tl-none shadow-md"\r\n' +
      '                  }`}\r\n' +
      '                >\r\n' +
      '                  <p className={`text-lg ${e.from === "user" ? "text-white" : "text-gray-800"}`}>\r\n' +
      '                    {e.content}\r\n' +
      '                  </p>\r\n' +
      '                </div>\r\n' +
      '              </div>\r\n' +
      '            ))}\r\n' +
      '            <div ref={messagesEndRef} />\r\n' +
      '          </div>\r\n' +
      '          <p>{loading && <Loading loading={loading}/>}</p>\r\n' +
      '        </div>\r\n' +
      '          \r\n' +
      '        <div className="flex justify-center items-center gap-3 p-4 bg-gray-300 rounded-xl backdrop-blur-sm">\r\n' +
      '          <input\r\n' +
      '            type="text"\r\n' +
      '            value={userInput}\r\n' +
      '            onKeyDown={(e)=>{\r\n' +
      '              if(e.key == "Enter") submitDataFromUser()\r\n' +
      '            }}\r\n' +
      '            onChange={(e) => setUserInput(e.target.value)}\r\n' +
      '            placeholder="Type your query here..."\r\n' +
      '            className="flex-1 px-4 py-2 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white"\r\n' +
      '          />\r\n' +
      '          \r\n' +
      '          <button\r\n' +
      '            className="px-6 stretch w-24 flex justify-center items-center py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"\r\n' +
      '            onClick={submitDataFromUser}\r\n' +
      '          >\r\n' +
      '            <Send size={24} />\r\n' +
      '          </button>\r\n' +
      '          {/* <button\r\n' +
      '            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"\r\n' +
      '            onClick={submitDataFromAI}\r\n' +
      '          >\r\n' +
      '            AI\r\n' +
      '          </button> */}\r\n' +
      '        </div>\r\n' +
      '      </div>\r\n' +
      '    </div>\r\n' +
      '  );\r\n' +
      '\r\n' +
      '};\r\n' +
      '\r\n' +
      'export default ChatPreview;\r\n'
  },
  {
    fileName: 'src\\index.css',
    fileContent: '@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;'
  },
  {
    fileName: 'src\\main.jsx',
    fileContent: "import { StrictMode } from 'react'\r\n" +
      "import { createRoot } from 'react-dom/client'\r\n" +
      "import './index.css'\r\n" +
      "import App from './App.jsx'\r\n" +
      '\r\n' +
      "createRoot(document.getElementById('root')).render(\r\n" +
      '  <StrictMode>\r\n' +
      '    <App />\r\n' +
      '  </StrictMode>,\r\n' +
      ')\r\n'
  },
  {
    fileName: 'src\\component\\Loading.jsx',
    fileContent: "import React from 'react'\r\n" +
      '\r\n' +
      'const Loading = ({loading}) => {\r\n' +
      '  return (\r\n' +
      '    <div>\r\n' +
      '      {loading && <Balls/>}\r\n' +
      '    </div>\r\n' +
      '  )\r\n' +
      '}\r\n' +
      'const Balls = ()=>{\r\n' +
      '    return(\r\n' +
      '        <>\r\n' +
      '            <span className="loading loading-ball loading-xs"></span>\r\n' +
      '            <span className="loading loading-ball loading-sm"></span>\r\n' +
      '            <span className="loading loading-ball loading-md"></span>\r\n' +
      '            <span className="loading loading-ball loading-lg"></span>\r\n' +
      '        </>\r\n' +
      '    )\r\n' +
      '}\r\n' +
      'export default Loading\r\n'
  }
]
