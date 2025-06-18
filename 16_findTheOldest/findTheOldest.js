const findTheOldest = function(arr) {
    const lifeSpansUser = arr.map((person)=>{
        return {
            person: person,
            time: findLifeSpan(person)
        }
    });
    const lifeSpans = lifeSpansUser.map(person => person.time);
    const greatestLifeSpan = greatest(lifeSpans);
    const oldestPerson = lifeSpansUser.find((users)=>users.time === greatestLifeSpan);
    return oldestPerson.person;

};

function findLifeSpan(object){
    const today = new Date();
    const year = today.getFullYear();
    if(!object.yearOfDeath){
        return year - object.yearOfBirth;
    }else return object.yearOfDeath - object.yearOfBirth;
}

function greatest(lifeSpans){
    let max = lifeSpans[0];
    for(let i = 1; i < lifeSpans.length; i++){
        if(lifeSpans[i] > max){
            max = lifeSpans[i];
        }
    }
    return max;
}

// Do not edit below this line
module.exports = findTheOldest;
