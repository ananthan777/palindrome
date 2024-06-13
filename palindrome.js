<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Palindrome Checker</title>
</head>
<body>
    <h1>Palindrome Checker</h1>
    <form id="palindromeForm">
        <label for="userInput">Enter a string:</label>
        <input type="text" id="userInput" name="userInput" required>
        <button type="submit">Check</button>
    </form>
    <p id="result"></p>

    <script>
        document.getElementById('palindromeForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting

            const userInput = document.getElementById('userInput').value;
            const result = document.getElementById('result');

            if (isPalindrome(userInput)) {
                result.textContent = `"${userInput}" is a palindrome.`;
            } else {
                result.textContent = `"${userInput}" is not a palindrome.`;
            }
        });

        function isPalindrome(str) {
            const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
            const reversedStr = cleanedStr.split('').reverse().join('');
            return cleanedStr === reversedStr;
        }
    </script>
</body>
</html>
