import type { LoaderFunction } from '@remix-run/node'
import compileMjml from '../utils/newsletter.server'

export const loader: LoaderFunction = async () => {
  const code = compileMjml(`
    <mjml>
      <mj-body width="500px">
        <mj-section background-color="#EFEFEF">
          <mj-column>
            <mj-text font-size="20px">
              Hello World!
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `)

  return new Response(code.html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  })
}
