import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe ('About component', () => {
    // 1

  it('renders', () => {
    render(<About />);
  });

    //2

    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment} = render (<About />);
        expect (asFragment()).toMatchSnapshot();
      });

})