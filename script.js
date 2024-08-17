var c = false
var w1 = false
var w2 = false
var w3 = false

var cPosB = false
var w1PosB = false
var w2PosB = false
var w3PosB = false


if (!!question === false) {
  var question = false
}

if (!!CATEGORIES === false) {
  var CATEGORIES = [
    'Art', 
    'Entertainment', 
    'Geography', 
    'History', 
    'Science', 
    'Sports', 
  ]
}

if (!!COLORS === false) {
  var COLORS = {
    Art: 'Red', 
    Entertainment: 'Pink', 
    Geography: 'Blue', 
    History: 'Yellow', 
    Science: 'Green', 
    Sports: 'Orange', 
    none: 'Gray', 
  }
}

if (!!QUESTIONS === false) {
  var QUESTIONS = {
    Art: [
      {
        q: 'Who was Vincent van Gogh?', 
        c: 'QSBwYWludGVy', 
        w1: 'QSBzaW5nZXI=', 
        w2: 'QSBtZWNoYW5pYw==', 
        w3: 'QW4gYXJjaGl0ZWN0', 
      }, 
      {
        q: 'Which Italian artist painted the ceiling of the Sistine Chapel?', 
        c: 'TWljaGVsYW5nZWxv', 
        w1: 'UmFwaGFlbA==', 
        w2: 'RG9uYXRlbGxv', 
        w3: 'TGVvbmFyZG8gZGEgVmluY2k=', 
      }, 
    ], 
    Entertainment: [
      {
        q: 'What movie was Tom Cruise NOT in?', 
        c: 'QSBNYW4gQ2FsbGVkIE90dG8=', 
        w1: 'VG9wIEd1bg==', 
        w2: 'QW1lcmljYW4gTWFkZQ==', 
        w3: 'SmFjayBSZWFjaGVy', 
      }, 
      {
        q: 'Which actress played the lead role in the movie "La La Land"?', 
        c: 'RW1tYSBTdG9uZQ==', 
        w1: 'RW1tYSBTdG9uZQ==', 
        w2: 'RW1tYSBUaG9tcHNvbg==', 
        w3: 'RW1tYSBSb2JlcnRz', 
      }, 
    ], 
    Geography: [
      {
        q: 'What is NOT a country in South America?', 
        c: 'TmljYXJhZ3Vh', 
        w1: 'Q29sdW1iaWE=', 
        w2: 'RWN1YWRvcg==', 
        w3: 'VXJ1Z3VheQ==', 
      }, 
      {
        q: 'Which country has the largest population in the world?', 
        c: 'Q2hpbmE=', 
        w1: 'SW5kaWE=', 
        w2: 'VW5pdGVkIFN0YXRlcw==', 
        w3: 'UnVzc2lh', 
      }, 
    ], 
    History: [
      {
        q: 'When did WWII in Europe start?', 
        c: 'MTkzOQ==', 
        w1: 'MTk0MQ==', 
        w2: 'MTk0NQ==', 
        w3: 'MTkzNQ==', 
      }, 
      {
        q: 'Who was the first president of the United States?', 
        c: 'R2VvcmdlIFdhc2hpbmd0b24=', 
        w1: 'Sm9obiBBZGFtcw==', 
        w2: 'VGhvbWFzIEplZmZlcnNvbg==', 
        w3: 'QWJyYWhhbSBMaW5jb2xu', 
      }, 
    ], 
    Science: [
      {
        q: 'What tree is also known as "____ needles"?', 
        c: 'UGluZQ==', 
        w1: 'T2Fr', 
        w2: 'QmlyY2g=', 
        w3: 'Q29uaWZlcm91cw==', 
      }, 
      {
        q: "What is the most abundant gas in the Earth's atmosphere?", 
        c: 'Tml0cm9nZW4=', 
        w1: 'T3h5Z2Vu', 
        w2: 'Q2FyYm9uIGRpb3hpZGU=', 
        w3: 'SGVsaXVt', 
      }, 
    ], 
    Sports: [
      {
        q: 'The ____ Cowboys?', 
        c: 'RGFsbGFz', 
        w1: 'RGVudmVy', 
        w2: 'Q2FsaQ==', 
        w3: 'RmxvcmlkYQ==', 
      }, 
      {
        q: 'In which country were the modern Olympic Games first held?', 
        c: 'R3JlZWNl', 
        w1: 'RnJhbmNl', 
        w2: 'RW5nbGFuZA==', 
        w3: 'SXRhbHk=', 
      }, 
    ], 
  }
}

var num = 0
CATEGORIES.forEach(c => {
  num+=QUESTIONS[c].length
})

