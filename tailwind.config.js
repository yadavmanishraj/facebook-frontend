/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        label: "15px",
      },
      colors: {
        accent: "#0866FF",
        accentGreen: "#31a24c",
        live: "#f45f16",
        backgroundDark: "#18191A",
        onBackgroundDark: "#E7E9ED",
        primaryContainerDark: "#242526",
        onPrimaryContainerDark: "#E3E5EA",
        onSecondaryContainerDark: "#A7A9AE",
      },
      fontFamily: {
        sans: "Inter",
      },
      backgroundImage: {
        "item-icon":
          "url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png')",
        "reaction-bg":
          "url('https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/0uJRGjrhtZ5.png')",
      },
      backgroundPosition: {
        friend: "0 -259px",
        favorite: "0 0",
        industries: "0 -190px",
        marketplace: "0 -370px",
        like: "0 -697px",
        comment: "0 -508px",
        copy: "0px -760px",
        share: "0 -844px",
      },
      borderWidth: {
        post: ".5px",
        avatar: "4px",
      },
      aspectRatio: {
        story: "9/6",
      },
      backgroundColor: {
        storyOverlay: "rgba(0, 0, 0, 0.2)",
        storyOverlayHover: "rgba(0, 0, 0, 0)",
      },
      gradientColorStops: {
        2: "2%",
      },
      borderWidth: {
        1: "3px",
      },
      spacing: {
        50: "50%",
      },
    },
  },
  plugins: [],
};
