$(() => {
    const container = $('#container');
    const addButton = $('#add-item-btn');
    addButton.css({
        alignItems: "center",
        appearance: "none",
        backgroundImage: "radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%)",
        border: "0",
        borderRadius: "50%",
        boxShadow: "rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset",
        color: "#fff",
        height: "50px",
        width: "50px"
    });

    addButton.on('click', () => {
        const newDiv = $('<div></div>');
        newDiv.addClass('element');
        newDiv.text('Element');
        container.append(newDiv);
    });
});


