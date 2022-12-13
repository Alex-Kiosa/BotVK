const token = 'vk1.a.Wp2ITQvOpc9FSI1Fis7665jp7p-YRVeymbJ99RlSkit_e77m2K4ohE_Hf9mfdUN_8mmqkkRmw_US5_sNY6l8AgDswNZ1f47Ho4Qwd8f4BwlahP6plmt2Ff2KtVyi0nJ6XmcgSlWHCvyiWUfLY1zEyiACLCRoDmyOApCQx6gN_LvUCgp6DPgzMTK0ZyUxWjthdbQqxWnEK9ta8WK0BDtAJg'
const {VK} = require('vk-io')
const {HearManager} = require('@vk-io/hear')
const vk = new VK({
    token
})
const bot = new HearManager()

vk.updates.on('message_new', bot.middleware)

bot.hear(/./, ctx => {
    const cmid = ctx.conversationMessageId
    // ctx.send(`Hello. Your message id is ${cmid }`)
    vk.api.messages.send({user_id: ctx.senderId, random_id: 0, message: 'Hello my friend'})

    console.log(vk.api.groups.getMembers({group_id: '217604454', filter: 'managers'}))
    //vk.api.messages.delete({peer_id: 2000000001, cmids: cmid, delete_for_all: 1 })
})

console.log('Bot launched')
vk.updates.start().catch(console.error)