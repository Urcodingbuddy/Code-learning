class Queue:
    def __init__(self):
        self.queue = []

    def is_empty(self):
        return len(self.queue) == 0

    def enqueue(self, item):
        self.queue.append(item)

    def dequeue(self):
        if not self.is_empty():
            return self.queue.pop(0)
        else:
            return "Queue is empty"

    def peek(self):
        if not self.is_empty():
            return self.queue[0]
        else:
            return "Queue is empty"

    def size(self):
        return len(self.queue)

# Creating a queue object
q = Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

print("Dequeued item:", q.dequeue())  # Output: Dequeued item: 1
print("Front item:", q.peek())  # Output: Front item: 2
print("Queue size:", q.size())  # Output: Queue size: 2
