let icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const container = document.getElementById("my_icons-box");

printToPage(icons , container);

const types = getUniquePropertyValues(icons, "type"); 
console.log(types);







// const arrayType = []; 
// icons.filter((element, index) => {
//     if (!arrayType.includes(icons["type"])) {
//         arrayType.push(icons["type"]);
//     }
// });
function getUniquePropertyValues(array, property) {
    const types = [];

    array.forEach((element, index) => { 
        if (!types.includes(element[property])) {
            types.push(element[property]);
        }
    })

    return types;
}
/**
 * Mostro in pagina all'interno del container, in HTML, tutti gli elemetni dell'array dato
 * @param array L'array da stampare
 * @param container Il container (HTML Object) all'interno del quale inserire gli elementi
 */
 function printToPage(array, container) {

    array.forEach((element) => {

        const {name, prefix, type, family,} = element;
        
        //aggiungo all'html del container il nostro contenueto in html
        container.innerHTML += 
        `<div class="col-2 my_box my_box-${type}">
            <i class="${family} ${prefix}${name}"> </i>
            <h4 class=""my_icon-title">${name}</h4>
        </div> 
        `
    });
}

