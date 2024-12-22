document.getElementById("soundButton").addEventListener("click", function(){
    //get animal name from input
    const animal = document.getElementById("animalInput").value.toLowerCase();
    //console.log(animal);
    //sound output
    const output = document.getElementById("soundOutput");

    //logic statement
    switch(animal){
        case "dog":
        output.textContent = "woof! woof! (bark)";
        break;
        case "cat":
        output.textContent = "meow! meow!";
        break;
        case "goat":
        output.textContent = "meeeh! meeeh!";
        break;
        case "lion":
        output.textContent = "roar!";
        break;
        case "snake":
        output.textContent = "hisssssss!";
        break;
        case "horse":
        output.textContent = "neeeeigh!";
        break;
        case "sheep":
        output.textContent = "baaa! baaa!";
        break;
        case "duck":
        output.textContent = "quack! quack!";
        break;
        case "ape":
        output.textContent = "gibble";
        break;
        case "hen":
        output.textContent = "cackle";
        break;
        case "mouse":
        output.textContent = "squeek! squeek!";
        break;
        default:
             output.textContent = ("Sorry, i don't know that animal sound.");
    }
    
});