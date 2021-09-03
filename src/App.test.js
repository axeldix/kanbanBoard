import { render } from '@testing-library/react';
import App from './App';

describe('test the Main component', () => {
  
  test('renders a list of tasks', () => {
    const { queryAllByText } = render(<App />);
    const tasks = queryAllByText('Task'); 
    expect(tasks).toBeTruthy()
  })
})
