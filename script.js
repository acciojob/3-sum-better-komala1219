function threeSum(arr, target) {
// write your code here


	// Sort the array in non-descending order
  arr.sort((a, b) => a - b);

  let closestSum = Infinity;

  // Loop through each element in the array as a potential first element of the triplet
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    // Loop through all pairs of elements (left, right) that come after the i-th element
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      // Update the closest sum if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      // Move the left pointer to increase the sum if the current sum is too small
      if (sum < target) {
        left++;
      }
      // Move the right pointer to decrease the sum if the current sum is too large
      else {
        right--;
      }
    }
  }

  return closestSum;
  
}

module.exports = threeSum;
