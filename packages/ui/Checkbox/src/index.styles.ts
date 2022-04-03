import { css } from '@emotion/react'

export const wrapper = css`
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 10px 0 10px 0px;
`

export const labelWrapper = css`
  display: flex;
  flex-direction: column;
`

export const label = css`
  margin: 0;
  color: #232942;
  padding-left: 12px;
  padding-bottom: 1px;
  padding-top: 1px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
`

export const labelDisabled = css`
  color: #828599;
  cursor: default;
`

export const fillEllipse = css`
  border: 1px solid #232942;
  &::before {
    opacity: 1;
  }
  &::after {
    opacity: 1;
  }
`

export const checkbox = css`
  appearance: none;
  position: relative;
  background-color: transparent;
  border: 2px solid #313131;
  cursor: pointer;
  padding: 0;
  min-width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    background-color: rgba(128,128,128,0.48);
    border-radius: 50%;
    position: absolute;
    left: calc(-50% -10px);
    top: calc(-50% -10px);
    width: 40px;
    height: 40px;
    opacity: 0;
  }

  &::after {
    content: '';
    border: 2px solid #333;
    border-radius: 2px;
    position: absolute;
    left: -1px;
    right: -1px;
    top: -1px;
    bottom: -1px;
    opacity: 0;
  }

  &:focus {
    outline: none;
  }

  &[data-state="unchecked"] {
    &:not([disabled]) {
      &:hover {
        ${fillEllipse}
      }
    }
  }

  &[data-state="checked"] {
    background-color: #333;
    border: none;
  }

  &[disabled] {
    background-color: #F2F2F2;
    border: 2px solid #C4C6CF;
    cursor: default;
  }
`
