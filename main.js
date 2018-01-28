// Losowy element z tablicy
let random;

let photoContainer = ['photo1', 'photo1', 'photo2', 'photo2', 'photo3', 'photo3', 'photo4', 'photo4', 'photo5', 'photo5', 'photo6', 'photo6', 'photo7', 'photo7', 'photo8', 'photo8', ];

function shuffle(o) {
    for (let j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

random = shuffle(photoContainer);

// Stworzenie kart
function creatingCards() {
    var cardContainer = document.querySelector('#card-container');
    for (let i = 0; i < 16; i++) {
        let div = document.createElement('div');
        div.classList.add('cards');
        div.setAttribute("id", "card" + i);
        let para = document.createElement('p');
        para.textContent = i;
        div.appendChild(para);
        cardContainer.appendChild(div);
    }
}
creatingCards();

let divsName = [];
let oneVisible = false;
let visibleText;

function checkCard() {
    document.styleSheets[0].addRule('#' + divsName[0] + '::after', 'transform: rotateY(0deg)');
    document.styleSheets[0].addRule('#' + divsName[0] + '::before', 'transform: rotateY(180deg)');
    document.styleSheets[0].addRule('#' + divsName[1] + '::after', 'transform: rotateY(0deg)');
    document.styleSheets[0].addRule('#' + divsName[1] + '::before', 'transform: rotateY(180deg)');
    oneVisible = false;
    divsName = [];
}

function rotateCard(nr) {
    document.styleSheets[0].addRule('#card' + nr + '::after', 'transform: rotateY(180deg)');
    document.styleSheets[0].addRule('#card' + nr + '::before', 'transform: rotateY(360deg)');
    document.styleSheets[0].addRule('#card' + nr + '::before', "background: url('\img/" + random[nr] + ".png'\) no-repeat;");
    document.styleSheets[0].addRule('#card' + nr + '::before', "background-size: contain");
    document.styleSheets[0].addRule('#card' + nr + '::before', "background-position: center;");
}

function clickCard(e, nr) {
    if (oneVisible == false) {
        rotateCard(nr);
        oneVisible = true;
        visibleText = "background: url('\img/" + random[nr] + ".png'\) no-repeat;";
        divsName.push(e.target.getAttribute('id'));
    } else if (oneVisible && divsName.length == 1) {
        rotateCard(nr);
        divsName.push(e.target.getAttribute('id'));
        if (visibleText === "background: url('\img/" + random[nr] + ".png'\) no-repeat;") {
            if (divsName[0] === divsName[1]) {
                divsName.pop();
                oneVisible = true;
            } else {
                divsName = [];
                oneVisible = false;
            }
        } else {
            setTimeout(checkCard, 900);
        }
        visibleText;
    }
}

document.querySelector('#card0').addEventListener('click', function (e) {
    clickCard(e, 0);
});

document.querySelector('#card1').addEventListener('click', function (e) {
    clickCard(e, 1);
});

document.querySelector('#card2').addEventListener('click', function (e) {
    clickCard(e, 2);
});

document.querySelector('#card3').addEventListener('click', function (e) {
    clickCard(e, 3);
});

document.querySelector('#card4').addEventListener('click', function (e) {
    clickCard(e, 4);
});

document.querySelector('#card5').addEventListener('click', function (e) {
    clickCard(e, 5);
});

document.querySelector('#card6').addEventListener('click', function (e) {
    clickCard(e, 6);
});

document.querySelector('#card7').addEventListener('click', function (e) {
    clickCard(e, 7);
});

document.querySelector('#card8').addEventListener('click', function (e) {
    clickCard(e, 8);
});

document.querySelector('#card9').addEventListener('click', function (e) {
    clickCard(e, 9);
});

document.querySelector('#card10').addEventListener('click', function (e) {
    clickCard(e, 10);
});

document.querySelector('#card11').addEventListener('click', function (e) {
    clickCard(e, 11);
});

document.querySelector('#card12').addEventListener('click', function (e) {
    clickCard(e, 12);
});

document.querySelector('#card13').addEventListener('click', function (e) {
    clickCard(e, 13);
});

document.querySelector('#card14').addEventListener('click', function (e) {
    clickCard(e, 14);
});

document.querySelector('#card15').addEventListener('click', function (e) {
    clickCard(e, 15);
});

//document.querySelector('#card0').addEventListener('click', function (e) {
//
//    document.styleSheets[0].addRule('#card0::after', 'transform: rotateY(180deg)');
//    document.styleSheets[0].addRule('#card0::before', 'transform: rotateY(360deg)');
//    document.styleSheets[0].addRule('#card0::before', "background: url('\img/" + random[0] + ".png'\) no-repeat;");
//    document.styleSheets[0].addRule('#card0::before', "background-size: contain");
//    document.styleSheets[0].addRule('#card0::before', "background-position: center;");
//    divsName.push(e.target.getAttribute('id'));
//
//    if (oneVisible == false) {
//        oneVisible = true;
//        visibleText = "background: url('\img/" + random[0] + ".png'\) no-repeat;";
//    } else {
//        oneVisible = false;
//        if (visibleText === "background: url('\img/" + random[0] + ".png'\) no-repeat;") {
//            divsName = [];
//        } else {
//            setTimeout(checkCard, 1000);
//        }
//        visibleText;
//    }
//});
//
//document.querySelector('#card1').addEventListener('click', function (e) {
//
//    document.styleSheets[0].addRule('#card1::after', 'transform: rotateY(180deg)');
//    document.styleSheets[0].addRule('#card1::before', 'transform: rotateY(360deg)');
//    document.styleSheets[0].addRule('#card1::before', "background: url('\img/" + random[1] + ".png'\) no-repeat;");
//    document.styleSheets[0].addRule('#card1::before', "background-size: contain");
//    document.styleSheets[0].addRule('#card1::before', "background-position: center;");
//    divsName.push(e.target.getAttribute('id'));
//
//    if (oneVisible == false) {
//        oneVisible = true;
//        visibleText = "background: url('\img/" + random[1] + ".png'\) no-repeat;";
//    } else {
//        oneVisible = false;
//        if (visibleText === "background: url('\img/" + random[1] + ".png'\) no-repeat;") {
//            divsName = [];
//        } else {
//            setTimeout(checkCard, 1000);
//        }
//        visibleText;
//    }
//});
//
//document.querySelector('#card2').addEventListener('click', function (e) {
//
//    document.styleSheets[0].addRule('#card2::after', 'transform: rotateY(180deg)');
//    document.styleSheets[0].addRule('#card2::before', 'transform: rotateY(360deg)');
//    document.styleSheets[0].addRule('#card2::before', "background: url('\img/" + random[2] + ".png'\) no-repeat;");
//    document.styleSheets[0].addRule('#card2::before', "background-size: contain");
//    document.styleSheets[0].addRule('#card2::before', "background-position: center;");
//    divsName.push(e.target.getAttribute('id'));
//
//    if (oneVisible == false) {
//        oneVisible = true;
//        visibleText = "background: url('\img/" + random[2] + ".png'\) no-repeat;";
//    } else {
//        oneVisible = false;
//        if (visibleText === "background: url('\img/" + random[2] + ".png'\) no-repeat;") {
//            divsName = [];
//        } else {
//            setTimeout(checkCard, 1000);
//        }
//        visibleText;
//    }
//});
//
//document.querySelector('#card3').addEventListener('click', function (e) {
//
//    document.styleSheets[0].addRule('#card3::after', 'transform: rotateY(180deg)');
//    document.styleSheets[0].addRule('#card3::before', 'transform: rotateY(360deg)');
//    document.styleSheets[0].addRule('#card3::before', "background: url('\img/" + random[3] + ".png'\) no-repeat;");
//    document.styleSheets[0].addRule('#card3::before', "background-size: contain");
//    document.styleSheets[0].addRule('#card3::before', "background-position: center;");
//    divsName.push(e.target.getAttribute('id'));
//
//    if (oneVisible == false) {
//        oneVisible = true;
//        visibleText = "background: url('\img/" + random[3] + ".png'\) no-repeat;";
//    } else {
//        oneVisible = false;
//        if (visibleText === "background: url('\img/" + random[3] + ".png'\) no-repeat;") {
//            divsName = [];
//        } else {
//            setTimeout(checkCard, 1000);
//        }
//        visibleText;
//    }
//});
//
//document.querySelector('#card4').addEventListener('click', function (e) {
//    document.styleSheets[0].addRule('#card4::after', 'transform: rotateY(180deg)');
//    document.styleSheets[0].addRule('#card4::before', 'transform: rotateY(360deg)');
//    document.styleSheets[0].addRule('#card4::before', "background: url('\img/" + random[4] + ".png'\) no-repeat;");
//    document.styleSheets[0].addRule('#card4::before', "background-size: contain");
//    document.styleSheets[0].addRule('#card4::before', "background-position: center;");
//    divsName.push(e.target.getAttribute('id'));
//
//    if (oneVisible == false) {
//        oneVisible = true;
//        visibleText = "background: url('\img/" + random[4] + ".png'\) no-repeat;";
//    } else {
//        oneVisible = false;
//        if (visibleText === "background: url('\img/" + random[4] + ".png'\) no-repeat;") {
//            divsName = [];
//        } else {
//            setTimeout(checkCard, 1000);
//        }
//        visibleText;
//    }
//});
//
//document.querySelector('#card5').addEventListener('click', function (e) {
//    document.styleSheets[0].addRule('#card5::after', 'transform: rotateY(180deg)');
//    document.styleSheets[0].addRule('#card5::before', 'transform: rotateY(360deg)');
//    document.styleSheets[0].addRule('#card5::before', "background: url('\img/" + random[5] + ".png'\) no-repeat;");
//    document.styleSheets[0].addRule('#card5::before', "background-size: contain");
//    document.styleSheets[0].addRule('#card5::before', "background-position: center;");
//    divsName.push(e.target.getAttribute('id'));
//
//    if (oneVisible == false) {
//        oneVisible = true;
//        visibleText = "background: url('\img/" + random[5] + ".png'\) no-repeat;";
//    } else {
//        oneVisible = false;
//        if (visibleText === "background: url('\img/" + random[5] + ".png'\) no-repeat;") {
//            divsName = [];
//        } else {
//            setTimeout(checkCard, 1000);
//        }
//        visibleText;
//    }
//});
//
//document.querySelector('#card6').addEventListener('click', function (e) {
//    document.styleSheets[0].addRule('#card6::after', 'transform: rotateY(180deg)');
//    document.styleSheets[0].addRule('#card6::before', 'transform: rotateY(360deg)');
//    document.styleSheets[0].addRule('#card6::before', "background: url('\img/" + random[6] + ".png'\) no-repeat;");
//    document.styleSheets[0].addRule('#card6::before', "background-size: contain");
//    document.styleSheets[0].addRule('#card6::before', "background-position: center;");
//    divsName.push(e.target.getAttribute('id'));
//
//    if (oneVisible == false) {
//        oneVisible = true;
//        visibleText = "background: url('\img/" + random[6] + ".png'\) no-repeat;";
//    } else {
//        oneVisible = false;
//        if (visibleText === "background: url('\img/" + random[6] + ".png'\) no-repeat;") {
//            divsName = [];
//        } else {
//            setTimeout(checkCard, 1000);
//        }
//        visibleText;
//    }
//});
//
//document.querySelector('#card7').addEventListener('click', function (e) {
//    document.styleSheets[0].addRule('#card7::after', 'transform: rotateY(180deg)');
//    document.styleSheets[0].addRule('#card7::before', 'transform: rotateY(360deg)');
//    document.styleSheets[0].addRule('#card7::before', "background: url('\img/" + random[7] + ".png'\) no-repeat;");
//    document.styleSheets[0].addRule('#card7::before', "background-size: contain");
//    document.styleSheets[0].addRule('#card7::before', "background-position: center;");
//    divsName.push(e.target.getAttribute('id'));
//
//    if (oneVisible == false) {
//        oneVisible = true;
//        visibleText = "background: url('\img/" + random[7] + ".png'\) no-repeat;";
//    } else {
//        oneVisible = false;
//        if (visibleText === "background: url('\img/" + random[7] + ".png'\) no-repeat;") {
//            divsName = [];
//        } else {
//            setTimeout(checkCard, 1000);
//        }
//        visibleText;
//    }
//});
//
//document.querySelector('#card8').addEventListener('click', function (e) {
//    document.styleSheets[0].addRule('#card8::after', 'transform: rotateY(180deg)');
//    document.styleSheets[0].addRule('#card8::before', 'transform: rotateY(360deg)');
//    document.styleSheets[0].addRule('#card8::before', "background: url('\img/" + random[8] + ".png'\) no-repeat;");
//    document.styleSheets[0].addRule('#card8::before', "background-size: contain");
//    document.styleSheets[0].addRule('#card8::before', "background-position: center;");
//    divsName.push(e.target.getAttribute('id'));
//
//    if (oneVisible == false) {
//        oneVisible = true;
//        visibleText = "background: url('\img/" + random[8] + ".png'\) no-repeat;";
//    } else {
//        oneVisible = false;
//        if (visibleText === "background: url('\img/" + random[8] + ".png'\) no-repeat;") {
//            divsName = [];
//        } else {
//            setTimeout(checkCard, 1000);
//        }
//        visibleText;
//    }
//});
//
//document.querySelector('#card9').addEventListener('click', function (e) {
//    document.styleSheets[0].addRule('#card9::after', 'transform: rotateY(180deg)');
//    document.styleSheets[0].addRule('#card9::before', 'transform: rotateY(360deg)');
//    document.styleSheets[0].addRule('#card9::before', "background: url('\img/" + random[9] + ".png'\) no-repeat;");
//    document.styleSheets[0].addRule('#card9::before', "background-size: contain");
//    document.styleSheets[0].addRule('#card9::before', "background-position: center;");
//    divsName.push(e.target.getAttribute('id'));
//
//    if (oneVisible == false) {
//        oneVisible = true;
//        visibleText = "background: url('\img/" + random[9] + ".png'\) no-repeat;";
//    } else {
//        oneVisible = false;
//        if (visibleText === "background: url('\img/" + random[9] + ".png'\) no-repeat;") {
//            divsName = [];
//        } else {
//            setTimeout(checkCard, 1000);
//        }
//        visibleText;
//    }
//});
//
//document.querySelector('#card10').addEventListener('click', function (e) {
//    document.styleSheets[0].addRule('#card10::after', 'transform: rotateY(180deg)');
//    document.styleSheets[0].addRule('#card10::before', 'transform: rotateY(360deg)');
//    document.styleSheets[0].addRule('#card10::before', "background: url('\img/" + random[10] + ".png'\) no-repeat;");
//    document.styleSheets[0].addRule('#card10::before', "background-size: contain");
//    document.styleSheets[0].addRule('#card10::before', "background-position: center;");
//    divsName.push(e.target.getAttribute('id'));
//
//    if (oneVisible == false) {
//        oneVisible = true;
//        visibleText = "background: url('\img/" + random[10] + ".png'\) no-repeat;";
//    } else {
//        oneVisible = false;
//        if (visibleText === "background: url('\img/" + random[10] + ".png'\) no-repeat;") {
//            divsName = [];
//        } else {
//            setTimeout(checkCard, 1000);
//        }
//        visibleText;
//    }
//});
//
//document.querySelector('#card11').addEventListener('click', function (e) {
//    document.styleSheets[0].addRule('#card11::after', 'transform: rotateY(180deg)');
//    document.styleSheets[0].addRule('#card11::before', 'transform: rotateY(360deg)');
//    document.styleSheets[0].addRule('#card11::before', "background: url('\img/" + random[11] + ".png'\) no-repeat;");
//    document.styleSheets[0].addRule('#card11::before', "background-size: contain");
//    document.styleSheets[0].addRule('#card11::before', "background-position: center;");
//    divsName.push(e.target.getAttribute('id'));
//
//    if (oneVisible == false) {
//        oneVisible = true;
//        visibleText = "background: url('\img/" + random[11] + ".png'\) no-repeat;";
//    } else {
//        oneVisible = false;
//        if (visibleText === "background: url('\img/" + random[11] + ".png'\) no-repeat;") {
//            divsName = [];
//        } else {
//            setTimeout(checkCard, 1000);
//        }
//        visibleText;
//    }
//});
//
//document.querySelector('#card12').addEventListener('click', function (e) {
//    document.styleSheets[0].addRule('#card12::after', 'transform: rotateY(180deg)');
//    document.styleSheets[0].addRule('#card12::before', 'transform: rotateY(360deg)');
//    document.styleSheets[0].addRule('#card12::before', "background: url('\img/" + random[12] + ".png'\) no-repeat;");
//    document.styleSheets[0].addRule('#card12::before', "background-size: contain");
//    document.styleSheets[0].addRule('#card12::before', "background-position: center;");
//    divsName.push(e.target.getAttribute('id'));
//
//    if (oneVisible == false) {
//        oneVisible = true;
//        visibleText = "background: url('\img/" + random[12] + ".png'\) no-repeat;";
//    } else {
//        oneVisible = false;
//        if (visibleText === "background: url('\img/" + random[12] + ".png'\) no-repeat;") {
//            divsName = [];
//        } else {
//            setTimeout(checkCard, 1000);
//        }
//        visibleText;
//    }
//});
//
//document.querySelector('#card13').addEventListener('click', function (e) {
//    document.styleSheets[0].addRule('#card13::after', 'transform: rotateY(180deg)');
//    document.styleSheets[0].addRule('#card13::before', 'transform: rotateY(360deg)');
//    document.styleSheets[0].addRule('#card13::before', "background: url('\img/" + random[13] + ".png'\) no-repeat;");
//    document.styleSheets[0].addRule('#card13::before', "background-size: contain");
//    document.styleSheets[0].addRule('#card13::before', "background-position: center;");
//    divsName.push(e.target.getAttribute('id'));
//
//    if (oneVisible == false) {
//        oneVisible = true;
//        visibleText = "background: url('\img/" + random[13] + ".png'\) no-repeat;";
//    } else {
//        oneVisible = false;
//        if (visibleText === "background: url('\img/" + random[13] + ".png'\) no-repeat;") {
//            divsName = [];
//        } else {
//            setTimeout(checkCard, 1000);
//        }
//        visibleText;
//    }
//});
//
//document.querySelector('#card14').addEventListener('click', function (e) {
//    document.styleSheets[0].addRule('#card14::after', 'transform: rotateY(180deg)');
//    document.styleSheets[0].addRule('#card14::before', 'transform: rotateY(360deg)');
//    document.styleSheets[0].addRule('#card14::before', "background: url('\img/" + random[14] + ".png'\) no-repeat;");
//    document.styleSheets[0].addRule('#card14::before', "background-size: contain");
//    document.styleSheets[0].addRule('#card14::before', "background-position: center;");
//    divsName.push(e.target.getAttribute('id'));
//
//    if (oneVisible == false) {
//        oneVisible = true;
//        visibleText = "background: url('\img/" + random[14] + ".png'\) no-repeat;";
//    } else {
//        oneVisible = false;
//        if (visibleText === "background: url('\img/" + random[14] + ".png'\) no-repeat;") {
//            divsName = [];
//        } else {
//            setTimeout(checkCard, 1000);
//        }
//        visibleText;
//    }
//});
//
//document.querySelector('#card15').addEventListener('click', function (e) {
//    document.styleSheets[0].addRule('#card15::after', 'transform: rotateY(180deg)');
//    document.styleSheets[0].addRule('#card15::before', 'transform: rotateY(360deg)');
//    document.styleSheets[0].addRule('#card15::before', "background: url('\img/" + random[15] + ".png'\) no-repeat;");
//    document.styleSheets[0].addRule('#card15::before', "background-size: contain");
//    document.styleSheets[0].addRule('#card15::before', "background-position: center;");
//    divsName.push(e.target.getAttribute('id'));
//
//    if (oneVisible == false) {
//        oneVisible = true;
//        visibleText = "background: url('\img/" + random[15] + ".png'\) no-repeat;";
//    } else {
//        oneVisible = false;
//        if (visibleText === "background: url('\img/" + random[15] + ".png'\) no-repeat;") {
//            divsName = [];
//        } else {
//            setTimeout(checkCard, 1000);
//        }
//        visibleText;
//    }
//});

let a = 'Fizz';
let b = 'Buzz';

function zadanko() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(a + b);
        } else if (i % 5 === 0) {
            console.log(b);
        } else if (i % 3 === 0) {
            console.log(a);
        } else {
            console.log(i);
        }
    }
}

zadanko();
