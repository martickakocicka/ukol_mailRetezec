//Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.

const email = prompt ("zadej mail: ")

//Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč.
//Tuto pozici si uložte do proměnné atIndex.

const atIndex = (email.indexOf("@"))
console.log (atIndex)

//Pomocí metody slice získejte z e-mailu první část
//představující uživatelské jméno uživatele.

console.log (email.slice (0, atIndex))

//Dále z e-mailu získejte název domény tedy například gmail.com.
console.log(email.slice(atIndex+1, email.length));

//Ze získaných informací vytvořte objekt

const jmeno = (email.slice (0, atIndex))
const domena = (email.slice(atIndex+1, email.length))

const emailObjekt = {
    userName: jmeno,
    domain: domena,
}

document.body.innerHTML += `<p> uživatelské jméno: ${jmeno} <\p>`
document.body.innerHTML += `<p> doména: ${domena} <\p>`

//konkrétně dle zadání (procvičeni výpisu objektu asi):

const mailDleZadani = {
    uzivatelskeJmeno: "slavomir.ponuchalek",
    zaZavinacem: "yahoo.com",
}
document.body.innerHTML += `<p> uživatelské jméno: ${mailDleZadani.uzivatelskeJmeno} <\p>`
document.body.innerHTML += `<p> doména: ${mailDleZadani.zaZavinacem} <\p>`

