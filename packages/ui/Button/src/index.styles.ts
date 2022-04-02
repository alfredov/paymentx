import { css } from '@emotion/react'

export const small = css`
  min-height: 28px;
  font-size: 12px;
`

export const outlined = css`
  background-color: white;
  color: #333;
  border: 2px solid #333;

  &:not([disabled]) {
    &:hover {
      background-color: white;
    }
    &:active {
      background-color: #696565;
      color: white;
    }
  }

  &[disabled] {
    border: 2px solid #a4a2a2;
    background-color: white;
  }
`

export const error = css`
  background-color: #DC4B5C;

  &:not([disabled]) {
    &:hover {
      background-color: #FF6B75;
    }
    &:active {
      background-color: #BE0022;
    }
  }

  &[disabled] {
    background-color: #FFE9EA;
  }
`

export const link = css`
  background: transparent !important;
  color: #4C516D;
  line-height: 22px;
  padding: 0;
  min-height: fit-content;

  &:not([disabled]) {
    &:hover {
      box-shadow: none;
      color: #232942;
    }
  }

  &[disabled] {
    background-color: #FFE9EA;
    color: #828599;
  }
`

export const button = css`
  background: #333;
  border: none;
  border-radius: 25px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  min-height: 40px;
  padding: 0px 32px;

  &:not([disabled]) {
    cursor: pointer;

    &:hover {
      background-color: #333;
      box-shadow: 0px 2px 6px rgba(76, 81, 109, 0.3);
    }
    &:active {
      background-color: #514c4c;
    }
  }


  &[disabled] {
    background-color: #a4a2a2;
    color: #514c4c;
  }

  &[type="submit"] {
    border-radius: 5px;
  }
`
