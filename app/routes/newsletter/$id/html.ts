import { LoaderFunction } from '@remix-run/node'
import fs from 'fs'
import path from 'path'

export const loader: LoaderFunction = async ({ params }) => {
  const postsPath = path.join(path.resolve(), 'app/newsletter/')
  const fileContent = fs.readFileSync(`${postsPath}${params.id}.mdx`)
  console.log(fileContent)
  // const html = await generateHTML(report);
  return new Response('', {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  })
}
