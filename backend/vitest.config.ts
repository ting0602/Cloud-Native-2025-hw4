import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    pool: 'forks',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html']
    }
  }
})
