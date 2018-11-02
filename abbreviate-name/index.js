function abbrevName(name){

    return name.charAt(0).toUpperCase() + "." + name.charAt((name.search(" ") + 1)).toUpperCase()
}

console.log(abbrevName("Sam Harris"));