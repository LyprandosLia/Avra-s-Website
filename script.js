const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');


tabs.forEach(tab =>{
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        contents.forEach(c=> c.classList.remove('active'));

        const activeContent = document.getElementById(tab.dataset.target);
        activeContent.classList.add('active');
    });
});