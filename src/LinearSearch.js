const nums = [4, 8, 1, 2, 10, 15];
const target = 1;

function linearSearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return `Element found at index ${i}`;
    }
  }
  return "Not found";
}

console.log(linearSearch(nums, target));
