





function results() {

    let phyNum = parseInt(document.getElementById("pn").value);
    let cheNum = parseInt(document.getElementById("cn").value);
    let mathNum = parseInt(document.getElementById("mn").value);
    let bioNum = parseInt(document.getElementById("bn").value);
    let engNum = parseInt(document.getElementById("en").value);
    let banNum = parseInt(document.getElementById("ban").value);



    function Grade(num) {
        let gd;
        if (num >= 80) {
            gd = "A+";
        }
        else if (num < 80 && num >= 70) {
            gd = "A";
        }
        else if (num < 70 && num >= 60) {
            gd = "A-";
        }
        else if (num < 60 && num >= 50) {
            gd = "B";
        }
        else if (num < 50 && num >= 40) {
            gd = "C";
        }
        else if (num < 40 && num >= 33) {
            gd = "D";
        }
        else {
            gd = 'fail';
        }
        return gd;
    }



    function GPA(num) {
        let gpa;
        if (num >= 80) {
            gpa = "5.00";
        }
        else if (num < 80 && num >= 70) {
            gpa = "4.00";
        }
        else if (num < 70 && num >= 60) {
            gpa = "3.50";
        }
        else if (num < 60 && num >= 50) {
            gpa = "3.00";
        }
        else if (num < 50 && num >= 40) {
            gpa = "2.00";
        }
        else if (num < 40 && num >= 33) {
            gpa = "1.00";
        }
        else {
            gpa = "0.00";
        }
        return gpa;
    }




    let phyGra = Grade(phyNum);
    document.getElementById("pg").innerHTML = phyGra;

    let cheGra = Grade(cheNum);
    document.getElementById("cg").innerHTML = cheGra;

    let mathGra = Grade(mathNum);
    document.getElementById("mg").innerHTML = mathGra;

    let bioGra = Grade(bioNum);
    document.getElementById("bg").innerHTML = bioGra;

    let engGra = Grade(engNum);
    document.getElementById("eg").innerHTML = engGra;

    let banGra = Grade(banNum);
    document.getElementById("bag").innerHTML = banGra;





    let phyGpa = GPA(phyNum);
    document.getElementById("pp").innerHTML = phyGpa;

    let cheGpa = GPA(cheNum);
    document.getElementById("cp").innerHTML = cheGpa;

    let mathGpa = GPA(mathNum);
    document.getElementById("mp").innerHTML = mathGpa;

    let bioGpa = GPA(bioNum);
    document.getElementById("bp").innerHTML = bioGpa;

    let engGpa = GPA(engNum);
    document.getElementById("ep").innerHTML = engGpa;

    let banGpa = GPA(banNum);
    document.getElementById("bap").innerHTML = banGpa;
}

