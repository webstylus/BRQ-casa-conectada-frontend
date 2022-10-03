let light = 0
let door = 0
let alertInt = 0

$(document).ready(function (e) {

    $('.load-items').hide()
    // $('#hour-item').fadeIn()
    $('#home-item').fadeIn()

    $('#reload').on('click', function (e) {
        $('.load-items').slideUp().fadeOut()
        $('#hour-item').fadeIn()
    })

    $('#home').on('click', function (e) {
        $('.load-items').slideUp().fadeOut()
        $('#home-item').fadeIn()
    })
    $('#map,.click-map').on('click', function (e) {
        $('.load-items').slideUp().fadeOut()
        $('#map-item').fadeIn()
    })
    $('#music').on('click', function (e) {
        $('.load-items').slideUp().fadeOut()
        $('#music-item').fadeIn()
    })

    $('.date').text(new Date().toLocaleDateString())
    $('.hora').text(new Date().toLocaleTimeString())
    setInterval(function () {
        $('.hora').text(new Date().toLocaleTimeString())
    }, 1000)

});

function handleLight() {
    $('.door').hide()
    $('.alert-home').hide()
    const action = $('#light-action');
    action.removeClass('light-on')
    action.removeClass('light-off')

    const lampText = $('.lamp-text')
    const lightToggle = $('#light-toggle')
    lightToggle.find('i').removeClass('fa-toggle-on')
    lightToggle.find('i').removeClass('fa-toggle-off')

    if (light === 0) {
        light = 1
        action.addClass('light-on')
        lampText.text('Luz da garagem acesa')
        lightToggle.find('i').addClass('fa-toggle-on')
        lightToggle.find('.textAction').text('Apagar Luz da garagem')
    } else {
        light = 0
        action.addClass('light-off')
        lampText.text('Luz da garagem apagada')
        lightToggle.find('i').addClass('fa-toggle-off')
        lightToggle.find('.textAction').text('Acender Luz da garagem')
    }
    lightOn()

    setTimeout(lightOff, 6000)
}

function handleEmergency() {
    $('.alert-emergency').addClass('notify')
    setTimeout(function () {
        $('.alert-emergency').removeClass('notify')
    }, 6000)
}

function handleDoor() {
    $('.lamp').hide()
    $('.alert-home').hide()
    const action = $('#door-action');
    action.removeClass('door-open')
    action.removeClass('door-closed')
    action.removeClass('fa-door-open')
    action.removeClass('fa-door-closed')

    const doorText = $('.door-text')
    const doorToggle = $('#door-toggle')
    doorToggle.find('i').removeClass('fa-toggle-on')
    doorToggle.find('i').removeClass('fa-toggle-off')

    if (door === 0) {
        door = 1
        action.addClass('door-open')
        action.addClass('fa-door-open')
        doorText.text('Porta da garagem aberta')
        doorToggle.find('i').addClass('fa-toggle-on')
        doorToggle.find('.textAction').text('Fechar porta da garagem')
    } else {
        door = 0
        action.addClass('door-closed')
        action.addClass('fa-door-closed')
        doorText.text('Porta da garagem fechada')
        doorToggle.find('i').addClass('fa-toggle-off')
        doorToggle.find('.textAction').text('Abrir porta da garagem')
    }

    doorOpen()

    setTimeout(doorClosed, 6000)
}

function handleAlert() {
    $('.lamp').hide()
    $('.door').hide()
    const action = $('#alert-action');
    action.removeClass('alert-active')
    action.removeClass('alert-inactive')

    const alertText = $('.alert-text')
    const alertToggle = $('#alert-toggle')
    alertToggle.find('i').removeClass('fa-toggle-on')
    alertToggle.find('i').removeClass('fa-toggle-off')

    if (alertInt === 0) {
        alertInt = 1
        action.addClass('alert-active')
        alertText.text('Alarme da casa ativado')
        alertToggle.find('i').addClass('fa-toggle-on')
        alertToggle.find('.textAction').text('Desativar alarme')
    } else {
        alertInt = 0
        action.addClass('alert-inactive')
        alertText.text('Alarme da casa desativado')
        alertToggle.find('i').addClass('fa-toggle-off')
        alertToggle.find('.textAction').text('Ativar alarme')
    }

    alertActive()

    setTimeout(alertInactive, 6000)
}

function alertActive() {
    $('.alert-home').fadeIn()
}

function alertInactive() {
    $('.alert-home').fadeOut()
}

function doorOpen() {
    $('.door').fadeIn()
}

function doorClosed() {
    $('.door').fadeOut()
}


function lightOn() {
    $('.lamp').fadeIn()
}

function lightOff() {
    $('.lamp').fadeOut()
}


