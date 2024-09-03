# Instructions
## Canonical Test:
We'd like you to write a calculator to perform basic arithmetic, but using an alternative syntax for writing the expressions.

In this alternative notation, the operators precede the operands. For example while in traditional notation we might write 3 + 4, instead we would write + 3 4.

The main advantage of this format is that it does not require parentheses for any ambiguous expression.

| Traditional Notation     | Alternative Notation  |
|--------------------------|-----------------------|
| 3 + 4                    | + 3 4                 |
| 3 - (4 * 5)              | - 3 * 4 5             |
| (3 + 4) * 5              | * + 3 4 5             |
| (3 - 4) / (5 + 2)        | / - 3 4 + 5 2         |

In the code provided, the app/calculator.js file exports a calculate function. This function is expected to take an alternative expression as a string, and output the numerical solution.