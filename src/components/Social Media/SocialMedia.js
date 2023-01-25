import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed';
import { useEffect } from 'react';


function Instagram({url}) {
  return (
    <div className="instagram">
      <InstagramEmbed url={url}/>
    </div>   
  )
};

function Twitter({tweetId}) {
  return (
    <div className="centerContent">
        <div className="selfCenter spaceBetween">
            <TwitterTweetEmbed
            onLoad={function noRefCheck(){}}
            tweetId={tweetId}
            />
        </div>
    </div>
  )
};

function TwitterTimeLine() {
  return (
      <div className="twitter-timeline">
        <TwitterTimelineEmbed
        onLoad={function noRefCheck(){}}
        options={{
            height: 800
        }}
        screenName="jasonkongie"
        sourceType="profile"
        />
      </div>   
  )
}


function LinkedIn() {

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        class="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="medium"
        data-theme="light"
        data-type="VERTICAL"
        data-vanity="jason-kong-2b8386225"
        data-version="v1"
      >
       <a
          class="badge-base__link LI-simple-link"
                  href="https://au.linkedin.com/in/jason-kong-2b8386225?trk=profile-badge"
        />
      </div>
    </div>
  );
}


export const SocialMedia = () => {
  return (
    <div className="social-media-grid">

      <div className="grid overflow-hidden grid-cols-2 grid-rows-2 gap-2">
        <div><Instagram className="box row-span-2"url="https://www.instagram.com/p/CknMZJKuIgD/" /></div>
        <div><Instagram className="box row-span-2" url="https://www.instagram.com/p/Cl-kPBVOi5z/"/></div>
        <div><Instagram className="box row-span-2" url="https://www.instagram.com/p/CiQwu2svqIk/"/></div>
        <div><Instagram className="box row-span-2" url="https://www.instagram.com/p/Cg8zp-ouXIH/"/></div>
      </div>

      <div className="grid overflow-hidden grid-cols-2 grid-rows-6 gap-2">
        <div className="box row-span-6 col-span-1"><TwitterTimeLine /></div>
        <div className="box row-span-2 col-span-1"><Twitter tweetId={"1600359454004105216"}/></div>
        <div className="box row-span-2 col-span-1"><Twitter tweetId ={"1598930214062804993"}/></div>
        <div className="box row-span-2 col-span-1"><Twitter tweetId={"1598493092478619648"} /></div>

      </div>
      <LinkedIn />
    </div>   
  )
}

export { Instagram, Twitter, TwitterTimeLine, LinkedIn };