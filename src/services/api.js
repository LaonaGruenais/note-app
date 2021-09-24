const getNotes = async () => {
    const response = await window.fetch('https://strapi.myidea.fr/notes')
    const result = await response.json()
    console.log(result)
    return result
}

const addNote = async (note) => {
const options = {
    methode: 'POST',
    body: JSON.stringify(note)
    }
    try{
        const response = await window.fetch('https://strapi.myidea.fr/notes', options);
        const result = await response.json();
        console.log(response)
    } catch (e){
        console.error(e)
    }
}

module.exports = {
    getNotes,
    addNote,
}