import {Employers} from './employers';
import {Sponsors} from './sponsors'

class MakeBusiness{
    print({owner, director = 'Victor', cash, emp}) {
        
        
        const {eu,rus} = sponsors.getSponsors();

        let sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
        console.log(`We have a business. Owner: ${ owner }, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
        console.log('And we have a sponsors: ');
        console.log(...sumSponsors);
        console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
    }
}

const sponsors = new Sponsors({
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
});

const employers = new Employers(['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']);

const business =  new MakeBusiness();

business.print({owner: 'Sam', cash: sponsors.calcCash(null), emp: employers.list()})