export type BaseValueType = string | number | boolean | undefined | null | void | {};

/**
 * Infers a tuple type for up to 26 values (add more here if ever needed).
 *
 * Example usage:
 *
 *   const ALL_SUITS = tuple('hearts', 'diamonds', 'spades', 'clubs');
 *
 *   type AllSuits = typeof ALL_SUITS; // same as: type AllSuits = ['hearts', 'diamonds', 'spades', 'clubs']
 *
 *   type Suit = AllSuits[number];  // same as: type Suit = 'hearts' | 'diamonds' | 'spades' | 'clubs';
 *
 */
// <overloads />

function tuple(...args: any[]): any[] {
  return args;
}

export default tuple;
