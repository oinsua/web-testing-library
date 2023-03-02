import { render, screen, userEvent, fireEvent, waitFor } from './utils/test-utils';
import App from './App'

describe('App', () => {
    beforeEach(() => {
        render(<App />)
    })
    it('should render the text', () => {
        expect(screen.getByText('Vite + React')).toBeInTheDocument();
    });
    it('should render the images', () => {
        expect(screen.getByAltText(/Vite logo/i)).toBeInTheDocument();
        expect(screen.getByAltText(/React logo/i)).toBeInTheDocument();
    });
    it('should render the button', async () => {
        const button = document.querySelector("[data-testid=counter]")
        expect(button?.innerHTML).toBe(`count is 0`);
    });
    it('when to click button', () => {
        const button = document.querySelector("[data-testid=counter]")
        let count = 0

        if (button !== null) {
            fireEvent.click(button)
            count++
        }
        expect(button?.innerHTML).toBe(`count is ${count}`);
    });
});