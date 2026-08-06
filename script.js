// =============================
// Creator Dashboard
// script.js
// =============================

// Roblox Elements
const rbxAvatar = document.getElementById("rbxAvatar");
const rbxName = document.getElementById("rbxName");
const rbxUsername = document.getElementById("rbxUsername");
const rbxID = document.getElementById("rbxID");

// YouTube Elements
const ytSubs = document.getElementById("ytSubs");
const ytViews = document.getElementById("ytViews");
const ytVideos = document.getElementById("ytVideos");

// Dashboard
const lastUpdated = document.getElementById("lastUpdated");

// Format Numbers
function formatNumber(number) {

    number = Number(number);

    if (number >= 1000000000)
        return (number / 1000000000).toFixed(1) + "B";

    if (number >= 1000000)
        return (number / 1000000).toFixed(1) + "M";

    if (number >= 1000)
        return (number / 1000).toFixed(1) + "K";

    return number.toLocaleString();

}

// Update Time
function updateTime() {

    const now = new Date();

    lastUpdated.textContent = now.toLocaleTimeString();

}
// =============================
// YouTube
// =============================

async function loadYouTube() {

    try {

        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CONFIG.YOUTUBE_CHANNEL_ID}&key=${CONFIG.YOUTUBE_API_KEY}`
        );

        const data = await response.json();

        if (!data.items || data.items.length === 0) {

            ytSubs.textContent = "Invalid";
            ytViews.textContent = "Invalid";
            ytVideos.textContent = "Invalid";

            return;

        }

        const stats = data.items[0].statistics;

        ytSubs.textContent = formatNumber(stats.subscriberCount);
        ytViews.textContent = formatNumber(stats.viewCount);
        ytVideos.textContent = formatNumber(stats.videoCount);

    }

    catch (error) {

        console.error(error);

        ytSubs.textContent = "Error";
        ytViews.textContent = "Error";
        ytVideos.textContent = "Error";

    }

}
