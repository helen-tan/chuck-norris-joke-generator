document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    const number = document.querySelector('input[type="number"]').value;
    
    // Start creating XHR/AJAX request
    // 1. New XHR object
    const xhr = new XMLHttpRequest();
    // 2. Open a request
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    
    // What to do when we get the data - onload property
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText); 
            // The response returned will be a JSON string
            // Need to change it into a JS object (JSON.parse) so we can do operation like looping

            let output = '';

            if(response.type === 'success') {
                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`;
                });
                // We have to do value.forEach instead of just forEach
                // as that is format of the data is returned by the api
                // different apis will return different formats

            } else {
                output += `<li>Something went wrong.</li>`;
            }

            document.querySelector('.jokes').innerHTML = output;
        }

    }
    // 3. Send the request
    xhr.send();

    e.preventDefault();
}