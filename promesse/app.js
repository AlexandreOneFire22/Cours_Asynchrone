/*
console.log(1)
console.log(2)

//Simuler une opération qui prendre 3s

setTimeout(()=>{
    console.log("fonction de callback appelée")
},3000)
console.log(3)
console.log(4)
 */

let obtenirBTS = new Promise((resolve,reject)=>{
    // Passer le BTS et obtenir le resultat
    // Simuler le fait que le resultat est arrivé et positif

    //console.log("cc moi c'est 1")

    setTimeout(()=> {

        let btsObtenu = true

        if (btsObtenu) {
            // Promesse tenue
            resolve("BTS obtenu ^^")
        }else {
            // Promesse non tenue
            reject("BTS non obtenue")
        }

    },3000)
})

/*

obtenirBTS
    .then(resultat => {
    console.log(resultat)
})                                  //genre de if else
    .catch(erreur => {
        console.log(erreur)
    })

console.log("et moi c'est 2")

*/

//fonction qui retourne une promesse
//fonction asynchrone

const reussirBTS = () =>{
    console.log("cc moi c'est 1")
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {

            let btsObtenu = true

            if (btsObtenu) {
                // Promesse tenue
                resolve("BTS obtenu ^^")
            }else {
                // Promesse non tenue
                reject("BTS non obtenue")
            }

        },3000)
    })
}

//appeler la fonction asynchrone

reussirBTS()
    .then(resultat => {
        console.log(resultat)
    })
    .catch(erreur => {
        console.log(erreur)
    })

console.log("et moi c'est 2")


//Autre manière d'appeler la fonction
//async (asynchrone) et await (attendre la fin de la fonction)

const traiterReussirBTS = async ()=> {
    try {
        const reponse = await reussirBTS()
        console.log(reponse)
    }catch (error){
        console.log(error) //Promesse non tenue
    }
}










