'use strict';

//Array di oggetti con le info sui membri del team

const members = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        picture: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        picture: "angela-caroll-chief-editor.jpg"   
    },
    {
        name: "Walter Gordon",
        role: "Officer Manager",
        picture: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        picture: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        picture: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg"
    }
];

// Stampa in console le info di ogni membro del team
const arrayLength = members.length

for(let i = 0; i < arrayLength; i++){
    const member = members[i];
    // console.log(member);

    console.log(`Team Member ${i + 1}`);
    for(let key in member){
        console.log(`${key}: ${member[key]}`);
    }
    console.log('');
}

// Stampa le stesse info su DOM variante iniziale

// const teamMembers = document.querySelector('.team-members');

// for(let i = 0; i < arrayLength; i++){
//     const member = members[i];
//     const teamMembersList = document.createElement('ul');

//     for(let key in member){
//         // const teamMemberElement = document.createElement('li');
//         // teamMemberElement.textContent = `${key}: ${member[key]}`;
//         // teamMembersList.append(teamMemberElement);

//         // Se nome/ruolo crea stringa, altrimenti inserisco la stringa nella src di un elemento img
//         if(key != "picture"){
//             const teamMemberElement = document.createElement('li');
//             teamMemberElement.textContent = `${key}: ${member[key]}`;
//             teamMembersList.append(teamMemberElement);
//         }else{
//             const teamMemberImg = document.createElement('img');
//             teamMemberImg.src = member[key];
//             teamMembersList.append(teamMemberImg);
//         }
//     }
//     teamMembers.append(teamMembersList);
// }

// Stampa le stesse info su DOM ALTERNATIVA con CLONE ELEMENT

const teamMembers = document.querySelector('.team-members');
const templateTeam = document.getElementById('team-template');

for(let i = 0; i < arrayLength; i++){
    const member = members[i];

    const teamMemberElement = templateTeam.content.cloneNode(true); 

    teamMemberElement.querySelector('.member .picture img').src = `img/${member.picture}`;
    teamMemberElement.querySelector('.member .picture img').alt = member.name;

    if(member.name != undefined){
        teamMemberElement.querySelector('.member .name').innerText = member.name;
    }
    teamMemberElement.querySelector('.member .role').innerText = member.role;

    teamMembers.append(teamMemberElement);
}