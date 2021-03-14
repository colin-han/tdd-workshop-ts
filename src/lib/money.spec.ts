import { double, power } from './money';
import {describe, it, expect} from "@jest/globals";

describe('double', () => {
  it('double 3 should be 6', () => {
    expect(double(3)).toBe(6);
  })
});

describe('power', () => {
  it ('2 power 4 should be 16', () => {
    expect(power(2, 4)).toBe(16);
  })
});
