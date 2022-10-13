import {fireEvent, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Store from "../../store";
import Home from "./index.tsx"
import { BrowserRouter } from "react-router-dom";

const group = {
  name: "jest",
  des: "This is from jest testing"
}

test('Load Groups', () => {
  render(
      <BrowserRouter>
        <Store>
          <Home/>
        </Store>
      </BrowserRouter>
    )
  const element = screen.getByTestId('group-name')
  expect (element).toBeInTheDocument()
  fireEvent.click(element)

  expect(global.window.location.pathname).toEqual('/add-group/')

})