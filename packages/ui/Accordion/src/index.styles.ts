import { css, keyframes } from "@emotion/react";

const slideDown = keyframes({
  from: { height: 0, opacity: 0 },
  to: { height: 'var(--radix-accordion-content-height)',opacity: 1 },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)',opacity:1 },
  to: { height: 0,opacity: 0 },
});

const root = css`
  width: 100%;
`;

const content = css`
position: relative;
  &[data-state="open"] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)
  };
  &[data-state="closed"] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)
  }
`;

const titleWrapper = css`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 6px;
`

const triger = css`
  box-sizing: border-box;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #EEF3FE;
  min-height: 32px;
  padding: 8px 15px;
  cursor: pointer;
  border: none;
  width: 100%;
  & > svg {
    margin-right: 15px;
    transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
  &[data-state=open] {
    & > svg {
      transform: rotate(180deg)
    }
  };
`;

export default {
  root,
  content,
  triger,
  titleWrapper,
}
