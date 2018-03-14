console.log("1");
function scopePractice(){
    this.sortBy = 'name';
    this.reverse= false;
    this.Employees=[ {joined:'2000-12-02', name:'Ashraf', city:'Dhaka', salary:'30000'},{joined:'2013-12-02', name:'Xshraf', city:'Bhaka', salary:'34000'},{joined:'2005-12-02', name:'Pshraf', city:'Xhaka', salary:'60000'}];
    this.doSort=function (propName){
        this.sortBy = propName;
        this.reverse= !this.reverse;
    };
}