function createUser(name){
    discordUser = "@" + name;

    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => { reputation++ };

    return { discordUser, getReputation, giveReputation };
}

const closure = createUser("Lucy");
closure.giveReputation();
closure.giveReputation();

console.log({
    user: closure.discordUser,
    reputation: closure.getReputation()
});