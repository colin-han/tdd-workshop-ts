import * as Money from './money';
import {describe, it, expect} from "@jest/globals";

describe('double', () => {
  it('$5 * 2 = $10', () => {
    const five = Money.dollar(5);
    Money.times(five, 2);
    expect(five.amount).toBe(10);
  });
  it('$5 * 3 = $15', () => {
    const five = Money.dollar(5);
    Money.times(five, 3);
    expect(five.amount).toBe(15);
  });
});

