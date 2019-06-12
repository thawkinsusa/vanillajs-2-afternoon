let characters = [];
let list = document.getElementById('list')
let search = document.getElementById('input')
console.dir(list)

fetch('https://randomuser.me/api/')
    .then(function(response){
        console.log(response.json());
        return response.json()
    })
    .then(function(){
        console.log(response);
        characters.push(...response.results)
    })
  console.log(characters)
function filterText(){
      let filtered = characters.filter(val => val.name.toLowerCase().includes(this.value.toLowerCase()))
      .map(val => `<li>${val.name}</li>`)

  if (filtered.length) {
      render(filtered)
  }
}
console.log(filterText(characters))

  function render(){
      let html = characters.map(val => `<li>${val.name}</li>`).join('');
      list.innerHTML = html;
    }

