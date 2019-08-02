import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

import Login from '../components/subcom/Login.js';

it('renders a login form', () => {
    const wrapper = renderer.create(<Login />).toTree();

    expect(wrapper).toMatchSnapshot();
})