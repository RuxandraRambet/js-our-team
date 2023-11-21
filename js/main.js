'use strict';

//Array di oggetti con le info sui membri del team

const members = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        picture: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        picture: "img/angela-caroll-chief-editor.jpg"   
    },
    {
        name: "Walter Gordon",
        role: "Officer Manager",
        picture: "img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        picture: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        picture: "img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        picture: "img/barbara-ramos-graphic-designer.jpg"
    }
];

// Stampa in console le info di ogni membro del team
for(let i = 0; i < members.length; i++){
    const member = members[i];
    // console.log(member);

    for(let key in member){
        console.log(`${key}: ${member[key]}`);
    }
    console.log('');
}

// Stampa le stesse info su DOM
const teamMembers = document.querySelector('.team-members');
for(let i = 0; i < members.length; i++){
    const member = members[i];
    const teamMembersList = document.createElement('ul');

    for(let key in member){
        // const teamMemberElement = document.createElement('li');
        // teamMemberElement.textContent = `${key}: ${member[key]}`;
        // teamMembersList.append(teamMemberElement);

        // Se nome/ruolo crea stringa, altrimenti inserisco la stringa nella src di un elemento img
        if(key != "picture"){
            const teamMemberElement = document.createElement('li');
            teamMemberElement.textContent = `${key}: ${member[key]}`;
            teamMembersList.append(teamMemberElement);
        }else{
            const teamMemberImg = document.createElement('img');
            teamMemberImg.src = member[key];
            teamMembersList.append(teamMemberImg);
        }
    }
    teamMembers.append(teamMembersList);
}