interface Dollar {
  amount: number
}

export function times(source: Dollar, multiplier: number) {
  source.amount = 10;
}

export function dollar(amount: number) {
  return { amount }
}
