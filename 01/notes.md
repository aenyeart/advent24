# Notes

## Part 1

### Description

Pair up the smallest number in the left list with the smallest number in the right list, then the second-smallest left number with the second-smallest right number, and so on.

Within each pair, figure out how far apart the two numbers are; you'll need to add up all of those distances. For example, if you pair up a 3 from the left list with a 7 from the right list, the distance apart is 4; if you pair up a 9 with a 3, the distance apart is 6.

To find the total distance between the left list and the right list, add up the distances between all of the pairs you found.

### Approach

1. Use Regex to parse the input into two lists
2. Sort both lists
3. Iterate through both lists
   1. Calc delta between values
   2. Add to total distance

## Part 2

### Description

Figure out exactly how often each number from the left list appears in the right list. Calculate a total similarity score by adding up each number in the left list after multiplying it by the number of times that number appears in the right list.

### Approach

1. Create frequency map of all entries in rightList.
2. Init total = 0
3. Iterate through leftList
   1. Multiply left value by its corresponding value in the frequency map.
   2. Add this to the total

Seems like there may be a way to use Set.union instead of iterating through leftList. Not sure if this would be more efficient:

1. Reduce leftList and rightList to frequency maps.
2. Init total = 0
3. For each key in leftMap
   1. IF same key in rightMap
      1. Calculate (key \* freqLeft \* freqRight)
      2. Add to total
