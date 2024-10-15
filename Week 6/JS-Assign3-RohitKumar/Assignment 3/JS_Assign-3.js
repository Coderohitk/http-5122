var msDhoni = {
    playerName: "MS Dhoni",
    role: "Wicketkeeper Batsman",
    team: "India",
    internationalRuns: 12000,
    updateRuns: function (newRuns) {
        this.internationalRuns = this.internationalRuns + newRuns;
    }

}
console.log(msDhoni);
var newRole = prompt("Enter the new role for MS Dhoni", msDhoni.role);
msDhoni.role = newRole;
var newTeam = prompt("Enter the new Team for MS Dhoni", msDhoni.team);
msDhoni.team = newTeam;
msDhoni.updateRuns(2500);
console.log(msDhoni);
