class MathOperations:
    def __init__(self):
        pass

    def gcd(self, a, b):
        while b:
            a, b = b, a % b
        return a

# # Create an object of the class
math_ops = MathOperations()
result = math_ops.gcd(48, 18)
print(f"The GCD of 48 and 18 is: {result}")
