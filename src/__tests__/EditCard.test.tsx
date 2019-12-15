import React from "react";
import { shallow, mount } from "enzyme";
import TextField from "@material-ui/core/TextField";
import EnzymeToJson from 'enzyme-to-json';

import EditCard from "../components/EditCard";
import providerWrapper from "../testsHelper";
import data from "./temp";

describe("<EditCard />", () => {
  const wrapper = mount(providerWrapper(<EditCard data={data[0]} />));
  it("renders", () => {
    const wrapper = mount(providerWrapper(<EditCard data={data[0]} />));
  });

  it("renders three <TextField />s", () => {
    expect(wrapper.find(TextField)).toHaveLength(3);
  });
});

test("Snapshot", () => {
  const component = mount(providerWrapper(<EditCard data={data[0]} />));
  expect(EnzymeToJson(component)).toMatchSnapshot()
});
