# Creating a list
my_list = [1, 2, 3, 4, 5]

# Accessing elements
print(my_list[0])  # Output: 1

# Appending elements
my_list.append(6)
print(my_list)  # Output: [1, 2, 3, 4, 5, 6]

# Inserting elements
my_list.insert(1, 'a')
print(my_list)  # Output: [1, 'a', 2, 3, 4, 5, 6]

# Removing elements
my_list.remove('a')
print(my_list)  # Output: [1, 2, 3, 4, 5, 6]

# Popping elements
popped_item = my_list.pop()
print(popped_item)  # Output: 6
print(my_list)  # Output: [1, 2, 3, 4, 5]
#               index     [5  4  3  2  1]
# Slicing lists
print(my_list[1:3])  # Output: [2,3] # negetive index
