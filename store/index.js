export const state = () => ({
  dark: false,
})

export const mutations = {
  toggleDarkMode: (state, mode = null) => {
    if (mode === true || mode === false) state.dark = mode
    else state.dark = !state.dark
  },
}
