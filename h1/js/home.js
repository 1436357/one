var dots = banners.querySelector('.qwe')
dots.addEventListener('click', function (event) {
  if (event.target.tagName.toLowerCase() === 'li') {
    var newIndex = parseInt(event.target.getAttribute('data-index'))
    switchImage(newIndex)
  }
})
