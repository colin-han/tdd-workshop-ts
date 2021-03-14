interface Dollar {
  amount: number
}

export function dollar(amount: number): Dollar {
  return {amount}
}

export function times(source: Dollar, multiplier: number): Dollar {
  return dollar(source.amount * multiplier);
}

export function str(value: Dollar) {
  return '$' + value.amount;
}
