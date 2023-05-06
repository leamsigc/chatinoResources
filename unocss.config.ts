import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno
} from 'unocss'

export default defineConfig({
  shortcuts: [
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
