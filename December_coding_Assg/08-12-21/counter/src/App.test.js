import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals'
import App from './App';
import { Counter } from './components/Counter';
import { Slider } from './components/Slider';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React/i)
  expect(linkElement).toBeInTheDocument();
});

test('check does button get incremented by 5',()=>{
  const mockfunction = jest.fn();
  render(<Counter />);

  //getting element bytext
  const incrementBtn = screen.getByText("increment");
  const decrementBtn = screen.getByText(/decrement/);
    //getting element bytextid
  const countervalue = screen.getByTestId("counter-value");

  //expecting the value to match
  expect(incrementBtn).toBeInTheDocument();
  expect(decrementBtn).toBeInTheDocument();
  expect(countervalue).toHaveTextContent(0);
  //firing click event to increase counter
  fireEvent.click(incrementBtn);
  fireEvent.click(incrementBtn);
  expect(countervalue).toHaveTextContent(2)
  fireEvent.click(decrementBtn);
  expect(countervalue).toHaveTextContent(1)
})


describe("testing slider",()=>{

  test('should ', () => {
    render(<Slider/>)
  
    const slider = screen.getByTestId("slider");
    const prevBtn = screen.getByText("Prev");
    const nextBtn = screen.getByText("Next");
  
    expect(slider).toBeInTheDocument();
    expect(prevBtn).toBeInTheDocument();
    expect(prevBtn).toBeDisabled();
    // expect(prevBtn).not.toBeDisabled();
    // expect(slider).children().toHaveLength(1);    
  });
})