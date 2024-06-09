__#COA Taskforce Take Home Challenge__

__*Overview*__

This is my submission for the COA Taskforce Take Home Challenge! This repository contains my solutions for the interactive photo gallery and two coding challenges. Below are the setup instructions and explanations of my approach for each challenge.

__*Setup Instructions*__

*Clone Repository:* Cloned this repository to my local machine using the git clone <repository_url> commmand

*Open in VS Code:* Opened the cloned repository in Visual Studio Code (VS Code) by navigating to the repository folder in my terminal and using the command code .

__*Interactive Photo Gallery*__

*Objective:* Implement an interactive photo gallery based on provided Figma designs.

*Tools Used:* HTML, CSS, JavaScript

__*Approach:*__

HTML Structure: Created the necessary HTML elements for the gallery layout and image display.

CSS Styling: Styled the gallery components used CSS to match the Figma designs, ensuring responsiveness across different screen sizes.

__*Coding Challenges*__

__*Challenge 1: Array Manipulation*__

*Objective:* Determine if there exists a contiguous subarray within an array that sums up to a target.

*Approach:*

I used the sliding window technique to efficiently search for a contiguous subarray that sums up to the target.
This method keeps track of the current sum of the elements between two pointers (start and end).
As I iterate through the array, I adjust the window size by moving the start pointer to the right when the current sum exceeds the target, thus reducing the window size and bringing the sum back down.
If at any point the current sum equals the target, we return true.

__*Challenge 2: String Transformation*__

*Objective:* Given a string, transform it based on certain rules.

If the length of the string is divisible by 3, reverse the entire string.
If the length of the string is divisible by 5, replace each character with its ASCII code.
If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the specified order.

*Approach:*

I used conditional statements to apply different transformations based on the divisibility of the string's length.
The operations are checked in order of divisibility by 15, 3, and 5, with the most complex case (divisible by 15) being handled first.
For strings divisible by 15, the string is first reversed and then each character is replaced by its ASCII code.
For strings divisible by 3 but not by 15, the string is simply reversed.
For strings divisible by 5 but not by 3 or 15, each character is replaced by its ASCII code.

__Thank you for reviewing my submission!__
