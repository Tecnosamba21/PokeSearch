const $ = selector => document.querySelector(selector)

const search = $('input')

search.addEventListener('input', () => {
    const value = search.value
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then(res => res.json())
        .then(response => {
            search.classList.remove('error')
            search.classList.add('sucess')
            $('h1').textContent = response['name']
            $('.show').src = response['sprites']['front_default']
            return
        })
        .catch(() => {
            search.classList.remove('sucess')
            search.classList.add('error')
            $('h1').textContent = ''
            $('.show').src = ''
            return
        })
})