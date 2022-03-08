
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
    // console.log(event);
    tabPanels.forEach(label => {
        label.hidden = true;
        // console.log(label);
    });
    tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected', false);
        // console.log(tab);
    });

    event.currentTarget.setAttribute('aria-selected', true)   
       
    const {id} = event.currentTarget;
    const tabPanel = tabPanels.find( panel => panel.getAttribute("aria-labelledby") === id) ;
    tabPanel.hidden = false;
    
}
tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
