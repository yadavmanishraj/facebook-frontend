/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        friend: "0 -262px",
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
    },
  },
  plugins: [],
};
