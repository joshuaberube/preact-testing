import { h } from 'preact'
import Home from "../src/routes/home/index"

import { shallow } from 'enzyme';

describe('Initial Test of the Home', () => {
	test('Home renders two items', () => {
		const context = shallow(<Home />);
		expect(context.find('h1').text()).toBe('Home');
		expect(context.find('p').text()).toBe('This is the Home component.');
	});
});