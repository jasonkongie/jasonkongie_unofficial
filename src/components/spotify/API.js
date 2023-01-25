import querystring from "querystring";
import { Buffer } from 'buffer';

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const USER_TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists`; //artists
const USER_TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`; //tracks

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;


const client_id = "8f8c187ffce94709af96a2dbdeca30b1";
const client_secret = "c7c4c9cc813f4c17aa9dbadf268ccef0";
const refresh_token = "AQBfNUQZs9frWex40Gc1U7PjtMz6nUgypOn8JOpTUXETHqEqPe2TM4GsGc-Mzwj_9iHOvhXP1s052NdzmkX5BseJLKX6ihG37lZqJNa2T6rwWCKsalPXoyfMYKO1jN-wbM0";



const getAccessToken = async () => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

//now playing
 async function getNowPlaying(client_id, client_secret, refresh_token) {
  const { access_token } = await getAccessToken(
    client_id,
    client_secret,
    refresh_token
  );

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    
  });
};

//get the current playing item
// export default async function getNowPlayingItem(
export async function getNowPlayingItem(
  client_id,
  client_secret,
  refresh_token
) {
  const response = await getNowPlaying(client_id, client_secret, refresh_token);
  if (response.status === 204 || response.status > 400) {
    return false;
  }

  const song = await response.json();
  const albumImageUrl = song.item.album.images[0].url;
  const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
  const isPlaying = song.is_playing;
  const songUrl = song.item.external_urls.spotify;
  const title = song.item.name;

  return {
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  };
}



/////////////////////////////////////////////////////////////////////////////////////////EXTRA
// export const getUserTop = async (client_id, client_secret, refresh_token) => {

//TOP ARTIST
async function fetchTopArtists(client_id, client_secret, refresh_token) {

  const { access_token } = await getAccessToken(
    client_id,
    client_secret,
    refresh_token
  );

  return fetch(USER_TOP_ARTISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};


//get the user top artists
export async function getUserTopArtists(
  client_id,
  client_secret,
  refresh_token
) {
  const response = await fetchTopArtists(client_id, client_secret, refresh_token);
  if (response.status === 204 || response.status > 400) {
    return false;
  }

    const rawdata = await response.json();
    const artists = rawdata.items;
  var apiArray = [];
    for (var i = 0; i < artists.length; i++) {
        var artist = artists[i];
        var name = artist.name;
        var followerCount = artist.followers.total;
        var imageUrl = artist.images[0].url;
        var artistUrl = artist.external_urls.spotify;
        apiArray.push({name, artistUrl, imageUrl, followerCount});

    }
  return apiArray;
}

//get user top items
async function fetchUserTopSongs(client_id, client_secret, refresh_token) {
  const { access_token } = await getAccessToken(
    client_id,
    client_secret,
    refresh_token
  );

  return fetch(USER_TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};


//get the user top items
export async function getUserTopSongs(
  client_id,
  client_secret,
  refresh_token
) {
  const response = await fetchUserTopSongs(client_id, client_secret, refresh_token);
  if (response.status === 204 || response.status > 400) {
    return false;
  }

    const rawdata = await response.json();
    const items = rawdata.items;
  var apiArray = [];
    for (var i = 0; i < items.length; i++) {
        let item = items[i];
        const title = item.name; //done
        const songUrl = item.external_urls.spotify;
        const albumImageUrl = item.album.images[0].url; //done
        const artist = item.artists.map((_artist) => _artist.name).join(", "); //done
        apiArray.push({title, songUrl, albumImageUrl, artist});
    }
  return apiArray;
}

// export {getNowPlayingItem, getUserTopArtists, getUserTopSongs};
