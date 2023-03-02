import { render, screen, userEvent } from '../../utils/test-utils';
import Accordion from './index'

describe('Accordion', () => {
  it('should render the text', () => {
    render(<Accordion />)

    expect(screen.getByText('Accordion')).toBeInTheDocument();
  });
});
