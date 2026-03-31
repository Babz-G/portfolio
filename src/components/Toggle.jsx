// ✨✨ MY OG RADIO TOGGLE FROM PREVIOUS PORTFOLIO SITE ✨✨

function Toggle({ theme, setTheme }) {
  return (
    <fieldset className="radio-switch" id="mode-switcher">
      <legend>Color Scheme</legend>
      <input
        type="radio"
        name="color-scheme"
        id="light"
        checked={theme === "light"}
        onChange={() => setTheme("light")}
      />
      <label htmlFor="light">Light</label>
      <input
        type="radio"
        name="color-scheme"
        id="dark"
        checked={theme === "dark"}
        onChange={() => setTheme("dark")}
      />
      <label htmlFor="dark">Dark</label>
    </fieldset>
  );
}

export default Toggle;

// ✨✨ SIMPLE TOGGLE BELOW ✨✨

// function Toggle({ theme, setTheme }) {
//   return (
//     <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
//       {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
//     </button>
//   );
// }

// export default Toggle;
