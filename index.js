const inpEl = document.querySelector('.search-id');
const pQueEl = document.querySelector('.factorial-question');
let answer=1;

inpEl.addEventListener('change', (e)=>{
    const factor = (i) => {
        const value = e.target.value;
        
        for (let i = 1; i <= value; i++) {
            answer = answer * i
        }
        pQueEl.textContent = value + "! = " + answer;
    }
    factor(1)
    answer = 1;
})

