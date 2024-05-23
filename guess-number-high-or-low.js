/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

 

Example 1:

Input: n = 10, pick = 6
Output: 6
*/

var guessNumber = function (n) {
  if (n === 1) return 1;
  let high = n;
  let low = 1;
  let mid = Math.floor(n / 2);
  while (guess(mid) !== 0) {
    const res = guess(mid);
    if (res === -1) {
      high = mid - 1;
      mid = Math.floor((low + high) / 2);
    } else {
      low = mid + 1;
      mid = Math.floor((low + high) / 2);
    }
  }

  return mid;
};
