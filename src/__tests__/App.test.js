import { render, screen } from '@testing-library/react';
import App from '../App';

test("renders app's main tag", () => {
  render(<App />);
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
});
