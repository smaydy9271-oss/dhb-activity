const CLIENT_ID = "1511209546448638123";

const REDIRECT_URI =
"https://dhb-activity.netlify.app/login.html";

const DISCORD_URL =
`https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=token&scope=identify`;

function loginDiscord() {
    window.location.href = DISCORD_URL;
}
