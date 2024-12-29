const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email =""
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© 么・TRØY99 🎧🤍" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_19_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDM4LFxuICAgICAgICAyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDczLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDkxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNyxcbiAgICAgICAgMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM3LFxuICAgICAgICA5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDg5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ1LFxuICAgICAgICAzMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MixcbiAgICAgICAgODcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI3LFxuICAgICAgICAzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNixcbiAgICAgICAgMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDg4LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAxODUsXG4gICAgICAgIDg5LFxuICAgICAgICAzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIis0TFo0TTdPUWlmZHdqSVlxaXRvVU9JcEpweHhqbSsrZU1TbTQxWjgzZnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlR4WVNDU0tRUWhDWVpWS3lvdjJMR3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmJjNzQwMzAtMmM2My00ODRmLTgyZTAtNzg2YTBjNDIzZmU1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgsXG4gICAgICAyMzksXG4gICAgICA5NixcbiAgICAgIDQ5LFxuICAgICAgMjUyLFxuICAgICAgNzAsXG4gICAgICAxMzEsXG4gICAgICA1MSxcbiAgICAgIDkxLFxuICAgICAgMTYzLFxuICAgICAgODMsXG4gICAgICAxNDYsXG4gICAgICAxMTEsXG4gICAgICAyMDAsXG4gICAgICAyNDEsXG4gICAgICAyMixcbiAgICAgIDkzLFxuICAgICAgOTUsXG4gICAgICAxNjksXG4gICAgICA1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NCxcbiAgICAgIDE2OSxcbiAgICAgIDc4LFxuICAgICAgNDIsXG4gICAgICA4NixcbiAgICAgIDIwMyxcbiAgICAgIDQzLFxuICAgICAgMjExLFxuICAgICAgOSxcbiAgICAgIDE2OCxcbiAgICAgIDQ5LFxuICAgICAgNTMsXG4gICAgICAxMjUsXG4gICAgICAxOTUsXG4gICAgICAxNDcsXG4gICAgICAyMzEsXG4gICAgICAxMzAsXG4gICAgICAyMixcbiAgICAgIDE5MSxcbiAgICAgIDYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVRVkNCTEtKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQwMzI3OTEwOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjYyMDMzMTkwNTg2MzU6MThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXpKbHJzQkVJekV4THNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQclF1emY1QnJNc0YwYXRYWU1mbmlkZXNqNFlDT0hXd3VPdXlJR0NYYmswPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjF3Vkh0UU5yeE5vOEFvNkwxMG9jZmUydXNLdnNDSEFUdCtYM01nUWdaL082UW4yeW1EN1VlV29LUytoNmh0T01TMHhrazE3UXNSV1o4cGdBRmRTUERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9YRlRwL0FTY1E3cVVrQmpuZEpUeHk0TW5XNlRDb3EzMytKdlJCNEFjdTlSN0x0ZGp0aGZPYlVJWWsrMGpYd1JDejJQelpMOG1FdnNHY0QyYi81a0FBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDAzMjc5MTA6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTQ2NzUzNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 么・TRØY99 ® 』```),
 
  author : process.env.PACK_AUTHER|| "Hmmmm",
  packname: process.env.PACK_NAME || "Trøy 🤪",
  botname : process.env.BOT_NAME  || "TRØY-XMD",
  ownername:process.env.OWNER_NAME|| "么・TRØY99 🎧🤍",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "么・TRØY99"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
