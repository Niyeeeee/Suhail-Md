const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348101213317";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_42_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxLFxuICAgICAgICA2MixcbiAgICAgICAgMjIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg4LFxuICAgICAgICA0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY0LFxuICAgICAgICA3MixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNixcbiAgICAgICAgODIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDkwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDc1LFxuICAgICAgICA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDg0LFxuICAgICAgICA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzksXG4gICAgICAgIDY5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxODksXG4gICAgICAgIDQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDExLFxuICAgICAgICAxNTksXG4gICAgICAgIDY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDczLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4LFxuICAgICAgICA1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJicW93aFVtRTl4WlorRWJCQUtDSnlqcExKU3c0aEVvak5oTjU2ZC94REpJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1cFVFYW1IUlRCaTctd3o2bmJtMGp3XCIsXG4gIFwicGhvbmVJZFwiOiBcImEwYjE0MTNjLTczOTYtNDU0NC1hOTAwLWRlMmFmMjY5ZDA4ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTksXG4gICAgICAyNTQsXG4gICAgICA4LFxuICAgICAgMjE5LFxuICAgICAgMjEsXG4gICAgICAyMixcbiAgICAgIDE5NyxcbiAgICAgIDEwOSxcbiAgICAgIDEzNCxcbiAgICAgIDIwNixcbiAgICAgIDU0LFxuICAgICAgMjMsXG4gICAgICAxMDMsXG4gICAgICAyMjgsXG4gICAgICA1OCxcbiAgICAgIDI0LFxuICAgICAgMTE3LFxuICAgICAgMTIzLFxuICAgICAgMzgsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI0LFxuICAgICAgMTM5LFxuICAgICAgMjM5LFxuICAgICAgNjcsXG4gICAgICAxNTEsXG4gICAgICAxMjIsXG4gICAgICAxODIsXG4gICAgICAxMzIsXG4gICAgICA4NyxcbiAgICAgIDE5NSxcbiAgICAgIDE0NSxcbiAgICAgIDk4LFxuICAgICAgODEsXG4gICAgICAxMTUsXG4gICAgICAxMixcbiAgICAgIDE4MSxcbiAgICAgIDQ0LFxuICAgICAgMjI3LFxuICAgICAgMTUzLFxuICAgICAgMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXMUo2WTRSNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwMTIxMzMxNzoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk9ueWlfTml5ZWVcIixcbiAgICBcImxpZFwiOiBcIjE1Nzg5NjA2NzI1MjI0MToyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNQzNoY2dIRUxmbzRMTUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlR0bjdpWk1lMlVmZXkzZGNHZ25tR2pPWUJjWW52WGNxU3pZOEQrYStIZ2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRzI2elFlZTBBR0JmKzNjcFJiMTBpUlFDWks4bDZFdEFlUHBqZndOeGtPOG82TkhHQ3BNb1RoWDBOSTRyNThpSXlvUDVXbnNsTEdnbkd3Z3FhUk9lQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTnZiTmRpTkh0NDRrd3FsSFFWcXplNWo5Mm0wRWVqNTRiS0VqUkQwYWxWMDdhVnB2c2l6MytlaGR0ZTRCZ3pmUFkwNDJmSno1N3FHVUs0S3RUUmdvakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwMTIxMzMxNzoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkxNTM3MjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQNGZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVA0Zi5qc29uIjogIntcImtleURhdGFcIjpcIjlwRmxIRWRueE9ocExhR2xWc1hIQnhCQThEbGZ3Q2hwdmFZSHVYOFlRVmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAzMDEzMjE2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5MTUzMDg2MTA4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
