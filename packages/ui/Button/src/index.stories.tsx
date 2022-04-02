/** @jsxImportSource @emotion/react */

import * as React from 'react'
import { css } from '@emotion/react'
import Button from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default { title: 'ui/button' }

const wrapper = css`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
`

const column = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const Template = () => (
  <div css={wrapper}>
    <div css={column}>
      <strong>Primary button</strong>
      <Button>
        Primary Button
      </Button>
      <Button disabled>
        Primary Button
      </Button>
    </div>
    <div css={column}>
      <strong>Primary button Small</strong>
      <Button size="small">
        Primary Button
      </Button>
      <Button size="small" disabled>
        Primary Button
      </Button>
    </div>
    <div css={column}>
      <strong>Secondary button</strong>
      <Button variant="outlined">
        Secondary Button
      </Button>
      <Button disabled variant="outlined">
        Secondary Button
      </Button>
    </div>
    <div css={column}>
      <strong>Delete Button</strong>
      <Button variant="error">
        Delete Button
      </Button>
      <Button disabled variant="error">
        Delete Button
      </Button>
    </div>
    <div style={{ width: '50%' }} css={column}>
      <strong>Form Buttons</strong>
      <Button type="submit" css={{ width: '100%' }}>
        Guardar
      </Button>
      <Button type="submit" disabled css={{ width: '100%' }}>
        Guardar
      </Button>
      <Button type="submit" variant="outlined" css={{ width: '100%' }}>
        Guardar
      </Button>
      <Button type="submit" variant="outlined" disabled css={{ width: '100%' }}>
        Guardar
      </Button>
    </div>
    <div css={column}>
      <strong>Link button</strong>
      <Button variant="link">
        Link Button
      </Button>
      <Button variant="link" disabled>
        Link Button
      </Button>
    </div>
  </div>
)
