import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Handle from '../Handle';

configure({ adapter: new Adapter() });



test('Handle changes after click ', () => {
 // Render a checkbox with label in the document
 const loadTweets =  () => {
 };

 const handle = shallow(
  <Handle activeAccount="realDonaldTrump" loadTweets={loadTweets} />
 );
  expect (handle.find('#account1').prop('href')).toEqual('#app');
  handle.find('#account2').simulate('click');
  handle.setProps({activeAccount:"elonmusk" });
  expect (handle.find('#account1').prop('href')).toEqual('#');

});
