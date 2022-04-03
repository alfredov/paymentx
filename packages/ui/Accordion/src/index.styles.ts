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
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const item = css`
  background-color: white;
`

const content = css`
  padding: 16px 13px;
  position: relative;
`;

const titleWrapper = css`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 6px;
`

const title = css`
  font-size: 16px;
  font-weight: 700;
  color: #333;
`

const primaryText = css`
  color: #979797;
  font-size: 14px;
  font-weight: 400;
`

const triger = css`
  box-sizing: border-box;
  border-radius: 1px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  min-height: 32px;
  padding: 8px 13px;
  cursor: pointer;
  border: none;
  width: 100%;
  & > svg {
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
  item,
  title,
  primaryText
}
