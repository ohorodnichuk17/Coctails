export default async function getCoctail(){
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m')
    .then((data) => {
        if(data.ok) return data.json();
        throw('Error download');
    });
}