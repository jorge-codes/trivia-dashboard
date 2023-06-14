import { render, screen } from '@testing-library/react';
import CategoryList from '../components/CategoryList';

const mockTitle = 'Categories';
const mockCategories = [
  { id: 1, name: 'Music', color: '#ffffff', organization: 1 },
  { id: 2, name: 'Art', color: '#00ffff', organization: 1 },
];

describe('CategoryList component', () => {
  it('must display category titles', () => {
    render(<CategoryList title={mockTitle} categories={mockCategories} />);

    expect(screen.getByText(/Categories/i)).toBeInTheDocument();
    expect(screen.getByText(/Music/i)).toBeInTheDocument();
    expect(screen.getByText(/Art/i)).toBeInTheDocument();
  });
});
