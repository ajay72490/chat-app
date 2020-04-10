const socket = io()

//element
const $dropdown = document.querySelector('#dropdown')

//template
const dropdownTemplate = document.querySelector('#dropdown-template').innerHTML

    socket.emit('getActiveRooms', (activeRooms) => {
        if (!activeRooms.includes('default')) {
            activeRooms = activeRooms.concat('default')
        }
        activeRooms.forEach((room) => {            
            const html = Mustache.render(dropdownTemplate, { room })
            $dropdown.insertAdjacentHTML('beforeend', html)
        })
    })

