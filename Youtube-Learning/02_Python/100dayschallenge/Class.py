class Dog:
    # Class attribute
    species = "Dhruv Shepherd"

    def __init__(self, name, age):
        # Instance attributes
        self.name = name
        self.age = age

    # Instance method
    def description(self):
        return f"{self.name} is {self.age} years old"

    # Another instance method
    def speak(self, sound):
        return f"{self.name} says {sound}"

# Creating objects of the Dog class
dog1 = Dog("Buddy", 3)
dog2 = Dog("Milo", 5)

print(dog1.description())
print(dog2.description())
print(dog1.speak("Modi Modi"))
