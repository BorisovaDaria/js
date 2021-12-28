function isPal (string){
    for (let i = 0; i < string.length / 2; i ++){
        if (string[i] !== string[string.length-1-i]) {
            console.log("Not pal")
            return
        }
    }
    console.log("Is pal")
}

isPal("AABBAA")
isPal("AAVVBBNNNNNN")