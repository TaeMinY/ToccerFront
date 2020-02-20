import styled, { css } from "styled-components"

const styles = css`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  padding: 8px 10px;
  border-radius: 4px;
  height: 41px;
  border: solid 1px #cecece;
  &:focus {
    outline: 0;
  }
  &::placeholder {
    color: #b3b3b3;
  }
`
const Input = styled.input`
  ${styles}
`
export const TextArea = styled.textarea`
  ${styles}
  resize: vertical;
`

export default Input
