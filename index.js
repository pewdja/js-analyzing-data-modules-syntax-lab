


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
require('datejs');

function combineUsers(...arrays) {
    const users = arrays.flat();
    
    const merge_date = Date.today().toString("M/d/yyyy");

    return {
        users,
        merge_date
    };
}

module.exports = { combineUsers };
console.log(combineUsers(["Jim3","Pam5","Dwight77"],["Michael6","Eleanor22","Chidi202"],["Jack_jack","Julia_Oreo", "Bill_bore"]))

