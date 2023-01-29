/* global beforeEach, describe, expect, jest, test */

import NuxtModule from '../src/nuxt'

const options = {}
let mock

describe('CivicTheme Vue: Nuxt module', () => {
  beforeEach(() => {
    mock = {
      addPlugin: jest.fn(),
      nuxt: {
        hook: jest.fn(),
        options: {
          css: []
        }
      },
    }
  })

  test('Init', () => {
    // Add Nuxt hook mock handler.
    const dirs = []
    const stories = []
    mock.nuxt.hook = jest.fn((hook, fn) => {
      switch (hook) {
        case 'components:dirs': {
          fn(dirs)
        }
        break

        case 'storybook:config': {
          fn({ stories })
        }
        break
      }
    })

    // Call Nuxt module with module options.
    NuxtModule.call(mock, options)

    // Expect that:
    // - The components:dirs hook was invoked.
    // - One directory is present.
    expect(mock.nuxt.hook).toHaveBeenCalledWith('components:dirs', expect.any(Function))
    expect(dirs.length).toBe(1)
    // - The storybook:config hook was invoked.
    // - One stories directory is present.
    expect(mock.nuxt.hook).toHaveBeenCalledWith('storybook:config', expect.any(Function))
    expect(stories.length).toBe(1)
  })
})
