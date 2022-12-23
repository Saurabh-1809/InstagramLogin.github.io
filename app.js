let inputs= [];

const addinp = (e)=>{
    e.preventDefault();
    let inp={
        id: Date.now(),
        userid :document.getElementById('userid').value, 
        pass :document.getElementById('pass').value
    }
    inputs.push(inp);
    document.querySelector('input').reset();

    localStorage.setItem('data',JSON.stringify(inputs));

}

document.addEventListener('DOMContentLoaded',()=>{
        document.getElementById('sub').addEventListener('click',addinp);
        console.log(inputs);
});