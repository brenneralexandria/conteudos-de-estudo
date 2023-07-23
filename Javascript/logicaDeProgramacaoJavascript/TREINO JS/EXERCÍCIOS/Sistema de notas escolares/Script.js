
function GetScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score <= 60 && score >= 0

    let scoreFinal;

    if (scoreA) {
        scoreFinal = 'A'
    } else if (scoreB) {
        scoreFinal = 'B'
    }  else if (scoreC) {
        scoreFinal = 'C'
    } else if (scoreD) {
        scoreFinal = 'D'
    } else if (scoreF) {
        scoreFinal = 'F'
    } else {
    scoreFinal = 'Nota inválida, calcule novamente!'
    }

    return(scoreFinal)
}
console.log(GetScore(100))
console.log(GetScore(-7))
console.log(GetScore(50))
console.log(GetScore(60))
console.log(GetScore(85))
console.log(GetScore(92))
console.log(GetScore(31))
console.log(GetScore(107))

