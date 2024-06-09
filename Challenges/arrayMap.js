function hasContiguousSubarrayWithSum(arr, target) { // defined the function hasContiguousSubarrayWithSum
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        // To add the current element to the currentSum
        currentSum += arr[end];
        
        // Remove the numbers from the left if currentSum exceeds the target   
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }
        
        // Check if the currentSum matches the target
        if (currentSum === target) {
            return true;
        }
    }
    
    return false;
}

// Example
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasContiguousSubarrayWithSum(arr, target)); // Output: true