export const BotQuires = {
    welcomingUser: {
        query: `<b>Hello</b> <i>welcome to product bot checker</i>. 📥`
    },
    instructions: `to know how to use the bot please send type <b>/help</b> 😆`,
    askUserHealth: {
        query: "How are you doing? 🧐",
        firstChoice: "I am good thank you",
        secondChoice: "Not good at all",
        firstQuires: ['good', 'fine', 'all good', 'all fine', 'all good', "I am good thank you"],
        secondQuires: ['not good at all', 'not good', 'i am not', 'bad', 'sad', 'not okay']
    },
}

enum UsersAnswers {

}

export const BotCommands = {
    rateShipment: {
        name: 'rate Shipment', callback: () => {
        }
    },
    ratePhysical: {
        name: 'rate Physical', callBack: () => {
        }
    }

}
