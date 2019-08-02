import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";
import App from '../App.js';
import  RouterHome  from '../components/RouterHome.js';

it('renders app', () => {
    const wrapper = renderer.create(<App />).toTree();

    expect(wrapper).toMatchSnapshot();
})
