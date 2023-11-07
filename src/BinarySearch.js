const nums = [4, 6, 8, 10, 15, 33, 45];
const target = 45;

function binarySearch(nums, target) {
  let left = 0,
    right = nums.length;
  let mid = 0;

  while (left < right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return `Element found at index ${mid}`;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return "Not Found!!";
}

console.log(binarySearch(nums, target));
