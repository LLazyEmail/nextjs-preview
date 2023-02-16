// const withMDX = require('@next/mdx')({
//     extension: /\.(md|mdx)$/,
//   })
const withMDX = require('@next/mdx')()
module.exports = withMDX()

// module.exports = withMDX({
//     pageExtensions: ['js', 'jsx', 'mdx'],
//     images: {
//       domains: ['raw.githubusercontent.com'],
//     },
//   });