import { css } from'@emotion/react'

const MAX_Z_INDEX = 2147483647

export const header = css`
  height: 54px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  box-shadow: 0px 2px 6px rgba(76, 81, 109, 0.3);
  z-index: ${MAX_Z_INDEX}
`
