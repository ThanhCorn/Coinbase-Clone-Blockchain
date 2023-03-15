import sanityClient from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.NEXT_PUBLIC_SANITY_API_TOKEN;

export const client = sanityClient({
  projectId: 'tyd4imry',
  dataset: 'production',
  apiVersion: '2022-03-25', // use current UTC date - see "specifying API version"!
  token:
    'skgERHLVdXPw6O00gxov6e1uyS0FtlLeM0ypao79WxloQO0IFtBUWePQihlHMEyKVWEp3MrmnzmIMdu1y0s8BBrvfwEyYj4A4JJw0V0fhYXaXvjcRoG1s5ndETLYfH4eXRE7Zv2lIEzOiNUh3BLH41NNXe8i5Dg3xhyAMDa1xjsY0PmNuMa3', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})