class Sponsors {
    constructor(sponsors){
        this.sponsors = sponsors;
        
    }

    getSponsors (){
        return this.sponsors
    }


    calcCash(total=0){
        let {cash} = this.sponsors;
        cash.forEach((item)=>total+=item);
        return total;
    }
}

export {Sponsors}