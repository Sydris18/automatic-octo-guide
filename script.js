var response = document.querySelector("#response")

var count = 0;

function Personne(nom, prenom, age)
{
    this.nom = nom
    this.prenom= prenom
    this.age = age
}

var olona = new Array()

function ajouter(){
    var nom_p = document.getElementById("name_p").value
    var prenom_p = document.getElementById("prenom_p").value
    var age_p = document.getElementById("age_p").value
    response.innerHTML = "nom = " + nom_p + " prenom = " + prenom_p +  " age = " + age_p   
    
    if(nom_p != "" && prenom_p != "" && age_p !="")
    {
        //olona.push("a")
        var o1 = new Personne(nom_p, prenom_p, age_p)
        //count = olona.length
        count++
        response.innerHTML = ""+ count + " personnes ajoutées"
        console.log(o1)
    }
    else
    {
        response.innerHTML = " L'un des champs est vide "
    }
}