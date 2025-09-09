const descriptions = document.getElementById('description');

const saveState = _.debounce(() => {
    if (!history.state || history.state.descriptions !== descriptions.value) {
        history.pushState({ descriptions: descriptions.value }, '',);
    }
}, 5000);

descriptions.addEventListener('input', saveState);

window.addEventListener('popstate',()=>{
    if (history.state){
        descriptions.value = history.state.descriptions;
    }
    else{
        descriptions.value ='';
    }
})