//singelton
const object=new Object();
object.name="Ali Murtaza"
object.age="24"
object.isLoggedIn=false
const sym=Symbol("Key")
object.newobj={
    purpose:"InsideNewObject",
    email:"furtheremail",
    [sym]:"SymbolValue",
    array:[1,2,3,4,5,67],
    name:'alimurtaza'

}
// console.log(object)
// console.log(object.newobj)
const nameOptional = object.newobj.array ? object.newobj.array.name : undefined;
if (nameOptional){
    console.log(nameOptional)
}
