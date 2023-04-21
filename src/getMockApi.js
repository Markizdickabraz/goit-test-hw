export default function getMockApi() {
    fetch('https://6442af8f76540ce22592fcfe.mockapi.io/users', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
    if (res.ok) {
      console.log(res.json)
      return res.json();
  }
  // handle error
}).then(tasks => {
  // Do something with the list of tasks
}).catch(error => {
  // handle error
})
}