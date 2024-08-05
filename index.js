function addingEventListener() {
    const input = document.getElementById('button')
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add an event listener to the input element for the click event
    input.addEventListener('click', clickAlert);
  }
  addingEventListener();
  