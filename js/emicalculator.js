function emi(){
    let principal = parseFloat(document.getElementById("principal").value)
    let interest = parseFloat(document.getElementById("interest").value)
    let time = parseFloat(document.getElementById("time").value)
    let amount=0
    if(time>0 && principal>0){
        time=time*12
        interest=interest/1200
        amount=principal*interest*((1+interest)**time/((1+interest)**time-1))
        let result=document.getElementById('result')
        result.innerText=`Your EMI is: ₹${amount.toFixed(2)}`
      }
    
    else{
        
    }
    document.getElementById("principal").value=""
    document.getElementById("interest").value=""
    document.getElementById("time").value=""
}
emi()
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const firstNames = fullNames.map(function(obj){
    return obj.first
})
console.log(firstNames)
console.log('HI')
const greet = (name)=>{
    console.log(`Hey ${name}!`)
}
const validUserNames = (userNames =>userNames.filter(name=>name.length<10))

