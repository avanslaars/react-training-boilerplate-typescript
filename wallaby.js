module.exports = wallaby => {
  return {
    files: ['src/**/*.ts', { pattern: 'src/**/*.spec.ts', ignore: true }],
    tests: ['src/**/*.spec.ts'],
    env: {
      type: 'node'
    }
  }
}
