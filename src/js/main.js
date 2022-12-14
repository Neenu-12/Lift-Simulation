const form = document.querySelector('form');
let fnum = 0;
const destination_record = []

form.addEventListener('submit',function(e){
  e.preventDefault();
  document.getElementById('submit').disabled = true;
  let lift_num = document.getElementById('lift_num').value;
  let floor_num = document.getElementById('floor_num').value;

  for(let i = 0; i < floor_num; i++){
    generator(lift_num,floor_num);
  }
  lift_appender(lift_num);
});

function generator(lift_num,floor_num){
  const lift_area = document.querySelector('.lift-area');
  const buttons_n_lift = document.createElement('div'); 
  buttons_n_lift.setAttribute('class','buttons-n-lift');

  const button_div = document.createElement('div');
  button_div.setAttribute('class','button-div');
  
  const button_up = document.createElement('button');
  button_up.setAttribute('class','up');
  button_up.innerText = "Up";
  button_up.setAttribute('data-floor',fnum);
  button_up.addEventListener('click',() => lift_move(button_up.getAttribute('data-floor')));
  button_up.addEventListener('click',lift_move(fnum));
  if(fnum === floor_num - 1){
    button_up.style.display = 'none';
  }

  const button_down = document.createElement('button');
  button_down.setAttribute('class','down');
  button_down.innerText = "Down";
  button_down.setAttribute('data-floor',fnum);
  button_down.addEventListener('click',() => lift_move(button_up.getAttribute('data-floor')));
  if(fnum === 0){
    button_down.style.display = 'none';
  }

  const lift_div = document.createElement('div'); 
  lift_div.setAttribute('class','lift-div');

  const floor_big_div = document.createElement('div');
  floor_big_div.setAttribute('class','floor-big-div');

  const floor_left_div = document.createElement('div');
  floor_left_div.setAttribute('class','left');

  const hr = document.createElement('hr');

  const floor_right_div = document.createElement('div');
  floor_right_div.setAttribute('class','right');

  const floor_p = document.createElement('p');
  floor_p.innerText = `Floor ${fnum}`;

  floor_left_div.append(hr);
  floor_right_div.append(floor_p);
  floor_big_div.append(floor_left_div,floor_right_div);
  button_div.append(button_up,button_down);

  buttons_n_lift.append(button_div,lift_div);
  lift_area.prepend(buttons_n_lift,floor_big_div);
  fnum++;
}

function lift_appender(lift_num){
  const lift_divs = document.querySelectorAll('.lift-div');
  for(i = 0; i < lift_num; i++){
    const lift = document.createElement('div');
    lift.setAttribute('class','lift');
    lift.setAttribute('data-status','free');
    lift.setAttribute('data-initial-position',0);

    const left_door = document.createElement('div');
    const right_door = document.createElement('div');
    left_door.setAttribute('class','door');
    right_door.setAttribute('class','door');

    lift.append(left_door,right_door);
    destination_record.push('0');
    lift_divs[lift_divs.length - 1].append(lift);
    if(i > 0){
      lift.style.marginLeft = "4%";
    }
  }
}

function lift_move(destination){
  const lift_list = document.querySelectorAll('.lift');
  for(let l = 0; l < lift_list.length; l++){
      if(lift_list[l].getAttribute('data-initial-position') != destination){
        if(lift_list[l].getAttribute('data-status') != 'busy'){
          mover(destination,l);
          break;
        }
      }
  }
}

function mover(destination,pos){
      console.log(destination_record);
      const lift_list = document.querySelectorAll('.lift');
      if(!(destination_record.includes(destination))){
        lift_list[pos].setAttribute('data-status','busy');
        const movement = (destination) * (-130);
        lift_list[pos].style.transform = `translateY(${movement}px)`;
        const time_calculation = Math.abs(destination - lift_list[pos].getAttribute('data-initial-position'));
        lift_list[pos].style.transitionDuration = `${time_calculation * 2}s`;
        door_mover(lift_list[pos],pos,destination,time_calculation);
    }
}

function door_mover(current_lift,pos,destination,time_calculation){
  setTimeout(() => {
    current_lift.querySelectorAll('.door')[0].style.transform = `translateX(-75%)`;
    current_lift.querySelectorAll('.door')[0].style.transitionDuration = "2.5s";
    current_lift.querySelectorAll('.door')[1].style.transform = `translateX(75%)`;
    current_lift.querySelectorAll('.door')[1].style.transitionDuration = "2.5s";
  },(time_calculation * 2000));

  setTimeout(() => {
    current_lift.querySelectorAll('.door')[0].style.transform = `translateX(0%)`;
    current_lift.querySelectorAll('.door')[0].style.transitionDuration = "2.5s";
    current_lift.querySelectorAll('.door')[1].style.transform = `translateX(0%)`;
    current_lift.querySelectorAll('.door')[1].style.transitionDuration = "2.5s";
  },(time_calculation * 2000) + 2500);

  setTimeout(() => {
    current_lift.setAttribute('data-status','free');
  },(time_calculation * 2000) + 5000);
  
  current_lift.setAttribute('data-initial-position',destination);
  destination_record[pos] = destination;
}
