// const form = document.querySelector('form');
// const div = document.querySelector('div');

// form.addEventListener('submit',function(e){
//   e.preventDefault();
//   document.getElementById('submit').disabled = true;
//   const lift_num = document.getElementById('lift_num').value;
//   const floor_num = document.getElementById('floor_num').value;
//   console.log(lift_num);
//   console.log(floor_num);

//   const generator = () => {
//   const lift_area = document.querySelector('.lift-area');
//   const buttons_n_lift = document.createElement('div'); 
//   buttons_n_lift.setAttribute('class','buttons-n-lift');
  

//   const button_div = document.createElement('div');
//   button_div.setAttribute('class','button-div');
    
//   const button_up = document.createElement('button');
//   button_up.setAttribute('class','up');
//   button_up.addEventListener('click',lift_move);
  // function lift_move(){
  //   console.log('click');
  // }

  // const button_down = document.createElement('button');
  // button_down.setAttribute('class','down');

  // const lift_div = document.createElement('div');
  // lift_div.setAttribute('class','lift-div');

  // const floor_big_div = document.createElement('div');
  // floor_big_div.setAttribute('class','floor-big-div');

  // const floor_left_div = document.createElement('div');
  // floor_left_div.setAttribute('class','left');

  // const hr = document.createElement('hr');

  // const floor_right_div = document.createElement('div');
  // floor_right_div.setAttribute('class','right');

  // const floor_p = document.createElement('p');

  // floor_left_div.append(hr);
  // floor_right_div.append(floor_p);
  // floor_big_div.append(floor_left_div,floor_right_div);
  // button_div.append(button_up,button_down);

  // lift.append(liftt);

// -------------------------------------------------------------------------------------

  // for(let i = 0; i < lift_num; i++){
  //   const lift = document.createElement('div');
  //   lift.setAttribute('class','lift');
  //   lift_div.append(lift);
  //   if(i > 0){
  //     lift.style.marginLeft = "5%";
  //   }
  // }

// ----------------------------------------------------------------------------------------

// for(let i = 0; i < lift_num; i++){
//     const lift = document.createElement('div');
//     lift.setAttribute('class','lift');
//     lift.setAttribute('data-lift-state','free');
//     lift_div.append(lift);
//     if(i > 0){
//       lift.style.marginLeft = "5%";
//     }
//   }



  // buttons_n_lift.append(button_div,lift_div);
  // lift_area.append(buttons_n_lift,floor_big_div);
// }

// for(let i = floor_num; i > 0; i--){
//   generator();

//   if(i !== 1){
//     const extra_lifts = document.querySelectorAll('.lift');
//     for(let x = 0; x < lift_num; x++){
//       extra_lifts[x].remove();
//     }
//   }
// }
// prepend
// for(let j = floor_num; j > 0; j--){
//   const up_text = document.querySelectorAll('.up');
//   up_text[j-1].innerText = "Up";
//   const down_text = document.querySelectorAll('.down');
//   down_text[j-1].innerText = "Down";
//   const p_text = document.querySelectorAll('p');
//   p_text[j-1].innerText = `Floor ${floor_num - j + 1}`;
  // p_text[j-1].innerText = `Floor ${floor_num - (j + 1)}`;  // doubt
  // console.log(j);
  // console.log(p_text[j-1]);
// }

// const lift = document.querySelectorAll('.lift');
// console.log(lift);

// // Moving lifts up :-
// const up = document.querySelectorAll('.up');
// console.log(up);
// for(let i = 0; i < up.length; i++){
//     up[i].addEventListener('click',function(){
//         lift.style.transform = "translateY(-150%)";
//         lift.style.transitionDuration = "2s";
//         console.log("asd");
//     })
// }

// // Moving lifts down :-
// const down = document.querySelectorAll('.down');
// console.log(down);
// for(let i = 0; i < down.length; i++){
//     down[i].addEventListener('click',function(){
//         lift.style.transform = "translateY(137%)";
//         lift.style.transitionDuration = "2s";
//         // console.log("defs");
//     })
// }

// Moving the lifts to a particular floor :-

  // const lift = document.querySelectorAll('.lift');
  // for(let l = 0; l < lift.length; l++){
  
  // Moving up :-
  // const up = document.querySelectorAll('.up');
  // for(let i = 0; i < floor_num; i++){
  //       up[i].addEventListener('click',function(){
  //         const s = (floor_num - i -1) * (-133);
  //         lift[l].style.transform = `translateY(${s}%)`;
  //         lift[l].style.transitionDuration = "2s";
  //         console.log(lift[l]);
  //         // console.log("asd");
  //     })    
  // }

  // function lift_move(){
  //   for(let l = 0; l < lift.length; l++){
  //     console.log("inside function");
  //     const s = (floor_num - l -1) * (-133);
  //     lift[l].style.transform = `translateY(${s}%)`;
  //     lift[l].style.transitionDuration = "2s";
  //   }
  // }

  // function lift_move(){
  //   console.log('click');
  // }

  // Moving down :-

  // const down = document.querySelectorAll('.down');
  // for(let i = 0; i < floor_num; i++){
  //     down[i].addEventListener('click',function(){
  //         const s = (floor_num - i -1) * (-135);
  //         lift[l].style.transform = `translateY(${s}%)`;
  //         lift[l].style.transitionDuration = "2s";
  //         console.log("def");
  //     })
  // }

// for(let l = 0; l < lift_num; l++){

//   // Moving up :-
//   const up = document.querySelectorAll('.up');
//   for(let i = 0; i < floor_num; i++){
//       up[i].addEventListener('click',function(){
//           const s = (floor_num - i -1) * (-133);
//           lift[l].style.transform = `translateY(${s}%)`;
//           lift[l].style.transitionDuration = "2s";
//           // console.log(lift[l]);
//           console.log("asd");
//       })
//   }

//   // Moving down :-

//   for(let i = 0; i < floor_num; i++){
//       down[i].addEventListener('click',function(){
//           const s = (floor_num - i -1) * (-135);
//           lift[l].setAttribute('data-state','busy');
//           if(lift[l].getAttribute('data-state') === ){
//             lift[l].style.transform = `translateY(${s}%)`;
//             lift[l].style.transitionDuration = "2s";
//             console.log("def");
//           }
            
//       })
//   }
// }

// const lift = document.querySelectorAll('.lift');
// for(lift of lifts){
//   console.log(lift);
//   // Moving up :-
//   const up = document.querySelectorAll('.up');
//   for(let i = 0; i < floor_num; i++){
//       up[i].addEventListener('click',function(){
//           // console.log(lift);
//           const s = (floor_num - i -1) * (-133);
//           lift.style.transform = `translateY(${s}%)`;
//           lift.style.transitionDuration = "2s";
//           // console.log(lift[l]);
//           console.log("asd");
//       })
//   }

  // Moving down :-

  // for(let i = 0; i < floor_num; i++){
  //     down[i].addEventListener('click',function(){
  //         const s = (floor_num - i -1) * (-135);
  //         lift[l].setAttribute('data-state','busy');
  //         if(lift[l].getAttribute('data-state') === ){
  //           lift[l].style.transform = `translateY(${s}%)`;
  //           lift[l].style.transitionDuration = "2s";
  //           console.log("def");
  //         }
            
  //     })
  // }
// }

// });


