def factors(n):
    return [i for i in range(1, n + 1) if n % i == 0]

number = int(input("Enter a number: "))
print("Factors:", factors(number))
# 6