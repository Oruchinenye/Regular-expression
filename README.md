# Regular-expression
Regular expressions are character literals used in matching patterns in text. Regular expression is also a pattern that describes a certain amount of text. It is consist of literal characters which match themselves, and special characters, which have a specific meaning. Below is a brief description that explains the regex pattern I came up with.

```
 var cardno = /^(?:5[1-5][0-9]{14})$/;

```
To remove spaces and hyphens from a credit card number in the Javascript function provided, I used a simple regular expression (regex) pattern: /\s|-/g'. This pattern matches any whitespace ('\s') or hyphen (-) characters and replaces them with an empty string.

The '/s/' part of the pattern matches any whitespace character, including spaces, tabs, and line breaks. The '|' symbol is a logical OR, which means it matches either a whitespace character or a hyphen. The '-' character is enclosed in forward slashes to escape it and treat it as a literal character. The 'g' flag at the end of the pattern ensures that all occurrences of the matched pattern are replaced, not just the first one.

This regular expression pattern is a simple and efficient way to clean up credit card numbers before further processing. It's a common practice to remove any non-numeric characters from credit card numbers to ensure accurate validation and identification of the card type.

The regualar expression (cardno) is used to match a text that begins with a character 5 followed by a number in a range of 1 to 5, followed by another number in the range of 0 to 9 that should appear in maximum of 14 times. The string, 5489542225671214, satisfies the regular expressions (cardno). the string 5689542225671214 does not satisfy the regular expression (cardno).
