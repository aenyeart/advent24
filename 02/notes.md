# Notes

## Part 1

### Description

The unusual data (your puzzle input) consists of many reports, one report per line. Each report is a list of numbers called levels that are separated by spaces. For example:

7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
This example data contains six reports each containing five levels.

The engineers are trying to figure out which reports are safe. The Red-Nosed reactor safety systems can only tolerate levels that are either gradually increasing or gradually decreasing. So, a report only counts as safe if both of the following are true:

- The levels are either all increasing or all decreasing.
- Any two adjacent levels differ by at least one and at most three.

In the example above, the reports can be found safe or unsafe by checking those rules:

7 6 4 2 1: Safe because the levels are all decreasing by 1 or 2.
1 2 7 8 9: Unsafe because 2 7 is an increase of 5.
9 7 6 2 1: Unsafe because 6 2 is a decrease of 4.
1 3 2 4 5: Unsafe because 1 3 is increasing but 3 2 is decreasing.
8 6 4 4 1: Unsafe because 4 4 is neither an increase or a decrease.
1 3 6 7 9: Safe because the levels are all increasing by 1, 2, or 3.
So, in this example, 2 reports are safe.

Analyze the unusual data from the engineers. How many reports are safe?

### Approach

1. Parse & format input data as a matrix.
2. Iterate through outer array using reducer/accumulator. Per inner array:
   1. Init ascending = arr[0] > arr[1] ? false : true
   2. Iterate through elements
      1. IF arr[i] == arr[i+1] RETURN 0
      2. IF arr[i] > arr[i+1] AND ascending == true RETURN 0
      3. IF arr[i] < arr[i+1] AND ascending =! true RETURN 0
      4. IF absolute value of (arr[i]-arr[i+1]) > 3 RETURN 0
      5. CONTINUE
   3. RETURN 1
3. RETURN accumulated count

## Part 2

### Description

The engineers are surprised by the low number of safe reports until they realize they forgot to tell you about the Problem Dampener.

The Problem Dampener is a reactor-mounted module that lets the reactor safety systems tolerate a single bad level in what would otherwise be a safe report. It's like the bad level never happened!

Now, the same rules apply as before, except if removing a single level from an unsafe report would make it safe, the report instead counts as safe.

More of the above example's reports are now safe:

7 6 4 2 1: Safe without removing any level.
1 2 7 8 9: Unsafe regardless of which level is removed.
9 7 6 2 1: Unsafe regardless of which level is removed.
1 3 2 4 5: Safe by removing the second level, 3.
8 6 4 4 1: Safe by removing the third level, 4.
1 3 6 7 9: Safe without removing any level.
Thanks to the Problem Dampener, 4 reports are actually safe!

Update your analysis by handling situations where the Problem Dampener can remove a single level from unsafe reports. How many reports are now safe?

### Approach

Change assessment of incrementing (to account for possible removal of second value)

1. Add a counter that gets incremented whenever a test fails.
   1. BUT, when the test is failed, must compare next value to PREVIOUS value, not current value
2. If the counter reaches 2, the test fails.

- Could do additional pointer comparing arr[i] and arr[i+2]
- could remove problem element from array and call test function once more. would need to add a var to track if this is first pass or second pass

### Example

[1, 3, 2, 4, 5]
i=0, e=1,
