 //Instruction strict JS.
 "use strict";

 //Côté page de combat :
 //Côté sélection de perso, un truc comme ça
 //Perso Random 1.
 let perso1 = localStorage.getItem('perso1');
 //Perso Random 2.
 let perso2 = localStorage.getItem('perso2');

 // ############################# LIST CHANGE PROPRIETER.
 // ############################# --------

 //RAMDOM BACKGROUND-IMAGE PERSO1
 document.body.style.backgroundImage = 'url("../contents/img/' + perso1 + 'Fight.jpg")';
 //perso1 sera ajouter dans le body.
 document.body.classList.add(perso1);

 //SOUND FULL JS
 let audioFond = new Audio("../contents/soundGame/" + perso1 + ".mp3");
 audioFond.play();
 audioFond.loop = true;
 audioFond.volume = 0.1;

 //SOUND * fin de la variable A = ATTACK D =DAMMAGE.
 let soundluffyH = new Audio("../contents/soundPlayers/luffy/Speech00.wav");
 let soundluffyA = new Audio("../contents/soundPlayers/luffy/GomuGomuNo01.wav");
 soundluffyA.volume = 1;


 let soundviviD = new Audio("../contents/soundPlayers/vivi/Damage03.wav");
 soundviviD.volume = 1;
 //Preparation LocalStorage 
 //Luffy
 /* 
 let soundluffyA = new Audio("../contents/soundPlayers/luffy/GomuGomuNo01.wav");
 soundluffyA.volume = 1;
 let soundluffyD = new Audio("../contents/soundPlayers/luffy/GomuGomuNo01.wav");
 soundluffyA.volume = 1; 
 */
 //Nami
 let soundnamiA = new Audio("../contents/soundPlayers/vivi/KujakiSlasher01.wav");
 soundnamiA.volume = 1;
 let soundnamiD = new Audio("../contents/soundPlayers/vivi/Damage02.wav");
 soundnamiD.volume = 1;
 //Chopper
 let soundchopperA = new Audio("../contents/soundPlayers/sanji/femelle/Yell07.wav");
 soundchopperA.volume = 1;
 let soundchopperD = new Audio("../contents/soundPlayers/sanji/femelle/Damage02.wav");
 soundchopperD.volume = 1;
 //Smoker
 let soundsmokerA = new Audio("../contents/soundPlayers/smoker/WhiteLauncher00.wav");
 soundsmokerA.volume = 1;
 let soundsmokerD = new Audio("../contents/soundPlayers/smoker/Damage02.wav");
 soundsmokerD.volume = 1;
 //Sanji
 let soundsanjiA = new Audio("../contents/soundPlayers/sanji/male/Yell03.wav");
 soundsanjiA.volume = 1;
 let soundsanjiD = new Audio("../contents/soundPlayers/sanji/male/Damage04.wav");
 soundsanjiD.volume = 1;
 //Ussop
 let soundussopA = new Audio("../contents/soundPlayers/ussop/16.wav");
 soundussopA.volume = 1;
 let soundussopD = new Audio("../contents/soundPlayers/ussop/24.wav");
 soundussopD.volume = 1;
 //Nico Robin
 let soundnicoRobinA = new Audio("../contents/soundPlayers/nicoRobin/8.wav");
 soundnicoRobinA.volume = 1;
 let soundnicoRobinD = new Audio("../contents/soundPlayers/nicoRobin/31.wav");
 soundnicoRobinD.volume = 1;
 //Zorro
 let soundzorroA = new Audio("../contents/soundPlayers/zorro/RankyakuGaichou01.wav");
 soundzorroA.volume = 1;
 let soundzorroD = new Audio("../contents/soundPlayers/zorro/Damage05.wav");
 soundzorroD.volume = 1;


 //ou en js et html.
 // document.querySelector('audio').src = '../contents/soundGame/';

 //RAMDOM IMAGE-MAPPING PLAYERS
 let section2 = document.querySelector(".divSection2");
 section2.style.backgroundImage = 'url("../contents/mapping/' + perso1 + '.jpg")';

 //RAMDOM PLAYER 1 ANIMATION
 let divperso1 = document.querySelector(".perso1");
 divperso1.style.animationName = perso1;
 //RAMDOM PLAYER 2 ANIMATION
 let divperso2 = document.querySelector(".perso2");
 divperso2.style.animationName = perso2;

 //Name Perso.
 let persoName1 = document.querySelector(".persoName1");
 persoName1.style.fontSize = "30px";
 persoName1.style.color = "red";
 persoName1.textContent = perso1.toUpperCase();

 let persoName2 = document.querySelector(".persoName2");
 persoName2.style.fontSize = "30px";
 persoName2.style.color = "blue";
 persoName2.textContent = perso2.toUpperCase();

 // ################ CREATE OBJECT

 //object player1
 let player1 = {
     name: perso1,
     life: 1000,
     dammage: 0,
     potheal: function() {
         //this permet de retrouver une key de l'object.
         this.dammage = attdefRandomMinMax(20, 90);
         return this.dammage;
     },
     attPower: function() {
         this.dammage = attdefRandomMinMax(10, 70);
         return this.dammage;
     },
 };

 //object player2
 let player2 = {
     name: perso2,
     life: 1000,
     dammage: 0,
     potheal: function() {
         //this permet de retrouver une key de l'object.
         this.dammage = attdefRandomMinMax(20, 90);
         return this.dammage;
     },
     attPower: function() {
         this.dammage = attdefRandomMinMax(10, 70);
         return this.dammage;
     },
 };
 console.log("Stats Luffy: ", player1, "Stats Namy : ", player2);

 // ################ FUNCTION

 // Function d'attack.
 let funcAtt = function(target, attacker) {
     target.life -= attacker.attPower();
 };
 console.log(player1, player2);

 //Function heal.
 let heal = function(healPlayer) {
     healPlayer.life += healPlayer.sortHeal();
 };
 console.log(player1, player2);
 let funcHeal = function(healPlayer) {
     healPlayer.life += healPlayer.potheal();
 };
 console.log(player1, player2);

 //Function random.
 function attdefRandomMinMax(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min + 1)) + min;
 };
 attdefRandomMinMax();

 // ################ EVENT LISTENER
 //Barre de vie.
 let div = document.querySelector('#barreLifePerso1');
 let div2 = document.querySelector('#barreLifePerso2');

 //Create event click button att player1.
 document.querySelector("#buttonPlayer1A").addEventListener("click", function() {
     funcAtt(player2, player1);
     console.log("Luffy a infliger des dégâts à Nami: ", player2.life);
     display();
     animAttack1();
     soundluffyA.play();
     setTimeout(function() {
         soundviviD.play();
     }, 1000);
     //Barre de Life perso1.
     div.style.width = (player1.life * 4) + "px";

 });

 //Create event click button heal player1.
 let healp1 = document.querySelector("#buttonPlayer1H").addEventListener("click", function() {
     funcHeal(player1);
     console.log("Luffy à récuperer des points de vie", player1.life);
     display();
     animDefense1();
     animAttack1();
     soundluffyH.play();
 });

 //Create event click button att player2.
 let attackp2 = document.querySelector("#buttonPlayer2A").addEventListener("click", function() {
     funcAtt(player1, player2);
     console.log("Nami a infliger des dégâts a Luffy: ", player1.life);
     display();
     animAttack2();
     //Barre de Life perso2.
     div2.style.width = (player2.life * 4) + "px";
 });

 //Create event click button heal player2.
 let healp2 = document.querySelector("#buttonPlayer2H").addEventListener("click", function() {
     funcHeal(player2);
     console.log("Nami à récuperer des points de vie", player2.life);
     display();
     animDefense2();
 });

 // ################ FUNCTION DISPLAY.
 function display() {
     //Life Luffy.
     let displayP1L = document.querySelector(".statsLife1");
     displayP1L.textContent = player1.life;

     //Dammage Luffy.
     let displayP1D = document.querySelector(".statsDammage1");
     displayP1D.textContent = player1.dammage;

     //Life Nami.
     let displayP2L = document.querySelector(".statsLife2");
     displayP2L.textContent = player2.life;

     //Dammage Nami.
     let displayP2D = document.querySelector(".statsDammage2");
     displayP2D.textContent = player2.dammage;
 };
 display();

 // ################# Animation Attack heal
 //Animation attack perso1
 function animAttack1() {
     let divperso1 = document.querySelector(".perso1");
     divperso1.style.animationName = 'attack' + perso1;
     divperso1.addEventListener("animationiteration", function() { //dit quand l'animation s'arrete revient a la class css de base.

         divperso1.style.animationName = perso1;
     })
 }

 //Animation attack perso2
 function animAttack2() {
     let divperso2 = document.querySelector(".perso2");
     divperso2.style.animationName = 'attack' + perso2;
     divperso2.addEventListener("animationiteration", function() { //dit quand l'animation s'arrete revient a la class css de base.

         divperso2.style.animationName = perso2;
     })
 }

 //Animation Defense perso1
 function animDefense1() {
     let divperso1 = document.querySelector(".perso1");
     divperso1.style.animationName = 'defense' + perso1;
     divperso1.addEventListener("animationiteration", function() { //dit quand l'animation s'arrete revient a la class css de base.

         divperso1.style.animationName = perso1;
     })
 }

 //Animation Defense perso2
 function animDefense2() {
     let divperso2 = document.querySelector(".perso2");
     divperso2.style.animationName = 'defense' + perso2;
     divperso2.addEventListener("animationiteration", function() { //dit quand l'animation s'arrete revient a la class css de base.

         divperso2.style.animationName = perso2;
     })
 }

 /*
 Renommer fichier luffy.html en combatFight.html et son style en combatFight.css dansune feuille a part.
 Dans le style faire des modification et rendre la page plus générique.
 Dans le fichier combatFight.html faire des localStorage.getItems(...) et dans l'indexOP faire la meme chose,
 en utilisant les set.items.
 */