import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
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
    const homeLink = screen.getByText('Home');
    const calculatorLink = screen.getByText('Calculator');
    const quoteLink = screen.getByText('Quote');
    expect(homeLink).toBeInTheDocument();
    expect(calculatorLink).toBeInTheDocument();
    expect(quoteLink).toBeInTheDocument();
    expect(navbar).toMatchSnapshot();
  });

  test('should render Calculator', () => {
    const calculator = render(<Calculator />);
    const button = screen.getByText('AC');
    const buttonOne = screen.getByText('1');
    const buttonTwo = screen.getByText('2');
    const buttonThree = screen.getByText('3');
    const buttonFour = screen.getByText('4');
    const buttonFive = screen.getByText('5');
    const buttonSix = screen.getByText('6');
    const buttonSeven = screen.getByText('7');
    const buttonEight = screen.getByText('8');
    const buttonNine = screen.getByText('9');
    expect(button).toBeInTheDocument();
    expect(buttonOne).toBeInTheDocument();
    expect(buttonTwo).toBeInTheDocument();
    expect(buttonThree).toBeInTheDocument();
    expect(buttonFour).toBeInTheDocument();
    expect(buttonFive).toBeInTheDocument();
    expect(buttonSix).toBeInTheDocument();
    expect(buttonSeven).toBeInTheDocument();
    expect(buttonEight).toBeInTheDocument();
    expect(buttonNine).toBeInTheDocument();
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
