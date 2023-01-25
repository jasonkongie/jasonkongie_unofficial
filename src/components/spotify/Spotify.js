import React, { useEffect, useState } from "react";
import { Parallax } from 'react-parallax';
import {
  Box,
  Stack,
  Image,
  Text,
  Link,
  Spinner,
} from "@chakra-ui/react";
import {getNowPlayingItem, getUserTopArtists, getUserTopSongs} from "./API";
import styled from "styled-components";
import PlayingAnimation from "./PlayingAnimation";
import { ChakraProvider } from '@chakra-ui/react';


function SpotifyLogo() {
    return (
        <svg width="20px" x="0px" y="0px" viewBox="0 0 20 20" style={{ enableBackground: "new 0 0 20 20" }}>
            <g>
                <g>
                    <g>
                        <path fill="#1ED760" class="st0" d="M10,0C4.5,0,0,4.5,0,10c0,5.5,4.5,10,10,10c5.5,0,10-4.5,10-10C20,4.5,15.5,0,10,0z M14.6,14.4
                            c-0.2,0.3-0.6,0.4-0.9,0.2c-2.3-1.4-5.3-1.8-8.8-1c-0.3,0.1-0.7-0.1-0.7-0.5c-0.1-0.3,0.1-0.7,0.5-0.7c3.8-0.9,7.1-0.5,9.7,1.1
                            C14.7,13.7,14.8,14.1,14.6,14.4z M15.8,11.7c-0.2,0.4-0.7,0.5-1.1,0.3C12,10.3,8,9.8,4.8,10.8c-0.4,0.1-0.8-0.1-1-0.5
                            c-0.1-0.4,0.1-0.8,0.5-1c3.6-1.1,8.1-0.6,11.2,1.3C15.9,10.9,16,11.3,15.8,11.7z M15.9,8.9C12.7,7,7.4,6.8,4.3,7.7
                            c-0.5,0.1-1-0.1-1.2-0.6C3,6.6,3.3,6.1,3.8,5.9c3.5-1.1,9.4-0.9,13.1,1.3c0.4,0.3,0.6,0.8,0.3,1.3C16.9,9,16.4,9.1,15.9,8.9z"/>
                    </g>
                </g>
            </g>
        </svg>
    );
}

function SpotifyCard ({ albumImageUrl, artist, songUrl, title}) {
  return (
      <Box p={2} borderRadius="lg" borderWidth={1}>
        <Stack direction="row" spacing={4} align="center">
            <Image
            alt={`${title} album art`}
            src={albumImageUrl}
            width={12}
            height={12}
            borderRadius="sm"
            />
            <Stack spacing={0} overflow="hidden">
            <Link href={songUrl} target="_blank">
                <Text
                fontWeight="semibold"
                width="full"
                isTruncated
                color="alph"
                >
                {title}
                </Text>
            </Link>
            <Text
                color="gray.500"
                isTruncated
            >
                {artist}
            </Text>
            <Text></Text>
            </Stack>
        </Stack>
      </Box>     
  )
}            



function ArtistCard ({name, artistUrl, imageUrl, followerCount}) {
  return (
      <Box p={2} borderRadius="lg" borderWidth={1}>
        <Stack direction="row" spacing={4} align="center">
            <Image
            alt={`${name} album art`}
            src={imageUrl}
            width={12}
            height={12}
            borderRadius="sm"
            />
            <Stack spacing={0} overflow="hidden">
            <Link href={artistUrl} target="_blank">
                <Text
                fontWeight="semibold"
                width="full"
                isTruncated
                color="alph"
                >
                {name}
                </Text>
            </Link>
            <Text
                color="gray.500"
                isTruncated
            >
                {followerCount} followers
            </Text>
            <Text></Text>
            </Stack>
        </Stack>
      </Box>     
  )
}            


function SpotifyTopArtists(props) {
  const [result, setResult] = useState({});

  useEffect(() => {
    Promise.all([
      getUserTopArtists(
        props.client_id,
        props.client_secret,
        props.refresh_token
      ),
    ]).then((results) => {
        console.log(results[0])
        setResult(results[0]);
    });
  });

  return (
      <Box width="xs">
          <Parallax strength={300}>
                {Array.isArray(result) ? result.map((track, index) => {
                    return (
                    <ArtistCard
                    key={index}
                    {...track}
                            />
                )
                }) : null}             
            </Parallax>
      </Box>
  )
};

function SpotifyTopItems(props) {
  const [result, setResult] = useState({});

  useEffect(() => {
    Promise.all([
      getUserTopSongs(
        props.client_id,
        props.client_secret,
        props.refresh_token
      ),
    ]).then((results) => {
        setResult(results[0]); //adjust this. ()
    });
  });

  return (
      <Box width="xs">
          <Parallax strength={300}>
                {Array.isArray(result) ? result.map((track, index) => {
                    return (
                    <SpotifyCard
                    key={index}
                    {...track}
                            />
                )
                }) : null}             
            </Parallax>
      </Box>
  )
};

function SpotifyNowPlaying(props) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    Promise.all([
      getNowPlayingItem(
        props.client_id,
        props.client_secret,
        props.refresh_token
      ),
    ]).then((results) => {
      setResult(results[0]);
      setLoading(false);
    });
  });

  return (
    <Center>
      <Box width="xs">
        {loading ?
          <Stack align="center" mb={8}>
            <Spinner size="md" speed="0.6s" thickness={3} color="gray.500" />
          </Stack>
          :
          <Stack width="full" mb={result.isPlaying ? 2 : 4} spacing={3}>
            <Stack spacing={2} direction="row" align="center">
              <SpotifyLogo />
              <Text fontWeight="semibold">{result.isPlaying ? 'Now playing' : "Currently offline"}</Text>
              {result.isPlaying && <PlayingAnimation />}
            </Stack>
            {result.isPlaying &&
              <Box p={2} borderRadius="lg" borderWidth={1}>
                <Stack direction="row" spacing={4} align="center">
                  <Image
                    alt={`${result.title} album art`}
                    src={result.albumImageUrl}
                    width={12}
                    height={12}
                    borderRadius="sm"
                  />
                  <Stack spacing={0} overflow="hidden">
                    <Link href={result.songUrl} target="_blank">
                      <Text
                        fontWeight="semibold"
                        width="full"
                        isTruncated
                        color="alph"
                      >
                        {result.title}
                      </Text>
                    </Link>
                    <Text
                      color="gray.500"
                      isTruncated
                    >
                      {result.artist}
                    </Text>
                    <Text></Text>
                  </Stack>
                </Stack>
              </Box>
            }
          </Stack>
        }
      </Box>
    </Center>
  )
};

const Center = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


export const Spotify = () => {
  return (
    <ChakraProvider>
      <SpotifyNowPlaying />
      <SpotifyTopItems />
      <SpotifyTopArtists />
    </ChakraProvider>
  )
}

// export { SpotifyTopArtists, SpotifyTopItems, SpotifyNowPlaying};