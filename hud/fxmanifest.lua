fx_version 'cerulean'
game 'gta5'
lua54 'yes'

author 'custom'
description 'Cluster HUD — address bar over the radar, mic badge on its rim, time/weather strip and drive cluster on the right'
version '1.0.0'

client_language 'ru'

ui_page 'html/index.html'

client_scripts {
    'config.lua',
    'client/postals.lua',
    'client/main.lua',
}

server_script 'server.lua'

files {
    'html/index.html',
    'html/css/*.css',
    'html/js/*.js',
    'html/fonts/*.woff2',
    'new-postals.json',
}

-- Optional runtime companions (the HUD degrades gracefully without them):
--   fh4map-1.4 — circular minimap; CSS geometry tokens match its overlay
--   pma-voice  — mic / radio state
--   gears      — manual gearbox label (S mode) for the gear selector
--   location   — postal database (new-postals.json) is read from its folder
