import React from 'react';
// import { render } from '@testing-library/react';
// import renderer from 'react-test-renderer';
import SearchBar from "./SearchBar";
import { shallow } from 'enzyme';

// test('some bullshit', () => {
//
// });

describe("<SearchBar with no props", () => {
    const container = shallow(<SearchBar/>);

    it('should match the snapshot', () => {
        expect(container.html()).toMatchSnapshot();
    });

    it('should have a search field', () => {
        expect(container.find('input[type="text"]').length).toEqual(1);
    });
});
