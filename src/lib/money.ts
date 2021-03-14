interface Dollar {
  amount: number
}

export function times(source: Dollar, multiplier: number) {
  source.amount *= multiplier;
}

export function dollar(amount: number) {
  return { amount }
}
