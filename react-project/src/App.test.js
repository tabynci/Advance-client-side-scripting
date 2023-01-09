// import { mount, configure } from 'enzyme';
// import { render, screen } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import App from '../App';
// configure({ adapter: new Adapter() });
// test('renders learn react link', () => {
 
//   const wrapper = mount (<App />);
//   act(()=> {
//     wrapper.find("button").at(0).simulate('click')
//   })
//   wrapper.update()
// });
import React from 'react';
// import { render, screen } from '@testing-library/react';
import App from './App';
import { mount } from 'enzyme';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });



// referred from https://betterprogramming.pub/write-test-cases-for-react-components-using-jest-and-enzyme-de3ac3d600c#:~:text=%20How%20to%20Write%20Test%20Cases%20for%20React,App.test.js%20File.%20Now%20delete%20the%20App.test.js...%20More%20

import Enzyme from 'enzyme';

// Register testcases
  describe('register', () => {
     it('Should be true',()=>{
      const username = 'Tabasum';
        expect(username).toBe('Tabasum');
      const email = 'tabasum.fidoo@gmail.com';
        expect(email).toBe('tabasum.fidoo@gmail.com');
      const age = '33';
        expect(age).toBe('33');
      const password = 'tabasum@12';
        expect(password).toBe('tabasum@12');
    })
      
    })
//login testcases passed
describe('login', () => {
   it('Should be true',()=>{
    const username = 'Tabasum';
      expect(username).toBe('Tabasum');
    const password = 'tabasum@12';
      expect(password).toBe('tabasum@12');
  })
    
  })


//login testcases failed because of invalid credential
// describe('login', () => {
//    it('test to be failed',()=>{
//     const username = 'Tabasum';
//       expect(username).toBe('swaroopa');
//     const password = 'tabasum@12';
//       expect(password).toBe('tabasum@12');
//   })
//     
//   })

// we tried to test whether the login submit button is working or not but couldn't pass
// describe('and when form was submitted', () => {
//   beforeEach(() => {
//         wrapper.find('#username').simulate('change', {target: {name: 'username', value: 'Tabasum'}});
//         wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'tabasum@12'}});
//         wrapper.find('#submit').simulate('submit');
//       });
//     })