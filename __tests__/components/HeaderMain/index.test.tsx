import React from "react"

import {render} from "@testing-library/react-native"

import HeaderMain from "../../../src/components/HeaderMain"

describe("components/HeaderMain",() => {
    {/*test("renders Correctly", () => {
       const {toJSON} = render(<HeaderMain />);
       expect(toJSON()).toMatchSnapshot()
    })*/}
    test("renders ev text correctly", () => {
       const {getByTestId,getByText} =  render(<HeaderMain />)

       const ev = getByText('Ev')
       const placeText = getByTestId('place-text')
       
       expect(placeText).toHaveTextContent('Ev')
       expect(ev).toBeDefined()
    })
    test("renders the correct right icon",() => {
        const {getByTestId,getByText} =  render(<HeaderMain />)

        const icon = getByTestId('right-icon')
        expect(icon.props.style[2].fontFamily).toEqual('entypo')
        expect(icon.props.style[0].fontSize).toEqual(22)
    })
    test("renders component with childrens correctly",() => {
        const {getByTestId} = render(<HeaderMain />)
        const header= getByTestId('header-main')
        expect(header.props.children.length).toBe(2)
        expect(header.props.style.backgroundColor).toEqual("#F7D102")
    })
});