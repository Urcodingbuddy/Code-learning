def is_palindrome(s):
    return s == s[::-1]

string = input("Enter a string: ")
if is_palindrome(string):
    print("The string is a palindrome")
else:
    print("The string is not a palindrome")


a = is_palindrome(50)
#  W  O  R  D
# -4 -3 -2 -1
#  D  R  O  W