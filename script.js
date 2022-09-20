function checkGrade() {
    var myGrade = Number(grade.value)
    var songInvalid = new Audio ("audio/failure-drum.mp3") 
    var songFail = new Audio ("audio/you are a failure.mp3") 
    var songPass = new Audio ("audio/use your brain.mp3") 
    var songAverage = new Audio ("audio/somebody.mp3") 
    var songCredit = new Audio ("audio/thank you.mp3") 
    var songGood = new Audio ("audio/shephard.mp3") 
    var songExcellent = new Audio ("audio/common person.mp3") 
    var songUnkown = new Audio ("audio/windows-error.mp3") 
 
 
 
 if (grade.value =="") {
     
    disp.innerText+= "INVALID"
    grade.value = "INVALID"
     songInvalid.play()
 }
 else if (grade.value > 0 && grade.value <= 40 ) {
     // alert(grade='Fail')
     disp.innerText += "F- FAIL 🥴"
     disp.style.color ="red"
     grade.value = "FAIL 🥴"
     songFail.play()
 }
 else if (grade.value >= 40 && grade.value <= 45) {
     // alert(grade= "E pass")
     disp.innerText +=  "E- PASS 😔"
     grade.value = "PASS 😔"
     disp.style.color =["#85BAA1"]
     songPass.play()
 }
 else if (grade.value >= 45 && grade.value <= 50)
  {
 //  alert(grade='D')
  disp.innerText +=  "D - AVERAGE 😬"
  grade.value = "AVERAGE 😬"
  disp.style.color =["#6e8894"]
  songAverage.play()
 }
 else if (grade.value >= 50 && grade.value <= 60)
  {
 //  alert(grade='C')
  disp.innerText +=  "C - CREDIT 🤔"
  grade.value = "CREDIT 🤔"
  disp.style.color =["#ED9B40"]
  songCredit.play()
 }
 else if (grade.value >= 60 && grade.value <= 70)
  {
 //  alert(grade='C')
  disp.innerText +=  "B - GOOD 🙂"
  grade.value = "GOOD 🙂"
  disp.style.color =["#CEEDDB"]
  songGood.play()
 }
 else if (grade.value >= 70 && grade.value <= 100)
  {
 //  alert(grade='C')
  disp.innerText +=  "A - EXCELLENT 😀"
  grade.value = "EXCELLENT 😀"
  disp.style.color =["red-400"]
  songExcellent.play()
 }
 else{
     disp.innerText += "UNKOWN"
     grade.value = "UNKOWN"
     songUnkown.play()
 }
 
 }