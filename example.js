import bareSpinner from './index.js'

const spinner = bareSpinner({
  text: 'Loading unicorns\n  (And rainbows)'
}).start()

setTimeout(() => {
  spinner.text = 'Calculating splines'
}, 2000)

setTimeout(() => {
  spinner.success('Finished!')
}, 5000)
