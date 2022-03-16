$(() => {
    let container = document.getElementById("container");
    let tabContainer = container.firstElementChild;
    let contentContainer = container.lastElementChild;
    let tabs = tabContainer.children;
    let contents = contentContainer.children;
 
    tabs[0].classList.add("active");
    contents[0].classList.add("active");
    tabContainer.dataset.index = 0;

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].dataset.index = i;
    };

    function tabs_click(event) {
        let tab = event.target;
        
        let result = tab.matches(".item");

        if (result === false) return;
        
        let firstElem = parseInt(this.dataset.index);
        let secondElem = parseInt(tab.dataset.index);

        if (firstElem === secondElem) return;

        tabs[firstElem].classList.remove("active");
        contents[firstElem].classList.remove("active");

        tabs[secondElem].classList.add("active");
        contents[secondElem].classList.add("active");

        this.dataset.index = secondElem;
    };


    tabContainer.addEventListener("click", tabs_click);
});
