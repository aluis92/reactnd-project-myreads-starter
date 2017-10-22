
// import 'jest-styled-components';
import 'raf/polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

configure({ adapter: new Adapter() });