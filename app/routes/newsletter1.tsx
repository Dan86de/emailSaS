import type { LoaderFunction } from '@remix-run/node'
import compileMjml from '../utils/newsletter.server'

export const loader: LoaderFunction = async () => {
  const code = compileMjml(`
  <mjml>
  <mj-head>
    <mj-title>Title</mj-title>
  </mj-head>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text>Cześć <strong></strong>Daniel</mj-text>
        <mj-text>CONTENT</mj-text>
      </mj-column>
    </mj-section>
    <mj-section padding="0px">
      <mj-column >
        <mj-text color="#f90606" padding="0 25px" font-family="Pf_handwriting" font-size="18px">
          <h3>Link do ostatniego odcinka na kanale:</h3>
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-section border-radius="8px" background-color="#ffccd5">
      <mj-column>
        <mj-text align="center" color="#f90606" font-size="20px" font-weight="bold">
          <a href="https://www.youtube.com/watch?v=DZ0LiS9ofYw&t=35s" target="_blank" style="color:inherit">https://www.youtube.com/watch?v=DZ0LiS9ofYw&t=35s</a>
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-section>
      <mj-column>
      </mj-column>
    </mj-section>
    <mj-section padding="0px"><mj-column>
      <mj-text color="#005aa7" padding="0 25px" font-family="Pf_handwriting" font-size="18px">
        <h3>Ciekawe źródła i narzędzia:</h3>
      </mj-text>
    </mj-column>
    </mj-section>
    <mj-section padding="0">
      <mj-column>
        <mj-text padding="0 25px">LINKI</mj-text>
      </mj-column>
    </mj-section>
    <mj-section padding="0">
      <mj-column>
        <mj-text font-family="Pf_handwriting" font-size="18px">
          <h3>Jak się podobało? Zostaw feedback klikając w link poniżej!</h3>
        </mj-text>
        <mj-text padding="0 25px" font-family="Pf_handwriting" font-size="18px">
          <a href="https://hook.integromat.com/mo7ahlg3ehrnbte39yeassefn47qegf1?review=3&newsletter={{26.id}}" target="_blank" style="color: #00cc22;font-weight:bold;text-decoration:none;margin:0;padding:8px 0px;display:block;">Super! 😍</a>
        </mj-text>
        <mj-text padding="0 25px" font-family="Pf_handwriting" font-size="18px">
          <a href="https://hook.integromat.com/mo7ahlg3ehrnbte39yeassefn47qegf1?review=2&newsletter={{26.id}}" target="_blank" style="color: #fc8002;font-weight:bold;text-decoration:none;margin:0;padding:8px 0px;display:block;">Było ok 😐</a>
        </mj-text>
        <mj-text padding="0 25px" font-family="Pf_handwriting" font-size="18px">
            <a href="https://hook.integromat.com/mo7ahlg3ehrnbte39yeassefn47qegf1?review=1&newsletter={{26.id}}" target="_blank" style="color: #f90606;font-weight:bold;text-decoration:none;margin:0;padding:8px 0px;display:block;">Postaraj się lepiej 😡</a>
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
