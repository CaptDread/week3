

let quizPages = document.querySelectorAll('section')

console.log(quizPages)

let nextButt = document.querySelectorAll('.nextButt')
let resButt = document.querySelector(`.resButt`)

let radbutts = document.querySelectorAll(`.rb`)

let resId = document.querySelector('.resId')
let resDes = document.querySelector('.resDes')
let resImg = document.querySelector('.resImg')

let results = document.querySelector(`.resReveal`)


let currentPageNum = 0

let changePage = function () {
    quizPages[currentPageNum].classList.remove('active')
    currentPageNum++
    setTimeout(() => {
        quizPages[currentPageNum].classList.add('active')
    }, 42);
}


for (let z = 0; z < nextButt.length; z++){
    nextButt[z].addEventListener('click', function (e){
        e.preventDefault()
        changePage()

    })
}


let counts = [
    {id: 'murphy', value: 0},
    {id: 'debby', value: 0},
    {id: 'stormy', value: 0},
    {id: 'quin', value: 0},
    {id: 'sparks', value: 0},
    {id: 'marco', value: 0}, 
    {id: 'hesh', value: 0},
]

let maxCount = [
    {id:'dolphBoy', value:2},
]

let buttChecker = function (){
    for (let i = 0; i < radbutts.length; i++){
       if (radbutts[i].checked != false){
           console.log(radbutts[i].value)
           if (radbutts[i].value === 'murphy'){
              counts[0].value++
           } else if (radbutts[i].value === 'debby'){
              counts[1].value++
           } else if (radbutts[i].value === 'stormy'){
              counts[2].value++
           } else if (radbutts[i].value === 'quin'){
              counts[3].value++
           } else if (radbutts[i].value === 'sparks'){
              counts[4].value++
           } else if (radbutts[i].value === 'marco'){
              counts[5].value++
           } else if (radbutts[i].value === 'hesh'){
              counts[6].value++
           }
       }
    }
    for(let r = 0; r < counts.length; r++){
        if (counts[r].value > maxCount[0].value){
            maxCount[0].value = counts[r].value
            maxCount[0].id = counts[r].id
        }
        
    }
    console.log(maxCount)

    let displayResults = function(){
        if(maxCount[0].id === 'murphy'){
            resId.innerHTML = 'Captain Hazel "Hank" Murphy'
            resDes.innerHTML = ` The ostensible leader of the crew, though his qualifications, and even his grasp on reality, are questionable. He is generally found loitering on the bridge neglecting his duties. Murphy spends his time participating in scams and juvenile antics and generally causing problems that the crew has to solve. Captain Murphy is a parody of Captain Mike Murphy from Sealab 2020. Generally, Murphy is incapable to the point of incompetence. On more than one occasion, it has been implied that Murphy has gone insane due to the amount of time he has spent underwater. However, the crew either does not notice this or does not care and usually follow his orders, even when they will directly lead to the crew's deaths. Murphy is a practicing Alvian and has a deep-seated fear of doppelgängers and especially flashlights, the latter a fear for which there is no name. After the death of Harry Goz, Murphy was written out of the show by having him leave Sealab to fight in the "Great Spice Wars". It is implied that Murphy is the leader of the Rebel forces in this war, though the reasoning behind this is or its effect on the war is never explored. A recap montage of Murphy's moments were played in the final episode in memory of this voice actor. However, he later appeared in Archer, where he was voiced by Jon Hamm and debuted in the two-part episode "Sea Tunt".`
            results.style.display = 'contents'
            resImg.setAttribute('src', `../week3/js/murphy.gif`)
            resImg.setAttribute('alt', `Do you want the mustache on or off... Too Bad..`)
        } else if(maxCount[0].id === 'debby'){
            resId.innerHTML = 'Debbie "White Debbie" DuPree'
            resDes.innerHTML = `A marine biologist and one of only two adult females on the base. Serving as a parody of Gail from Sealab 2020, she is a blonde and is often the object of the sexual interest of the males on Sealab. She has an ongoing sexual relationship with Doctor Quinn, and their relationship and its ups and downs and its effect on the rest of the crew play out in several stories. When she is on the outs with Quinn, the other males, particularly Stormy, attempt to get on her good side. Debbie's mood swings are a constant issue to the crew, as she changes wildly from the sole voice of reason to a shrieking lunatic. Debbie picked up the "White Debbie" appellation at the behest of Doctor Quinn, who thought it was unfair that Debbie Love went by "Black Debbie" while Debbie Dupree was simply Debbie. Nevertheless, few of the crew actually call her that.`
            results.style.display = 'contents'
            resImg.setAttribute('src', `../week3/js/debby.gif`)
            resImg.setAttribute('alt', `Ha! That's my dolphin asshole.`)
        } else if(maxCount[0].id === 'stormy'){
            resId.innerHTML = 'Derek "Stormy" Waters'
            resDes.innerHTML = `A pretty boy lacking in intelligence or seemingly any qualifications to be working on a government research lab, and a parody of Hal from Sealab 2020. Stormy's job is never clearly defined and he usually walks around Sealab doing whatever he wants or acts as a henchman or assistant to whomever he is nearest. Stormy usually works alongside Quinn, who frequently is the victim of Stormy's ignorance, but is ironically the most tolerant of him. The two frequently find themselves in Odd Couple-like situations. Stormy has shown skill in the operation of the submersible Deep Diver, both as a pilot and gunner, as well as operating other technological gadgets, though he is just as irresponsible in those positions as anywhere else. The crew has been shown to dislike or mistreat Stormy on multiple occasions, such as putting a sign outside the mess hall saying "No Stormies" when they held a pizza party or forgetting that he was trapped outside of the closet with Murphy's dogs. Stormy is a proudly practicing Alvian, like Murphy.`
            results.style.display = 'contents'
            resImg.setAttribute('src', `../week3/js/stormy.gif`)
            resImg.setAttribute('alt', `I'm like an otter, a sexy little otter!`)
        } else if(maxCount[0].id === 'quin'){
            resId.innerHTML = 'Dr. Quentin Q. Quinn'
            resDes.innerHTML = `The science officer. Parodying Ed from Sealab 2020, he is an African-American who is extremely intelligent, with an IQ of 260 and Ph.D.s in several scientific disciplines, of which he is not shy about reminding the other characters. Quinn grew up in unbelievably over-the-top poverty and got to where he is through hard work, unlike the majority of the other characters. He is regarded as an uptight killjoy by most of the crew. Quinn is often the only responsible crew member and the sole voice of reason. This has caused the other crew to neglect their duties even further, as they believe "Quinn will handle it". Despite his intelligence, Quinn is extremely vain and prone to outbursts of anger when he is not appreciated. Quinn often attempts to prevent Murphy's questionable plans from being enacted, leading Murphy to distrust Quinn. However, Murphy is aware that he and the station completely depend on Quinn, going so far as to snake his vacation to ensure that he did not leave the station. Quinn has an ongoing sexual relationship with Debbie Dupree. In the first episode, he revealed that he inhabits a robot body of his own design.`
            results.style.display = 'contents'
            resImg.setAttribute('src', `../week3/js/quin.gif`)
            resImg.setAttribute('alt', `I'ma freak of science nature!`)
        } else if(maxCount[0].id === 'sparks'){
            resId.innerHTML = 'Lieutenant Jodene Sparks'
            resDes.innerHTML = `The station's radio operator who is always seen sitting and with his headsets on. Sparks is a parody of Lieutenant Sparks from Sealab 2020. Sparks mostly use the radio for his own personal purposes, even going so far as to disconnect vital transmissions that interrupt him. He generally travels around in his office chair, mostly because he is lazy, even though it was suggested that he is crippled. Sparks is a convict serving time at Sealab while still operating a black market distillery and takes part in a wide variety of other illegal activities. He occasionally serves as a voice of reason to the crew, particularly to Murphy. However, he is just as often the catalyst of problems aboard Sealab, including Sealab's destruction. He is claustrophobic and a Malkin, the show's version of Wiccan. Sparks's quest for money has been in several plots; such as the murdering of the crew to collect on life insurance policies, the creation of Stimutacs to "make an assload of money", and his numerous underhand deals with Paddy O'Reilly and the various Daves. An early episode revealed that he acts as a criminal mastermind called "Overlord" with a hollowed-out volcano base and an army of minions. Episode 46 reveals he enjoys hentai with themes of forced submission and humiliation.`
            results.style.display = 'contents'
            resImg.setAttribute('src', `../week3/js/sparks.gif`)
            resImg.setAttribute('alt', `Uh, what do you call a chair with wheels?`)
        } else if(maxCount[0].id === 'marco'){
            resId.innerHTML = 'Marco Rodrigo Diaz de Vivar Gabriel Garcia Marquez'
            resDes.innerHTML = `The station's engineer. Spoofing Dr. Paul Williams from Sealab 2020, he is very strong and muscular, unlike the rest of the crew. He speaks with a Spanish accent and often exclaims random things in Spanish, although not actually speaking the language. Quinn even remarks that his Spanish is terrible. Marco's exact heritage is unknown, though he is fiercely not a Spaniard. Marco is prone to violence, both in the defense of the crew and against them. Marco often argues with Murphy about his methods and seems to be the only one to whom Murphy actually listens. Despite this, Murphy often calls Marco "mailbox head" and included a segment on his radio show where listeners could call in to tell him why they hated Marco. Marco gets along with most of the crew, especially Sparks and Quinn. Marco also interacts with the orphans on Sealab and has been shown to have a soft side.`
            results.style.display = 'contents'
            resImg.setAttribute('src', `../week3/js/marco.gif`)
            resImg.setAttribute('alt', `"They told me that you had gone totally insane, and that your methods were unsound.`)
        } else if(maxCount[0].id === 'hesh'){
            resId.innerHTML = 'Hesh Hepplewhite'
            resDes.innerHTML = `The station's reactor operator and more often than not their whipping boy. Hesh has a habit of continually referring to himself in the third person. It was revealed that he is Jewish. Nasal-voiced, smart-mouthed, and whiny, Hesh is not well-liked by most of the crew and thus works in the part of the station farthest away from them. He has no real understanding of how the reactor works and generally has to have guidance from Quinn when there is a problem. Hesh's own interactions with the machinery are generally useless or actively destructive, such as the "hammer game", which involves smashing the computers with a hammer. Hesh generally does not participate in the crew's activities unless he interrupts on the radio. Hesh performs the birthday song at Quinn's birthday and acts as Murphy's caddie. Hesh's safety is not a concern to any of the characters, as Murphy sent him into the reactor core to recover a ball. As a result of being isolated in the reactor, Hesh has developed odd tendencies, such as dressing as a woman on multiple occasions. So yeah, sealabs on personal weirdo.`
            results.style.display = 'contents'
            resImg.setAttribute('src', `../week3/js/hesh.gif`)
            resImg.setAttribute('alt', `"Go on! Hump her! Make a bear-affe... or a giraffabear."`)
        } else if(maxCount[0]. id === 'dolphBoy'){
            resId.innerHTML = 'Dolphin Boy'
            resDes.innerHTML = `Dolphin Boy is a little chubby boy that speaks in dolphin noises. One of the orphans that inhabit Sealab for some reason, he is a member of Black Debbie's class. Dolphin Boy often wanders around the station and as a result is often embroiled in whatever is going on. When translated, Dolphin Boy generally says inoffensive, naively childish statements, universally resulting in derision and hatred from the rest of the crew. He is the target of endless fat jokes and is often killed for no reason whatsoever by the Sealab crew members. He is the persona non grata of Sealab. IN OTHER WORDS, YOU SUCK.`
            results.style.display = 'contents'
            resImg.setAttribute('src', '../week3/js/dolphboy.gif');
            resImg.setAttribute('alt', `Tubbs Himself`);
        }
    }

    displayResults()
}


resButt.addEventListener(`click`, function (e){
    e.preventDefault()
    buttChecker()
    changePage()
})
