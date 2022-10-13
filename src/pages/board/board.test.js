import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Store from "../../store";
import Board from "./index.tsx"
import AddGroup from '../addGroup/index';
import Home from '../home/index'
import { BrowserRouter } from "react-router-dom";

const group = {
  name: "jest",
  des: "This is from jest testing"
}

function hasInputValue(e, inputValue) {
    return screen.getByDisplayValue(inputValue) === e
}

test('Load Groups', async() => {
    render(
      <BrowserRouter>
        <Store>
          <Home/>
        </Store>
      </BrowserRouter>
    )
    expect(global.window.location.pathname).toEqual('/')

    render(
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
   
    render(
        <BrowserRouter>
          <Store>
            <Home/>
          </Store>
        </BrowserRouter>
    )

    window.history.pushState({}, 'add Group', '/')
    expect(global.window.location.pathname).toEqual('/')

    const _name = screen.findByText(group.name)

})