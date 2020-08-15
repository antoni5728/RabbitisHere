function isRun() {
    let spanElement = document.getElementById("run");
    let textSpanElement = spanElement.innerHTML;
    textSpanElement = textSpanElement.toLowerCase();
    if (textSpanElement === "run") {
        return false;
    } else {
        return true;
    }

}

function run() {
    let rab = document.getElementById("rab");
    rab.style.display = "inline-block";
}

function stop() {
    let rab = document.getElementById("rab");
    rab.style.display = "none";
}

function setText(text) {
    document.getElementById("run").innerHTML = text;
}

function clickButton() {
    console.log("Click");
    if (isRun()) {
        stop();
        setText("run");
    } else {
        run();
        setText("stop");
    }
}

function isS1() {
    let selElement = document.getElementById("sel");
    let val = selElement.value;
    return val === "1";
}

function isS2() {
    return !isS1();
}

function showText() {
    document.getElementById("run").style.display = "inline-block";
}

function hideText() {
    document.getElementById("run").style.display = "none";
}

function pickSelect() {
// if (isS1()){
//     showText();
// }else if(isS2()){
//     hideText();
// }else{
//     showText();
// }
    if (isS1()) {
        showText();
    } else {
        hideText();
    }
}