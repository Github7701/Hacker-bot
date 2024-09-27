const fs = require("fs");
module.exports = {
  config:{
	name: "Asif",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
const media = (
    await axios.get(
      'https://i.imgur.com/ivs7Z8o.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("sad")==0 || body.indexOf("😊")==0) {
		var msg = {
				body: "___ღ۵-🦋🌺🦋\nসেই মানুষটাকে জীবনে রেখে দাও🌸🥀..||\nযেই মানুষটা শত ব্যস্ততার মাঝেও তোমাকে মনে রাখে🥰C🤗..||\n🌻.প্রিয় সারাজীবন এইভাবে পাশে থেকো🥰\n\nAhmed Asif",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
