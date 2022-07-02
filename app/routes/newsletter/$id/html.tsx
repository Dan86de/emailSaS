import type { LoaderFunction } from '@remix-run/node'
import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from '../../../utils/mdxBundler.server'
import { renderToString } from 'react-dom/server'
import path from 'path'
import fs from 'fs'
import { MjmlText, MjmlRaw } from 'mjml-react'
import compileMjml from '~/utils/mjml.server'

const MJMLParagraph: React.FC = (props) => {
  return (
    <>
      <MjmlText color="red" font-size="16px">
        {props.children}
      </MjmlText>
    </>
  )
}

const MJMLHeading: React.FC = (props) => {
  return (
    <>
      <MjmlText color="black" font-size="24px" fontFamily="Pf_handwriting">
        {props.children}
      </MjmlText>
      <MjmlRaw>
        <br></br>
      </MjmlRaw>
    </>
  )
}

export const loader: LoaderFunction = async ({ params }) => {
  const postsPath = path.join(path.resolve(), 'app/routes/newsletter/')
  const fileContent = fs.readFileSync(`${postsPath}${params.id}.mdx`, {
    encoding: 'utf-8',
  })

  const { code, frontmatter } = await bundleMDX({
    source: fileContent.trim(),
  })

  const Component = getMDXComponent(code)
  const html = renderToString(
    <Component components={{ p: MJMLParagraph, h1: MJMLHeading }} />
  )

  console.log(html)

  const compiledHtml = compileMjml(`<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        ${html.trim()}
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`)

  console.log(html)

  return new Response(compiledHtml.html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  })
}
