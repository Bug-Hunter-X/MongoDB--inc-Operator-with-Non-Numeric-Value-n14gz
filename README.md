# MongoDB $inc Operator with Non-Numeric Value
This repository demonstrates an uncommon error in MongoDB that can occur when using the `$inc` operator with a non-numeric value.  The `$inc` operator is used to increment a numeric field by a specified value. If the value is not a number (NaN, Infinity, -Infinity), MongoDB will throw an error or exhibit unexpected behavior.

The `bug.js` file contains code that demonstrates this issue. The `bugSolution.js` file provides a corrected version of the code. 

## Bug Description
The bug occurs when `$inc` is used with a `NaN` value.  This results in an invalid update operation. 

## Solution
Ensure that the value used with the `$inc` operator is a valid number.  Error handling should be implemented to catch cases where a non-numeric value is encountered.