const inpEl = document.querySelector('.search-id');
console.log(inpEl);
inpEl.addEventListener('input', ()=>{
    const value = inpEl.value;
    console.log(value);
})

