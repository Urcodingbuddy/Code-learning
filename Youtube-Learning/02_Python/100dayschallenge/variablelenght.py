# import math
# def add(*args):
#     return sum(args) # a+b+c+d

# a = add(1, 2, 3, 4,5,85,8,1,5,1,56,1,5263)
# print(a)

# def print_info(**kwargs): # (a, b)
#     for key, value in kwargs.items():
#         print(f"{key}: {value}")

# print_info(name="Alice", age=30)


# Function to reverse a string
# def reverse_string(input_string):
#     return input_string[::-1] #colan :o)-=>

# # Input string from user
# input_string = input("Enter a string: ")

# # Print reversed string
# print("Reversed string:", reverse_string(input_string))


# Creating a 2D list (3x3 matrix)
# matrix = [
#     [1, 2, 3],
#     [4, 5, 6],
#     [7, 8, 9]
# ]

# # Printing the 2D list
# for row in matrix:
#     print(row)
# # print(matrix)

# __dict__


# class ExampleClass:
#     """This is an example class."""
#     def __init__(self):
#         self.value = 42

# # Creating an instance of the class
# example = ExampleClass()

# Accessing built-in class attributes

# print(example.__class__.__name__)  # Output: ExampleClass
# print(example.__class__.__doc__)   # Output: This is an example class.
# print(example.__class__.__module__)# Output: __main__

# b = {"Apple"}
# #..-5-4-3-2-1    


# # Creating a list
# my_list = [1, 2, 3, 4, 5]

# # Accessing list elements
# print(my_list[0])  # Output: 1
# print(my_list[1]) # Output: 2 (Negative Indexing)
# print(my_list[-2]) # Output: 4 (Negative Indexing)


# Function to perform linear search
def linear_search(lst, target):
    for index, value in enumerate(lst):
        if value == target:
            return index
    return -1

# List of values
values = [10, 20, 30]

# Target value to search
target_value = 80

# Perform linear search
result = linear_search(values, target_value)

if result != -1:
    print(f"Value {target_value} found at index {result}.")
else:
    print(f"Value {target_value} not found in the list.")