function newQuestion() {
  let qElement = document.querySelector('section#question')
  
  let qBlock = qElement.querySelector('.question')
  let aBlock = qElement.querySelector('.answers')
  if (num > 0) {
    
    var category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]
    while (QUESTIONS[category].length <=0) {
      category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]
    }
    
    qElement.style.background = COLORS[category]
    document.querySelector('h1#category').innerHTML = category

    question = QUESTIONS[category][Math.floor(Math.random() * QUESTIONS[category].length)]
    let q = question['q']
    qBlock.innerHTML = q
  
    c = question['c']
    w1 = question['w1']
    w2 = question['w2']
    w3 = question['w3']

    if (c.includes(' ') === false || !!question['isNotBase64'] !== true) {
      c = atob(c)
    }
    if (w1.includes(' ') === false || !!question['isNotBase64'] !== true) {
      w1 = atob(w1)
    }
    if (w2.includes(' ') === false || !!question['isNotBase64'] !== true) {
      w2 = atob(w2)
    }
    if (w3.includes(' ') === false || !!question['isNotBase64'] !== true) {
      w3 = atob(w3)
    }

    let cPos = `#a${Math.floor((Math.random() * 4) + 1)}`
    aBlock.querySelector(cPos).innerHTML = c
    
    let w1Pos = `#a${Math.floor((Math.random() * 4) + 1)}`
    while (w1Pos === cPos) {
      w1Pos = `#a${Math.floor((Math.random() * 4) + 1)}`
    }
    aBlock.querySelector(w1Pos).innerHTML = w1
  
    let w2Pos = `#a${Math.floor((Math.random() * 4) + 1)}`
    while ((w2Pos === cPos) || (w2Pos === w1Pos)) {
      w2Pos = `#a${Math.floor((Math.random() * 4) + 1)}`
    }
    aBlock.querySelector(w2Pos).innerHTML = w2
  
    let w3Pos = `#a${Math.floor((Math.random() * 4) + 1)}`
    while ((w3Pos === cPos) || (w3Pos === w1Pos) || (w3Pos === w2Pos)) {
      w3Pos = `#a${Math.floor((Math.random() * 4) + 1)}`
    }
    aBlock.querySelector(w3Pos).innerHTML = w3

    cPosB = btoa(String(cPos))
    w1PosB = btoa(String(w1Pos))
    w2PosB = btoa(String(w2Pos))
    w3PosB = btoa(String(w3Pos))

    aBlock.querySelector(cPos).setAttribute('onclick', `showAnswer('${cPos}', '${category}')`)
    aBlock.querySelector(w1Pos).setAttribute('onclick', `showAnswer('${w1Pos}', '${category}')`)
    aBlock.querySelector(w2Pos).setAttribute('onclick', `showAnswer('${w2Pos}', '${category}')`)
    aBlock.querySelector(w3Pos).setAttribute('onclick', `showAnswer('${w3Pos}', '${category}')`)
    
    return true
  }
  else {
   qElement.style.background = COLORS['none']
   document.querySelector('h1#category').innerHTML = 'No More Questions!'
   qBlock.innerHTML = ''
   aBlock.querySelector('#a1').innerHTML = ''
   aBlock.querySelector('#a2').innerHTML = ''
   aBlock.querySelector('#a3').innerHTML = ''
   aBlock.querySelector('#a4').innerHTML = ''
  }
}
newQuestion()

function showAnswer(a, cat) {
  cPos = atob(cPosB)
  w1Pos = atob(w1PosB)
  w2Pos = atob(w2PosB)
  w3Pos = atob(w3PosB)
  let qElement = document.querySelector('section#question')
  let aBlock = qElement.querySelector('.answers')

  aBlock.querySelector(cPos).style.background = 'green'
  aBlock.querySelector(cPos).setAttribute('onclick', '')

  aBlock.querySelector(w1Pos).style.background = 'red'
  aBlock.querySelector(w1Pos).setAttribute('onclick', '')

  aBlock.querySelector(w2Pos).style.background = 'red'
  aBlock.querySelector(w2Pos).setAttribute('onclick', '')

  aBlock.querySelector(w3Pos).style.background = 'red'
  aBlock.querySelector(w3Pos).setAttribute('onclick', '')

  if (a === cPos) {
    document.querySelector('h1#category').innerHTML = `${document.querySelector('h1#category').innerHTML} (Correct)`
  }
  else {
    document.querySelector('h1#category').innerHTML = `${document.querySelector('h1#category').innerHTML} (Wrong)`
  }

  setTimeout(function() {
    QUESTIONS[cat].splice(QUESTIONS[cat].indexOf(question), QUESTIONS[cat].indexOf(question) + 1);
    aBlock.querySelector(cPos).style.background = 'white'
    aBlock.querySelector(w1Pos).style.background = 'white'
    aBlock.querySelector(w2Pos).style.background = 'white'
    aBlock.querySelector(w3Pos).style.background = 'white'
    num--
    newQuestion()
  }, 5000)
}