import { getAllByText, getByText, queryAllByAltText, queryByText, render, screen } from '@testing-library/react';
import App from './App';
import Task from './components/Task';

describe('test the Main component', () => {

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('renders a list of tasks', () => {
    const { queryAllByText } = render(<App />);
    const tasks = queryAllByText('Task'); 
    expect(tasks).toBeTruthy()
  })
  
  //IMPLEMENT THE CLICK OR THE EXISTENCE ONLY
  // test('if click delete button should delete 1 task from the list', () => { 
  //   const { queryAllByText, getAllByText } = render(<App />);
  //   const tasks = queryAllByText(/Task/i); 
  //   const numberOfTasks = tasks.length
  //   console.log(typeof tasks, tasks, numberOfTasks)
  //   const deleteButton = getAllByText('Delete').simulate('click')
  //   console.log(typeof deleteButton, deleteButton)
    
  //   const tasksAgain = queryAllByText(/Task/i); 
  //   expect(tasksAgain.length).toBe(numberOfTasks - 1);
  // })



})
