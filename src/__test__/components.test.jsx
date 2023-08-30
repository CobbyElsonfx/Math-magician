import { render } from '@testing-library/react';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Calculator from '../components/Calculator';
import Footer from '../components/Footer';
import Quote from '../components/Quote';

describe('Testing Calculator Components', () => {
  test('should render home component', () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });

  test('should render Navbar', () => {
    const navbar = render(<Navbar />);
    expect(navbar).toMatchSnapshot();
  });

  test('should render Calculator', () => {
    const calculator = render(<Calculator />);
    expect(calculator).toMatchSnapshot();
  });

  test('should render Footer', () => {
    const footer = render(<Footer />);
    expect(footer).toMatchSnapshot();
  });

  test('should render Quote', () => {
    const quote = render(<Quote />);
    expect(quote).toMatchSnapshot();
  });
});
