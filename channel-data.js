const CHANNEL_DATA = {
  sslc: {
    subscribers: "265K",
    videos: "2,781",
    views: "29,810,668",
    instagram_followers: "85K",
    instagram_posts: "2,239"
  },
  puc_science: {
    subscribers: "85.5K",
    videos: "1,085",
    views: "3,418,393",
    instagram_followers: "9,007",
    instagram_posts: "546"
  },
  puc_commerce: {
    subscribers: "45.1K",
    videos: "674",
    views: "1,821,018",
    instagram_followers: "6,550",
    instagram_posts: "371"
  },
  siff_guitar: {
    subscribers: "818K",
    videos: "474",
    views: "86,413,179"
  },
  siff_keyboard: {
    subscribers: "737K",
    videos: "1,092",
    views: "129,490,140"
  },
  siff_hindustani: {
    subscribers: "34.5K",
    videos: "274",
    views: "2,093,457"
  },
  siff_singing: {
    subscribers: "43.7K",
    videos: "134",
    views: "2,664,383"
  },
  siff_kathak: {
    subscribers: "50.2K",
    videos: "714",
    views: "5,203,907"
  },
  siff_dance: {
    subscribers: "105K",
    videos: "80",
    views: "5,201,991"
  },
  siff_english: {
    subscribers: "11.9K",
    videos: "538",
    views: "1,389,853"
  },
  siff_bollywood: {
    subscribers: "32.1K",
    videos: "1,226",
    views: "5,101,203"
  },
  combined: {
    total_subscribers: "2.2M+",
    total_views: "272M+",
    total_videos: "9,000+"
  }
};

// Auto-update all pages
document.addEventListener('DOMContentLoaded', function() {
  // Update elements using data-channel attribute
  document.querySelectorAll('[data-channel]').forEach(el => {
    const channel = el.getAttribute('data-channel');
    const stat = el.getAttribute('data-stat');
    if (CHANNEL_DATA[channel] && CHANNEL_DATA[channel][stat]) {
      el.textContent = CHANNEL_DATA[channel][stat];
    }
  });
});
