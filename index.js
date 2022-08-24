const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers, theString){
    let resultArray = drivers.filter(n => (n.toLowerCase()) == (theString.toLowerCase()));
    console.log(`The result array is : ${resultArray}`);
    return resultArray;
 };

 function fuzzyMatch(drivers, theString){
    let resultArray = drivers.filter(n => (n.charAt(0)) == (theString.charAt(0)));
    return resultArray;
};

function matchName(drivers, theString){
    let resultArray = drivers.filter(n => (n.name) == (theString));
    return resultArray;
};
