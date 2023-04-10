(function(){
    let screen = document.querySelector('.screen');
    let equal = document.querySelector('.equal');
    let cancel = document.querySelector('.cancel');
    let btn = document.querySelectorAll('.btn');

    btn.forEach(function(val){
      val.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        screen.value += value;
      })
    });

    equal.addEventListener('click', function(e){
      if(screen.value === ''){
          screen.value = "";
      }else{
          let answer = eval(screen.value);
          screen.value = answer;
      }
    })

    cancel.addEventListener('click', function(e){
      screen.value = "";
    })

   })();