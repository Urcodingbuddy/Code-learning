let arr = [1, 2, 3, 4, 5, 6]
arr[0] = 655;
console.log(arr)
console.log(arr.length)
console.log(arr[1])
console.log(typeof arr)

console.log(arr.toString())
console.log(arr.join("Ye wala Fir"))    

a = [1,2,3,4,5,6]
a.pop()
console.log(a)

a.push(60)

console.log(a)

a.push("ansh")

console.log(a)

a.shift()

console.log(a)

delete a[3]

console.log(a)


let a3 = [11,12,13,14,15]
let a1 = [1,2,3,4,5]
let a2 = [6,7,8,9,10]

 let a4 = a1.concat(a3,a2)

 console.log(a1)


 let numbers = [1, 2, 3, 4, 5] 
numbers.splice(1, 2)    
numbers.splice(1, 3)  
numbers.splice(1, 3, 222, 333) 
(4) [1, 222, 333, 5]