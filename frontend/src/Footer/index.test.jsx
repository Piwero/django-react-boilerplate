import React from "react"
import renderer from 'react-test-renderer';
import Footer from ".";

describe(`Footer`, () => {
  it(`renders correctly`, () => {
    const footer = renderer.create(<Footer />).toJSON();
    expect(footer).toMatchSnapshot()
  })
})

