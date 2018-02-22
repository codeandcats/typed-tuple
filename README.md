# typed-tuple

A function that returns a typed tuple from an array of literals.

Based on this excellent [gist](https://gist.github.com/jcalz/381562d282ebaa9b41217d1b31e2c211/) by [Joe Calzaretta](https://github.com/jcalz).

## Install
```sh
npm install typed-tuple --save
```

then...

```typescript
import tuple from 'tuple';
```

## The Problem

Take the following string union type.

```typescript
type Suit = 'hearts' | 'diamonds' | 'spades' | 'clubs';
```

This is great for restricting a variable to one of four suits. But what if you also want a list of all possible suits?

```typescript
type Suit = 'hearts' | 'diamonds' | 'spades' | 'clubs';

const ALL_SUITS: Suit[] = ['hearts', 'diamonds', 'spades', 'clubs'];
```

The problem with this is `ALL_SUITS` is actually typed as `Suit[]`. But `Suit[]` can also mean any of the following values `[]`, `['hearts']`, `['hearts', 'hearts']`, etc. We've also had to repeat ourselves.

We could explicitly type it like this:

```typescript
type Suit = 'hearts' | 'diamonds' | 'spades' | 'clubs';

const allSuits: ['hearts', 'diamonds', 'spades', 'clubs'] = ['hearts', 'diamonds', 'spades', 'clubs'];
```

This gets the typing right, but we've made our code even less DRY - ack!

## The Solution

We can use typed-tuple to reduce all this code:

```typescript
import tuple from 'typed-tuple';

const ALL_SUITS = tuple('hearts', 'diamonds', 'spades', 'clubs');

type Suit = typeof ALL_SUITS[number];
```

Hooray! At last...
- `ALL_SUITS` is the correct type of `['hearts', 'diamonds', 'spades', 'clubs']`
- `Suit` is the correct type of `'hearts' | 'diamonds' | 'spades' | 'clubs'`
- And our code is now nice and DRY

