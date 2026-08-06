// ===============================
// Creator Dashboard
// Roblox + YouTube
// ===============================

const robloxAvatar = document.getElementById("rbxAvatar");
const robloxName = document.getElementById("rbxName");
const robloxID = document.getElementById("rbxID");

const ytSubs = document.getElementById("ytSubs");
const ytViews = document.getElementById("ytViews");
const ytVideos = document.getElementById("ytVideos");

const lastUpdated = document.getElementById("lastUpdated");

function formatNumber(number){

    number = Number(number);

    if(number >= 1000000000)
        return (number/1000000000).toFixed(1)+"B";

    if(number >= 1000000)
        return (number/1000000).toFixed(1)+"M";

    if(number >= 1000)
        return (number/1000).toFixed(1)+"K";

    return number.toLocaleString();

}

async function loadYouTube(){

    try{

        const response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CONFIG.YOUTUBE_CHANNEL_ID}&key=${CONFIG.YOUTUBE_API_KEY}`);

        const data = await response.json();

        const stats = data.items[0].statistics;

        ytSubs.innerText = formatNumber(stats.subscriberCount);
        ytViews.innerText = formatNumber(stats.viewCount);
        ytVideos.innerText = formatNumber(stats.videoCount);

    }catch(err){

        console.error(err);

        ytSubs.innerText="Error";
        ytViews.innerText="Error";
        ytVideos.innerText="Error";

    }

}
