import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { Movie } from './components/Movie';

test('renders label for input', () => {
  render(<App />);
  const labelElement = screen.getByText(/título/i);
  expect(labelElement).toBeInTheDocument();
});
