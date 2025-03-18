import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../src/app/page';
import { describe } from 'node:test';

describe('Home', () => {
    it('renders the form', () => {
        render(<Home />);
        expect(screen.getByRole('form')).toBeInTheDocument();
    })
})