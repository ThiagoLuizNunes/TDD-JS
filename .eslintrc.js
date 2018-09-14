module.exports = {
  "extends": "airbnb", 
  "env": {
      "browser": true,
      "node": true
  },
  "rules": {
    "quote-props": "off",
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    "singleline": true,
    "object-curly-newline": "off",
    "prefer-destructuring": "off",
    "consistent-return": "off",
    "no-shadow": "off",
    "no-param-reassign": [2, { "props": false }],
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
    }]
  }
};
