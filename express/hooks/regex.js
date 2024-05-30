// regex patterns

// for headers
const h1 = /^\s*# /gim;
const h2 = /^\s*## /gim;
const h3 = /^\s*### /gim;
const emptySpace = /\\s+/g;

// for quote
const quote = /^\s*> /gim;

// list
const Olist = /^(\s*[0-9]*((\.\d*)?)*) /gim;
const Ulist = /^\s*- /gim;
const UlistTask = /^\s*-\[[xX ]\] /gim;
const UlistTaskChecked = /^\s*-\[[xX]\] /gim;
const UlistTaskUnchecked = /^\s*-\[[ ]\] /gim;

// horizontal line
const Hline = /---+/;

// code
const multiLineCode = /^```/g;
const codeHighlight = /^\* /g;
const code = /`(.+?)`(?!\*)/gi;

// empty line
const empty = /\S/;

// for bold, italics and strike through
const bold = /\*\*(.+?)\*\*(?!\*)/g;
const tag = /==(\S(.*?\S)?)==/gi;
const tagNotify = /==\*(\S(.*?\S)?)==/gi;
const tagHash = /==#(\S(.*?\S)?)==/gi;
const colorTags = /=\[(.*?)\]\((.*?)\)=/gim;

const italics = /\*(.+?)\*(?!\*)/g;
const strike = /\~\~(.+?)\~\~(?!\*)/g;
const boldAndItalic = /\*\*\*(.+?)\*\*\*(?!\*)/g;
const un = /\*\*\*\*(.+?)\*\*\*\*(?!\*)/g;
const link = /\[(.*?)\]\(((https:|http:)\/\/.*?)\)\((.*?)\)\((.*?)\)/g;

// for sanitization
const ltr = /</gi;

// Table
const table = /^\|(.*?)\|+/gim;
const tableDivider = /\:[-]+/g;

//accordions
const accordion = /^\s*>[aA]/gim;
const accord = /\+\+/gim;

module.exports = {
  h1,
  h2,
  h3,
  emptySpace,
  quote,
  Olist,
  Ulist,
  UlistTask,
  UlistTaskChecked,
  UlistTaskUnchecked,
  Hline,
  multiLineCode,
  codeHighlight,
  code,
  empty,
  bold,
  tag,
  tagNotify,
  tagHash,
  colorTags,
  italics,
  strike,
  boldAndItalic,
  un,
  link,
  ltr,
  table,
  tableDivider,
  accordion,
  accord,
};
