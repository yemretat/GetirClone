import React from "react"

import {render,fireEvent} from "@testing-library/react-native"

import MainCategories from "../../../src/components/MainCategories"

const mockedNavigate = jest.fn()
jest.mock('@react-navigation/native',() => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
      ...actualNav,
      useNavigation: () => ({
        navigate: mockedNavigate,
      }),
    };
})

describe("components/MainCategories",() => {
    test("renders correctly",() => {
        const {toJSON} = render(<MainCategories />)
        expect(toJSON()).toMatchSnapshot()
    })

    test("uses useNavigation when pressed",async() => {
        const {getAllByTestId}=render(<MainCategories/>)
        const categoryItem= getAllByTestId("category-item")
        await fireEvent.press(categoryItem[0])
        expect(mockedNavigate).toHaveBeenCalledTimes(1)
    
    })
    test("renders 18 categoryItem is rendered ",() => {
        const {getAllByTestId} = render(<MainCategories />)
        const categoryItem = getAllByTestId("category-item")
        expect(categoryItem.length).toBe(18)
    })
    

})