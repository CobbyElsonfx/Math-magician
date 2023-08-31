import operate from '../logic/operate';

describe('Testing operate function', () => {
  test('testing addition', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });
  test('testing subtraction', () => {
    expect(operate(2, 1, '-')).toBe('1');
  });
  test('testing multiplication', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });
  test('testing division', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });
  test('testing modulo', () => {
    expect(operate(4, 2, '%')).toBe('0');
  });
  test('testing unknown operation', () => {
    expect(() => operate(4, 2, 'a')).toThrow("Unknown operation 'a'");
  });
  test('testing division by zero', () => {
    expect(operate(4, 0, '÷')).toBe("Can't divide by 0.");
  });
  test('testing modulo by zero', () => {
    expect(operate(4, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
