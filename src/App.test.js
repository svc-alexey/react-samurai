import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';
import SNApp from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<SNApp />);
//   const linkElement = getByText("Profile");
//   expect(linkElement).toBeInTheDocument();
// });


it('test without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <SNApp/>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});