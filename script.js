const $ = selector => document.querySelector(selector)

const search = $('input')

let imgRoute = ''

search.addEventListener('input', () => {
    const value = search.value.toLowerCase()
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then(res => res.json())
        .then(response => {
            search.classList.remove('error')
            search.classList.add('sucess')
            $('#name').textContent = response['name'].toUpperCase()
            imgRoute = response['sprites']['front_default']
            $('.show').src = imgRoute
            return
        })
        .catch(() => {
            search.classList.remove('sucess')
            search.classList.add('error')
            $('#name').textContent = ''
            imgRoute = ''
            $('.show').src = imgRoute
            return
        })
})

const help = $('button')

help.addEventListener('click', () => {
    if ($('#helpDiv').classList.contains('noDisplay')) {
        $('#helpDiv').classList.remove('noDisplay')
        $('#helpDiv').classList.add('helpDiv')
    }
    else {
        $('#helpDiv').classList.add('noDisplay')
        $('#helpDiv').classList.remove('helpDiv')
    }
})

$('.show').addEventListener('click', () => {
    alert(imgRoute)
})