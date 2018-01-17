'use strict'

var unified = require('unified')
var english = require('retext-english')
var preset = require('retext-preset-wooorm')

exports.settings = {
  bullet: '*',
  fences: true
}

exports.plugins = [
  [require('remark-retext'), unified().use(english).use(preset)],
  require('remark-preset-lint-recommended'),
  require('remark-comment-config'),
  require('remark-validate-links'),
  [require('remark-lint-blockquote-indentation'), 2],
  [require('remark-lint-checkbox-character-style'), {checked: 'x', unchecked: ' '}],
  require('remark-lint-checkbox-content-indent'),
  [require('remark-lint-code-block-style'), 'fenced'],
  require('remark-lint-definition-case'),
  require('remark-lint-definition-spacing'),
  [require('remark-lint-emphasis-marker'), '*'],
  [require('remark-lint-fenced-code-flag'), {allowEmpty: false}],
  [require('remark-lint-fenced-code-marker'), '`'],
  [require('remark-lint-file-extension'), 'md'],
  require('remark-lint-final-definition'),
  require('remark-lint-first-heading-level'),
  require('remark-lint-heading-increment'),
  [require('remark-lint-heading-style'), 'atx'],
  [require('remark-lint-link-title-style'), '"'],
  // require('remark-lint-list-item-bullet-indent'), // does this bite the rule below?
  [require('remark-lint-list-item-indent'), 'space'],
// HERE
  // [require('remark-lint-maximum-heading-length'), 60],
  // [require('remark-lint-maximum-line-length'), 80],
  require('remark-lint-no-consecutive-blank-lines'),
  require('remark-lint-no-duplicate-definitions'),
  require('remark-lint-no-duplicate-headings'),
  require('remark-lint-no-emphasis-as-heading'),

  require('remark-lint-no-file-name-articles'),
  require('remark-lint-no-file-name-consecutive-dashes'),
  require('remark-lint-no-file-name-irregular-characters'),
  require('remark-lint-no-file-name-mixed-case'),
  require('remark-lint-no-file-name-outer-dashes'),
  require('remark-lint-no-heading-content-indent'),
  require('remark-lint-no-heading-indent'),
  require('remark-lint-no-heading-punctuation'),
  require('remark-lint-no-html'),
  [require('remark-lint-no-missing-blank-lines'), {exceptTightLists: true}],
  require('remark-lint-no-multiple-toplevel-headings'),
  require('remark-lint-no-shell-dollars'),
  require('remark-lint-no-table-indentation'),
  require('remark-lint-no-tabs'),
  [require('remark-lint-ordered-list-marker-value'), 'ordered'],
  [require('remark-lint-rule-style'), '* * *'],
  [require('remark-lint-strong-marker'), '*'],
  [require('remark-lint-table-cell-padding'), 'padded'],
  require('remark-lint-table-pipe-alignment'),
  require('remark-lint-table-pipes'),
  [require('remark-lint-unordered-list-marker-style'), '*'],
  [require('remark-toc'), {maxDepth: 3, tight: true}],
  require('remark-github')
]
