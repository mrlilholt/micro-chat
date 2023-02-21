radio.setGroup(123)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendString(":)")
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    basic.showString(receivedString)
})
