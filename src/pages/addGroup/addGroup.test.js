import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Store from "../../store";
import AddGroup from "./index.tsx"
import { BrowserRouter } from "react-router-dom";

const group = {
  name: "jest",
  des: "This is from jest testing"
}

function hasInputValue(e, inputValue) {
    return screen.getByDisplayValue(inputValue) === e
}

test('Add Groups', async() => {
  let wrapped = render(
      <BrowserRouter>
        <Store>
          <AddGroup/>
        </Store>
      </BrowserRouter>
    )
    window.history.pushState({}, 'add Group', '/add-group/') 
    expect(global.window.location.pathname).toEqual('/add-group/')
  
    const name = screen.getByLabelText("Name")
    const des = screen.getByLabelText("Description")
    
    expect (name).toBeInTheDocument()
    expect (des).toBeInTheDocument()
    
    fireEvent.change(name, { target: { value: group.name } })
    fireEvent.change(des, { target: { value: group.des } })
    
    await waitFor(() =>
        expect(hasInputValue(name, group.name)).toBe(true),
        expect(hasInputValue(des, group.des)).toBe(true)
    )
    
    const submit = screen.getByTestId('grp-sub')
    await waitFor(() =>
        expect (submit).toBeInTheDocument(),
        fireEvent.click(submit)
    )

})