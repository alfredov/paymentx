/** @jsxImportSource @emotion/react */
import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement> & { css?: any }

const DownArrowIcon = (props: Props) => (
  <svg
    viewBox="0 0 12 6"
    css={[props.css ? props.css : {}]}
    width={props.height || 12}
    height={props.width || 6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1l4.832 4 5.236-4"
      stroke="#C4C4C4"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default DownArrowIcon
