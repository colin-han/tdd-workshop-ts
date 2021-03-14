interface Dollar {
  amount: number,
  currency: 'dollar' | 'franc';
}

export function dollar(amount: number): Dollar {
  return {amount, currency: 'dollar'}
}

export function franc(amount: number): Dollar {
  return {amount, currency: 'franc'};
}

export function times(source: Dollar, multiplier: number): Dollar {
  return dollar(source.amount * multiplier);
}

export function str(value: Dollar) {
  if (value.currency === 'dollar') {
    return `$${value.amount}`;
  } else {
    return `₣${value.amount}`;
  }
}
