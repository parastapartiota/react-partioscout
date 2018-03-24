import * as Colors from './colors';
describe('Colors', () => {
  test('BLACK', () => {
    expect(Colors.BLACK).toMatchSnapshot();
  });

  test('WHITE', () => {
    expect(Colors.WHITE).toMatchSnapshot();
  });

  test('BLUE', () => {
    expect(Colors.BLUE).toMatchSnapshot();
  });

  test('YELLOW', () => {
    expect(Colors.YELLOW).toMatchSnapshot();
  });

  test('ORANGE', () => {
    expect(Colors.ORANGE).toMatchSnapshot();
  });

  test('GREEN', () => {
    expect(Colors.GREEN).toMatchSnapshot();
  });

  test('LIGHT_BLUE', () => {
    expect(Colors.LIGHT_BLUE).toMatchSnapshot();
  });

  test('RED', () => {
    expect(Colors.RED).toMatchSnapshot();
  });
});
