import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block  text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['image-container', 'absolute w-full h-full inset-0  object-cover']
  ],
  presets: [
    presetAttributify(),
    presetIcons({
      scale: 1.2
    }),
    presetUno(),
    presetTypography()

  ]

})
