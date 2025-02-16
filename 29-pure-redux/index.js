import store from './redux/store.js'
import { addCurrentTime, clearTimes } from './redux/actionCreators.js'

const addTime = document.getElementById('addTime')
addTime.addEventListener('click', () => {
  store.dispatch(addCurrentTime())
})

const clearTime = document.getElementById('clearTimes')
clearTime.addEventListener('click', () => {
  store.dispatch(clearTimes())
})

const timesList = document.getElementById('timesList')

store.subscribe(() => {
  timesList.innerHTML = ''
  const times = store.getState()
  times.forEach(time => {
    let liElement = document.createElement('li')
    liElement.innerText = time
    timesList.appendChild(liElement)
  })
})

// const unsubscribe = store.subscribe(() =>
//   console.log(`Redux store just changed! ${store.getState()}`)
// )

// store.dispatch({
//   type: 'ADD_CURRENT_TIME',
//   payload: '11:30:00',
// })

// store.dispatch({
//   type: 'ADD_CURRENT_TIME',
//   payload: '11:32:00',
// })

// store.dispatch({
//   type: 'CLEAR_ALL_TIMES',
// })
