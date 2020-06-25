var newDayList = data.map(state =>{
    return `<div class="col-3 mt-5">
    <div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">State: ${state.state}</h5>
  <h6 class="card-subtitle mb-2"> Case: ${state.cases}</h6>
  <p class="card-text">Deaths:${state.deaths}</p>
  </div>
  </div>
  </div>
  `
})

var cardRow = document.querySelector('.row')
cardRow.innerHTML = newDayList.join('')