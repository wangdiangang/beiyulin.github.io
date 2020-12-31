/*
 * @Author: 五道杠
 */
document.addEventListener('click', function (e) {
    let x = e.clientX
    let y = e.clientY
    createText(y, x)
  })
  let texts = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"]
  let color = ['red', 'blue', 'yellow', 'green']
  function createText(t, l) {
    let p = document.createElement('p')
    p.style.color = color[Math.ceil(Math.random() * 3)]
    p.innerText = texts[Math.ceil(Math.random() * 11)]
    p.style.position = 'fixed'
    p.style.top = t + 'px'
    p.style.left = l + 'px'
    document.body.append(p)
    p.style.animation = "top 3s forwards"
    setTimeout(() => {
      document.body.removeChild(p)
    }, 3100)
  }
