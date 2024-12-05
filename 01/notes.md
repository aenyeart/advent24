# Notes

## Approach:

1. Use Regex to parse the input into two lists
2. Sort both lists
3. Iterate through both lists
   1. Calc delta between values
   2. Add to total distance

## Description

Pair up the smallest number in the left list with the smallest number in the right list, then the second-smallest left number with the second-smallest right number, and so on.

Within each pair, figure out how far apart the two numbers are; you'll need to add up all of those distances. For example, if you pair up a 3 from the left list with a 7 from the right list, the distance apart is 4; if you pair up a 9 with a 3, the distance apart is 6.

To find the total distance between the left list and the right list, add up the distances between all of the pairs you found.
