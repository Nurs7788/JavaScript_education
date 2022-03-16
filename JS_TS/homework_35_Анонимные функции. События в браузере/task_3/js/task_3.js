$(() => {
    const minutes = $('#minutes');
    const seconds = $('#seconds');
    const startBtn = $('#start');
    const pauseBtn = $('#pause');
    const resetBtn = $('#reset');
    const btn = $('button');
    const divBlock = $('div');

    divBlock.css({
        display: "flex",
        justifyContent: "center",
        fontSize: "100px"
    });

    btn.css({
        appearance: "button",
        border: "solid transparent",
        borderRadius: "16px",
        borderWidth: "0 0 4px",
        boxSizing: "border-box",
        color: "#FFFFFF",
        cursor: "pointer",
        display: "inline-block",
        fontFamily: "din-round,sans-serif",
        fontSize: "15px",
        fontWeight: "700",
        letterSpacing: ".8px",
        lineHeight: "20px",
        margin: "0",
        marginBottom: "25px",
        marginTop: "25px",
        outline: "none",
        overflow: "visible",
        padding: "13px 16px",
        textAlign: "center",
        textTransform: "uppercase",
        touchAction: "manipulation",
        transform: "translateZ(0)",
        transition: "filter .2s",
        userSelect: "none",
        width: "100%"
    });

    startBtn.css({
        backgroundColor: "#1899D6",
    });

    pauseBtn.css({
        backgroundColor: "#f44336",
    });

    resetBtn.css({
        backgroundColor: "#555555",
    });
    
    let sec = 0;
    let min = 0;
    let intervalSec = null;

    startBtn.on('click', () => {
        if(intervalSec) return;
        
        intervalSec = setInterval(() => {
            if(sec >= 59) {
              sec = 0;  
                if(min >= 59) {
                    min = 0
                };
                min++;
                minutes.text(min.toString().padStart(2, 0));
            };
            seconds.text(sec.toString().padStart(2, 0));
            sec++;
        }, 1000);
    });


    pauseBtn.on('click', () => {
        clearInterval(intervalSec);
        intervalSec = null;
    });

    resetBtn.on('click', () => {
        clearInterval(intervalSec);
        intervalSec = null;
        sec = 0;
        min = 0;
        seconds.text(sec.toString().padStart(2, 0));
        minutes.text(min.toString().padStart(2, 0));
    });
});