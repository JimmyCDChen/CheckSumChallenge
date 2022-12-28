# Checksum

## Part 1

In this problem, you will build an application which calculates the checksum of a data set. The input comes in the form of a table. For each row in the table, determine the difference between the largest value and the smallest value; the checksum is the sum of all those differences.

### Example
Input table:
```
5 1 9 5
7 5 3
2 4 6 8
```

* The first row's largest and smallest values are 9 and 1. The difference is 8.
* The second row's largest and smallest values are 7 and 3. The difference is 4.
* The third row's largest and smallest values are 8 and 2. This row's difference is 6.
In this example, the checksum would be 8 + 4 + 6 = 18


### Notes/Tips
* Make sure to be prepared to talk through your thought process! We'll be interested in hearing how you approach the problem
* We're looking for code quality, but please be conscious of time
* Think about edge cases

### Input
```
798 1976 1866 1862 559 1797 1129 747 85 1108 104 2000 248 131 87 95
201 419 336 65 208 57 74 433 68 360 390 412 355 209 330 135
967 84 492 1425 1502 1324 1268 1113 1259 81 310 1360 773 69 68 290
169 264 107 298 38 149 56 126 276 45 305 403 89 179 394 172
3069 387 2914 2748 1294 1143 3099 152 2867 3082 113 145 2827 2545 134 469
3885 1098 2638 5806 4655 4787 186 4024 2286 5585 5590 215 5336 2738 218 266
661 789 393 159 172 355 820 891 196 831 345 784 65 971 396 234
4095 191 4333 161 3184 193 4830 4153 2070 3759 1207 3222 185 176 2914 4152
131 298 279 304 118 135 300 74 269 96 366 341 139 159 17 149
1155 5131 373 136 103 5168 3424 5126 122 5046 4315 126 236 4668 4595 4959
664 635 588 673 354 656 70 86 211 139 95 40 84 413 618 31
2163 127 957 2500 2370 2344 2224 1432 125 1984 2392 379 2292 98 456 154
271 4026 2960 6444 2896 228 819 676 6612 6987 265 2231 2565 6603 207 6236
91 683 1736 1998 1960 1727 84 1992 1072 1588 1768 74 58 1956 1627 893
3591 1843 3448 1775 3564 2632 1002 3065 77 3579 78 99 1668 98 2963 3553
2155 225 2856 3061 105 204 1269 171 2505 2852 977 1377 181 1856 2952 2262
```


## Part 2

Now we're going to focus on the evenly divisible values in our input table. The goal is to find the only two numbers in each row where one evenly divides the other - that is, where the result of the division operation is a whole number. Find these numbers on each line, divide them, then add each line's result.

For example, in this table:

```
5 9 2 8
9 4 7 3
3 8 6 5
```

* In the first row, the only two numbers that evenly divide are 8 and 2; the result of this division is 4.
* In the second row, the two numbers are 9 and 3; the result is 3.
* In the third row, the result is 2.

In this example, the sum of the results would be 4 + 3 + 2 = 9.

What is the sum of each row's result in the input provided for Part 1?

---

## What We’re Looking For
We’re not assessing puzzle-solving ability with this question, we’re assessing overall code quality. We’ll evaluate your assignment by looking for a few things:


**Functionality**
* Does the code do what it should?
* Does it handle edge cases?
  
**Quality**
* Is the code readable & maintainable?
* Is the code well-organized?

**Performance**
* Does the code balance reasonably fast execution with readability?

**Pragmatism**
* Are the above factors balanced well against the limited time to implement the solution?

---
## Submission
Please zip your entire exercise directory and send it back to us via email. You are free, but not required, to create a Git repository for your work, just remember to include your .git directory in your zip if you do!


Best of luck! Thanks for taking the time to interview with Mailchimp.