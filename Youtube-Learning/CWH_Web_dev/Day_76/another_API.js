// Example POST method implementation:
async function postData(url = "", data = {}) {
    
  let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
let data = await x.json() 
return data
  }
  
  postData("https://example.com/answer", { answer: 42 }).then((data) => {
    console.log(data); 
  });