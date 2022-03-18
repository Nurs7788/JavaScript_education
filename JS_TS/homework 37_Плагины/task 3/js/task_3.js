$(() => {
    let save = $('.save');
    let clear = $('.clear');
   
    const notepad = document.querySelector('textarea'),
    savedText = localStorage.getItem('notepad');
    notepad.value = savedText;

    function saveNotepad() {
        localStorage.setItem('notepad', notepad.value);
    };

    function clearNotepad() {
        localStorage.removeItem('notepad');
        notepad.value = '';
    };

    save.on('click', () => {
        saveNotepad();
    });

    clear.on('click', () => {
        clearNotepad();
    });
});
