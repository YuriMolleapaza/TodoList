import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom matchers
import { TodoList } from '../TodoList';

describe('TodoList', () => {1
    it('renderiza el componente TodoList', () => {
        render(<TodoList />);
        const element = screen.getByText(/title/i); // Verifica si aparece el campo 'title'
        expect(element).toBeInTheDocument();
    });
});