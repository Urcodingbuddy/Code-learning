def factorial(n):
    if n == 0:
        return 1
    elif(n<0):
        print("Factorial is not defined for negative numbers.")
        return -1 
    else:
        return n * factorial(n-1)

number = int(input("Enter a number: "))
print("Factorial:", factorial(number))

# n = 5 - 1 = 4 20*3 60*2 120*1 120
