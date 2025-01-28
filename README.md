# JavaScript Loose Comparison Bug

This repository demonstrates an unusual behavior of JavaScript's loose equality operator (`==`) when comparing `NaN` and `+0` with `-0`.

## Problem

The loose equality operator (`==`) does not work as expected in certain edge cases involving `NaN` and signed zeros.
- `NaN` is never equal to itself, including `NaN == NaN` which is `false`.
- `+0` and `-0` are considered equal under loose comparison: `+0 == -0` is `true`.
This behavior might lead to unexpected results in code that relies on loose comparisons.

## Solution

The best solution is always using strict equality (`===`).  Strict equality (`===`) does not perform type coercion, providing more predictable results.

## Usage

Clone this repository to run the example and experiment with the loose and strict comparison operators.