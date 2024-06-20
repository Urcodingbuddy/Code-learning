class Stack:
    def __init__(self):
        self.stack = []

    def push(self, item):
        self.stack.append(item) #push

    def pop(self):
        if not self.is_empty():
            return self.stack.pop()
        else:
            return "Stack is empty"

    def peek(self):
        if not self.is_empty():
            return self.stack[-1]
        else:
            return "Stack is empty"

    def is_empty(self):
        return len(self.stack) == 0

# Creating a stack
my_stack = Stack()

# Performing stack operations
my_stack.push(10)
my_stack.push(20)
my_stack.push(30)

print(my_stack.peek())  # Output: 30

print(my_stack.pop())   # Output: 30
print(my_stack.pop())   # Output: 20

print(my_stack.is_empty())  # Output: False

print(my_stack.pop())   # Output: 10
print(my_stack.is_empty())  # Output: True
