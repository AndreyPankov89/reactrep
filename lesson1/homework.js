const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((name) => {return name.length >0 && name.length != ""});
employersNames = employersNames.map((name) => name.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};


const {cash} = sponsors;

function calcCash(...cash){
    let total = 0
    cash.forEach((item)=>total+=item);
    return total
}

let money = calcCash(null, ...cash);

function makeBusiness({owner, director = 'Victor', cash, emp}) {
    const {eu,rus} = sponsors;
    let sumSponsors = eu.concat(rus, 'unexpected sponsor');
    console.log(`We have a business. Owner: ${ owner }, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
}

makeBusiness({owner: 'Sam', cash: money, emp: employersNames});
