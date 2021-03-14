import * as Money from './money';
import {describe, it, expect} from "@jest/globals";

describe('double', () => {
  it('$5 * 2 = $10', () => {
    const five = Money.dollar(5);
    const ten = Money.times(five, 2);
    expect(ten.amount).toBe(10);
  });
  it('$5 * 3 = $15', () => {
    const five = Money.dollar(5);
    const fifteen = Money.times(five, 3);
    expect(fifteen.amount).toBe(15);
  });

  it('times function should have no side effect', () => {
    const five = Money.dollar(5);
    const ten = Money.times(five, 2);
    expect(ten.amount).toBe(10);
    const fifteen = Money.times(five, 3);
    expect(fifteen.amount).toBe(15);
  });

  it('test to string', () => {
    const fiveDollar = Money.dollar(5);
    expect(Money.str(fiveDollar)).toEqual("$5");
    const fiveFranc = Money.franc(5);
    expect(Money.str(fiveFranc)).toEqual("₣5")
  });
});

