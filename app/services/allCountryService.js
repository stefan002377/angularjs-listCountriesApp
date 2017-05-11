listCountry.service('listServices', function() {
    this.county = [
       {countyid:1, name:'Franta', populatia: 56874524, capitala: 'Paris', densitatea: 145, 
        orase : [{name:'Paris', populatia: 2558425}]},
       {countyid:2, name:'Germania', populatia: 92658152, capitala: 'Berlin', densitatea: 254, 
        orase : [{name:'Frankfurt', populatia: 2558425}, {name:'Stutgart', populatia: 2558425}]},
       {countyid:3, name:'Spania', populatia: 62586254, capitala: 'Madrid', densitatea: 156, 
        orase : [{name:'Paris', populatia: 2558425}]},
       {countyid:4, name:'Italia', populatia: 60256254, capitala: 'Roma', densitatea: 120, 
        orase : [{name:'Paris', populatia: 2558425}]},
       {countyid:5, name:'Croatia', populatia: 12568452, capitala: 'Zagrev', densitatea: 90, 
        orase : [{name:'Paris', populatia: 2558425}]},
       {countyid:6, name:'Danemarca', populatia: 6523458, capitala: 'Copenhaga', densitatea: 110, 
        orase : [{name:'Paris', populatia: 2558425}]},
       {countyid:7, name:'Irlanda', populatia: 15265854, capitala: 'Dublin', densitatea: 160, 
        orase : [{name:'Paris', populatia: 2558425}]},
       {countyid:8, name:'Norvegia', populatia: 8562125, capitala: 'Oslo', densitatea: 25, 
        orase : [{name:'Paris', populatia: 2558425}]},
       {countyid:9, name:'Suedia', populatia: 5621864, capitala: 'Stocholm', densitatea: 30, 
        orase : [{name:'Paris', populatia: 2558425}]},
       {countyid:10, name:'Romania', populatia: 23584895, capitala: 'Bucuresti', densitatea: 50, 
        orase : [{name:'Paris', populatia: 2558425}]},
       {countyid:11, name:'Finlanda', populatia: 4586213, capitala: 'Helsinki', densitatea: 15, 
        orase : [{name:'Paris', populatia: 2558425}]}
    ];
    
    this.getCountriesid = function (customerID) {
        for(var i=0, len=this.county.length; i<len; i++){
            if(this.county[i].countyid === parseInt(customerID) ) {
                return this.county[i];
            }
        }
        return {};
    }
});