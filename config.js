const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="colombo,sri lanka."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "94729493354" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94729493354";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,94729493354";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,94729493354";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94729493354,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_25_05_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1LFxuICAgICAgICA4NixcbiAgICAgICAgMTE4LFxuICAgICAgICA3MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MixcbiAgICAgICAgNzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDksXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NixcbiAgICAgICAgMTc5LFxuICAgICAgICA1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDcxLFxuICAgICAgICA1MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgODksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDcsXG4gICAgICAgIDUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI5LFxuICAgICAgICA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk0LFxuICAgICAgICA4NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDkzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJINmUxenUySlIydDhCT0J0dTdQbmd2N0hHNzdwYnZsRjJjcWdKOTZ4cEljPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEclVIZHd0RFRlQ2tGUjNuakRXLVZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVjMDJhNzFjLTQxNDctNDZlZS1iMTI5LWU5YmIyOTMwNWNmNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OCxcbiAgICAgIDM3LFxuICAgICAgMTMxLFxuICAgICAgMjE3LFxuICAgICAgMTEwLFxuICAgICAgMTU0LFxuICAgICAgMTU4LFxuICAgICAgMTI2LFxuICAgICAgNjUsXG4gICAgICAwLFxuICAgICAgMTQyLFxuICAgICAgMTM1LFxuICAgICAgNDcsXG4gICAgICA0MyxcbiAgICAgIDIyMCxcbiAgICAgIDE4MyxcbiAgICAgIDY4LFxuICAgICAgMTE2LFxuICAgICAgMjA4LFxuICAgICAgMTIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTAsXG4gICAgICAxNjcsXG4gICAgICA2MSxcbiAgICAgIDIzOSxcbiAgICAgIDQ2LFxuICAgICAgOCxcbiAgICAgIDExOSxcbiAgICAgIDIzNCxcbiAgICAgIDEwMCxcbiAgICAgIDE4NixcbiAgICAgIDYzLFxuICAgICAgNTgsXG4gICAgICA1MyxcbiAgICAgIDU4LFxuICAgICAgMTAwLFxuICAgICAgMTM2LFxuICAgICAgMTM1LFxuICAgICAgMjA2LFxuICAgICAgMTkxLFxuICAgICAgMTE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGpLK0tZRUVOU3NvN0lHR0JzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlUVNVaEJCb0tZdkVMYldPUzBaR1FrRU5VY2wzRC9NM21FRHBBV3FRTlhjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVCbkZhRGVhZ05qY1BCTEZZelFPVGRLSmNUS3NjL1RZVW5Kc29LUGJIWHFiY3hXWUxSUkloOEhoK2x6dWRrUjZuUDcrZlEvQk1PejF3NHdRWi9DcUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdhMU9FWmpNMWdBdTNUR21aL1NodXpUSGpEOWtOaFMvN3ltd2VrRlI5eGRIdUpVS0xFcXJyUkllZTVCSXB2SjRqQzhvaHJyQkFDWmc4anlwUUFLUkFRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3Mjk0OTMzNTQ6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NDk3NzAwNjk3MzE1NzozMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJ+wrB8R0FHQU5B8J+WpPCfmIh8wrBcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzI5NDkzMzU0OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2MDQ5NDk2XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "HRKU-318440b5-5874-44e4-a27b-ac16135bfb34";
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
