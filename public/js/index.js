const socket = io()

//element
const $dropdown = document.querySelector('#dropdown')

//template
const dropdownTemplate = document.querySelector('#dropdown-template').innerHTML

    socket.emit('getActiveRooms', (activeRooms) => {
        activeRooms.forEach((room) => {
            const html = Mustache.render(dropdownTemplate, { room })
            $dropdown.insertAdjacentHTML('beforeend', html)
        })
    })

