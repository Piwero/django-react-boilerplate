import React from "react"
import renderer from 'react-test-renderer';
import Footer from "./index.jsx";

describe(`Footer`, () => {
  it(`renders correctly`, () => {
    const footer = renderer.create(<Footer />).toJSON();
    expect(footer).toMatchSnapshot()
  })
})

