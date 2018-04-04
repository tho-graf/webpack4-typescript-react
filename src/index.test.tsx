import * as React from 'react';
import { shallow } from 'enzyme';

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

test('enzyme test', () => {
    const wrapper = shallow(<div>Hello</div>);
    expect(wrapper.html()).toEqual("<div>Hello</div>")
});