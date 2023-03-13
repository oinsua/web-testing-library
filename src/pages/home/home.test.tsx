import { render, screen, fireEvent, userEvent, waitFor } from '../../utils/test-utils';
import Home from './index';
import RouterWrapper from '../../utils/router-wrapper';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Login from '../login';


describe('Home', () => {
  beforeEach(() => {
    render(<Home />, { wrapper: RouterWrapper });
  });
  it('should render the text', () => {
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });
  it('should render the images', () => {
    expect(screen.getByAltText(/Vite logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/React logo/i)).toBeInTheDocument();
  });
  it('should render the button', async () => {
    const button = document.querySelector('[data-testid=counter]');
    expect(button?.innerHTML).toBe(`count is 0`);
  });
  it('when to click button', () => {
    // const button = document.querySelector('[data-testid=counter]');
    const button = screen.getByRole("button", { name: /count/i });
    let count = 0;

    if (button !== null) {
      fireEvent.click(button);
      count++;
    }
    expect(button?.innerHTML).toBe(`count is ${count}`);
  });
  it('should be a link that have href value to "/login"', async () => {
    const link = screen.getByRole('link', { name: /Login/i })
    expect(link.getAttribute('href')).toBe('/login')
  });
});

describe('Home Router', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </MemoryRouter>)
  })
  it('User can navigate to login screen', async () => {
    userEvent.click(screen.getByRole('link', { name: /Login/i }))
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /you are on the login page/i })).toBeInTheDocument()
    })
  })
})