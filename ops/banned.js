
var Banned = function (){
    var bannedUsers =[];

    this.ban = function(user) {
        if(user.id!==config.bot.admin) {
            bannedUsers.push(user.id);
        }
    }
    this.isBanned = function(user) {
        return bannedUsers.find((element)=>(element===user.id));
    }
}

module.exports=new Banned();