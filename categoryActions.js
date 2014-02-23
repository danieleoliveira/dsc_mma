var categories = [];

var dataHeadCategory = '<table> <thead> <th>Nome</th> <th>Peso Mínimo</th> <th>Peso Máximo</th> </thead> <tbody>';
var dataCategory = dataHeadCategory;
var dataFootCategory = '</tbody> </table>';

function saveCategory() {

    var category = {};

	category.name = document.formSaveCategory.name.value;
    category.minimumWeight = document.formSaveCategory.minimumWeight.value;
    category.maximumWeight = document.formSaveCategory.maximumWeight.value;

    /* ****************************************************************************** Verificar se cadastro novo já existe. */
    if(category.name === '') {
        alert("Digite o nome da categoria.");
        return;
    } else if (category.minimumWeight === '') {
        alert("Digite o peso mínimo da categoria.");
        return;
    } else if (category.maximumWeight === '') {
        alert("Digite o peso máximo da categoria.");
        return;
    }

    if(category.minimumWeight >= category.maximumWeight) {
        alert("Pesos inseridos estão incorretos.");
        return;
    }

    categories.push(category);
    alert("Salvo com sucesso.");

}

function listCategories() {

    if(categories.length === 0) {
        alert("Não existem categorias cadastradas.");
        return;
    }

    for(var i = 0; i < categories.length; i++) {
    	dataCategory += '<tr> <td>' + categories[i].name +
    		            '</td> <td>' + categories[i].minimumWeight +
                        '</td> <td>' + categories[i].maximumWeight + '</td> </tr>';
    }

    dataCategory += dataFootCategory;
    document.getElementById("outputSaveCategory").innerHTML = dataCategory;
    dataCategory = dataHeadCategory;

}

function searchCategory() {

    if(categories.length === 0) {
        alert("Não existem categorias cadastradas.");
        return;
    }

    var category = {};

    category.name = document.formSearchCategory.name.value;
    category.minimumWeight = document.formSearchCategory.minimumWeight.value;
    category.maximumWeight = document.formSearchCategory.maximumWeight.value;

    if((category.name === '') && (category.minimumWeight === '') && (category.maximumWeight === '')) {
        alert("Preencher dado desejado para realizar pesquisa.");
        return;
    }

    var cont = 0;

    /* ****************************************************************************** Terminar as combinações. */
    for(var i = 0; i < categories.length; i++) {
        if((category.name !== '') && (categories[i].name === category.name)) {
            dataCategory += '<tr> <td>' + categories[i].name +
                            '</td> <td>' + categories[i].minimumWeight +
                            '</td> <td>' + categories[i].maximumWeight + '</td> </tr>';
            cont++;
        }

        if((category.minimumWeight !== '') && (categories[i].minimumWeight === category.minimumWeight)) {
            dataCategory += '<tr> <td>' + categories[i].name +
                            '</td> <td>' + categories[i].minimumWeight +
                            '</td> <td>' + categories[i].maximumWeight + '</td> </tr>';
            cont++;
        }

        if((category.maximumWeight !== '') && (categories[i].maximumWeight === category.maximumWeight)) {
            dataCategory += '<tr> <td>' + categories[i].name +
                            '</td> <td>' + categories[i].minimumWeight +
                            '</td> <td>' + categories[i].maximumWeight + '</td> </tr>';
            cont++;
        }
    }

    if(cont > 0) {
        dataCategory += dataFootCategory;
        document.getElementById("outputSearchCategory").innerHTML = dataCategory;
        dataCategory = dataHeadCategory;
    } else {
        alert("Categoria não encontrada.");
    }

}

function editCategory() {

    var name = document.formSaveCategory.name.value;
    var minimumWeight = document.formSaveCategory.minimumWeight.value;
    var maximumWeight = document.formSaveCategory.maximumWeight.value;

    var data = '<table> <thead> <th></th> <th></th> <th></th> </thead> <tbody> <tr> <td>' + name +
      		   '</td> <td>' + minimumWeight + '</td> <td>' + maximumWeight + '</td> </tr> </tbody> </table>';
    
    document.getElementById("outputSaveCategory").innerHTML += data;

}

function deleteCategory() {

    var opt = confirm("Tem certeza que quer deletar categoria selecionada?");
    
    if(opt) {
        var name = document.formSaveCategory.name.value;
        var minimumWeight = document.formSaveCategory.minimumWeight.value;
        var maximumWeight = document.formSaveCategory.maximumWeight.value;

        var data = '<table> <thead> <th></th> <th></th> <th></th> </thead> <tbody> <tr> <td>' + name +
                   '</td> <td>' + minimumWeight + '</td> <td>' + maximumWeight + '</td> </tr> </tbody> </table>';
    
        document.getElementById("outputSaveCategory").innerHTML += data;

        categories.delete(category);
        alert("Deletado com sucesso.");

    }

}

