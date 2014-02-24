var fights = [];

var dataHeadFight = '<table> <thead> <th>Nome</th> <th>Peso Mínimo</th> <th>Peso Máximo</th> </thead> <tbody>';
var dataCategory = dataHeadCategory;
var dataFootFight = '</tbody> </table>';

function saveFight() {

    var fight = {};

	fight.place = document.formSaveFight.place.value;
    fight.category= document.formSaveFight.category.value;
    fight.fighter1 = document.formSaveFight.fighter1.value;
    fight.fighter2 = document.formSaveFight.fighter2.value;

    /* ***************************************************************************** Verificar se cadastro novo já existe. */
    if(fight.place === '') {
        alert("Digite o nome do Lugar.");
        return;
    } else if (fight.category === '') {
        alert("Digite a categoria.");
        return;
    } else if (fight.fighter1 === '') {
        alert("Digite o primeiro lutador.");
    } else if (fight.fighter2 === '') {
        alert("Digite o segundo lutador.");
        return;
    }

    if(fight.fighter1 == fight.fighter2) {
        alert("Foi repetido o lutador.");
        return;
    }

    categories.push(category);
    alert("Salvo com sucesso.");

}

function listfights() {

    if(fights.length === 0) {
        alert("Não existem lutas cadastradas.");
        return;
    }

    for(var i = 0; i < fights.length; i++) {
    	dataFight += '<tr> <td>' + fights[i].place +
    		            '</td> <td>' + fights[i].category +
                        '</td> <td>' + fights[i].fighter1 + '</td> </tr>';
    					'</td> <td>' + fights[i].fighter2 + '</td> </tr>';
    }

    dataFight += dataFootFight;
    document.getElementById("outputSaveFight").innerHTML = dataFight;
    dataFight = dataHeadFight;

}

function searchFight() {

    if(fights.length === 0) {
        alert("Não existem lutas cadastradas.");
        return;
    }

    var fight = {};

    fight.place = document.formSearchFight.place.value;
    fight.category = document.formSearchFight.category.value;
    fight.fighter1 = document.formSearchFight.fighter1.value;
    fight.fighter2 = document.formSearchFight.fighter2.value;

    if((fight.name === '') && (fight.fighter1 === '') && (fight.fighter2 === '')) {
        alert("Preencher dado desejado para realizar pesquisa.");
        return;
    }

    var cont = 0;

    /* ****************************************************************************** Terminar as combinações. */
    for(var i = 0; i < fights.length; i++) {
        if((fight.place !== '') && (fights[i].place === fight.place)) {
            dataFight += '<tr> <td>' + fights[i].place +
                            '</td> <td>' + fights[i].fighter1 +
                            '</td> <td>' + fights[i].fighter2 + '</td> </tr>';
            cont++;
        }

        if((fight.minimumWeight !== '') && (fights[i].fighter2 === fight.fighter2)) {
        	dataFight += '<tr> <td>' + fights[i].place +
                            '</td> <td>' + fights[i].fighter2 +
                            '</td> <td>' + fights[i].fighter1 + '</td> </tr>';
            cont++;
        }

        if((fight.fighter1 !== '') && (fights[i].fighter1 === fight.fighter1)) {
        	dataFight += '<tr> <td>' + fights[i].place +
                            '</td> <td>' + fights[i].fighter2 +
                            '</td> <td>' + fights[i].fighter1 + '</td> </tr>';
            cont++;
        }
    }

    if(cont > 0) {
    	dataFight += dataFootFight;
        document.getElementById("outputSearchFight").innerHTML = dataFight;
        dataFight = dataHeadFight;
    } else {
        alert("Luta não encontrada.");
    }

}

function editFight() {

    var place = document.formSaveFight.place.value;
    var fighter2 = document.formSaveFight.fighter2.value;
    var fighter1 = document.formSaveFight.fighter1.value;

    var data = '<table> <thead> <th></th> <th></th> <th></th> </thead> <tbody> <tr> <td>' + place +
      		   '</td> <td>' + fighter2 + '</td> <td>' + fighter1 + '</td> </tr> </tbody> </table>';
    
    document.getElementById("outputSaveFight").innerHTML += data;

}

function deleteFight() {

    var opt = confirm("Tem certeza que quer deletar a luta selecionada?");
    
    if(opt) {
        var place = document.formSaveFight.place.value;
        var fighter2 = document.formSaveFight.fighter2.value;
        var fighter1 = document.formSaveFight.fighter1.value;

        var data = '<table> <thead> <th></th> <th></th> <th></th> </thead> <tbody> <tr> <td>' + place +
                   '</td> <td>' + fighter2 + '</td> <td>' + fighter1 + '</td> </tr> </tbody> </table>';
    
        document.getElementById("outputSaveFight").innerHTML += data;

        fights.delete(category);
        alert("Deletado com sucesso.");

    }

}

