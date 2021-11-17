// Having a next.config.ts file written in Typescript is not supported 
// by NextJS. The build errors out with the following message: 

// Error: Configuring Next.js via 'next.config.ts' is not supported. 
// Please replace the file with 'next.config.js'.

// To overcome this, we need to transpile this file before running 
// `next build`. See the build script in package.json. 

export default {
  reactStrictMode: true,
}
