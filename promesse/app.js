console.log(1)
console.log(2)

//Simuler une opération qui prendre 3s

setTimeout(()=>{
    console.log("fonction de callback appelée")
},3000)
console.log(3)
console.log(4)