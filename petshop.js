let pets = [{nome: "Batman"}, {nome:"Nina"}, {nome:"Garu"}, {nome:"Pucca"}]
const listarPets = () => {
    let conteudo = "";
    for(let pet of pets){
        conteudo+=`
        ---------------------
        ${pet.nome}
        ---------------------`
    }
    return conteudo;
}

const addPet = (novoPet) => {
   return pets.push(novoPet)
}

const buscarPet = (nomePet) => {
    let petsEcontrados =  pets.filter((pet) => {
        return pet.nome == nomePet
    })
    return petsEcontrados
}

module.exports = {listarPets, addPet, buscarPet}