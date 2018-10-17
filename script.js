window.int = 1;
document.addEventListener('keydown',({key})=>{
  if(key === 'g'){
    performance.mark(`start ${int}`);
    for (var i = 0; i < 1000; i++) {
      let el = document.createElement('fs-person');
      el.name = `Tyler ${i}`;
      el.gender = `male`;
      document.body.appendChild(el);
    }
    document.querySelectorAll('fs-person').forEach((el,i)=>{
      if(i%10 === 0){
        // el.setAttribute('name', `${el.getAttribute('name')} ${i}`);
        el.name+= ` ${i}`;
      }
    });

    window.setTimeout(function() {
      performance.mark(`end ${int}`);
      performance.measure(`render ${int}`,`start ${int}`,`end ${int}`);
      console.log(performance.getEntriesByName(`render ${int}`)[0].duration);
      int++;
    }, 0);

  }

})
