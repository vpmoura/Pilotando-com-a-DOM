// querySelectorAll()

const elements = document.querySelectorAll('.one')
console.log(elements)

//querySelectorAll usa NodeList em vez de HTML collection, portanto nesse caso é possível fazer manipulições de dados usando forEach por exemplo

elements.forEach(el => console.log(el))