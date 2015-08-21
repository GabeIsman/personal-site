
// Map of name to character in stateface font.
var states = {
  'Alabama':              { statefaceChar: 'B', name: 'Alabama' },
  'Alaska':               { statefaceChar: 'A', name: 'Alaska' },
  'Arizona':              { statefaceChar: 'D', name: 'Arizona' },
  'Arkansas':             { statefaceChar: 'C', name: 'Arkansas' },
  'California':           { statefaceChar: 'E', name: 'California' },
  'Colorado':             { statefaceChar: 'F', name: 'Colorado' },
  'Connecticut':          { statefaceChar: 'G', name: 'Connecticut' },
  'Delaware':             { statefaceChar: 'H', name: 'Delaware' },
  'District of Columbia': { statefaceChar: 'y', name: 'District of Columbia' },
  'Florida':              { statefaceChar: 'I', name: 'Florida' },
  'Georgia':              { statefaceChar: 'J', name: 'Georgia' },
  'Hawaii':               { statefaceChar: 'K', name: 'Hawaii' },
  'Idaho':                { statefaceChar: 'M', name: 'Idaho' },
  'Illinois':             { statefaceChar: 'N', name: 'Illinois' },
  'Indiana':              { statefaceChar: 'O', name: 'Indiana' },
  'Iowa':                 { statefaceChar: 'L', name: 'Iowa' },
  'Kansas':               { statefaceChar: 'P', name: 'Kansas' },
  'Kentucky':             { statefaceChar: 'Q', name: 'Kentucky' },
  'Louisiana':             { statefaceChar: 'R', name: 'Louisana' },
  'Maine':                { statefaceChar: 'U', name: 'Maine' },
  'Maryland':             { statefaceChar: 'T', name: 'Maryland' },
  'Massachusetts':        { statefaceChar: 'S', name: 'Massachusetts' },
  'Michigan':             { statefaceChar: 'V', name: 'Michigan' },
  'Minnesota':            { statefaceChar: 'W', name: 'Minnesota' },
  'Mississippi':          { statefaceChar: 'Y', name: 'Mississippi' },
  'Missouri':             { statefaceChar: 'X', name: 'Missouri' },
  'Montana':              { statefaceChar: 'Z', name: 'Montana' },
  'Nebraska':             { statefaceChar: 'c', name: 'Nebraska' },
  'Nevada':               { statefaceChar: 'g', name: 'Nevada' },
  'New Hampshire':        { statefaceChar: 'd', name: 'New Hampshire' },
  'New Jersey':           { statefaceChar: 'e', name: 'New Jersey' },
  'New Mexico':           { statefaceChar: 'f', name: 'New Mexico' },
  'New York':             { statefaceChar: 'h', name: 'New York' },
  'North Carolina':       { statefaceChar: 'a', name: 'North Carolina' },
  'North Dakota':         { statefaceChar: 'b', name: 'North Dakota' },
  'Ohio':                 { statefaceChar: 'i', name: 'Ohio' },
  'Oklahoma':             { statefaceChar: 'j', name: 'Oklahoma' },
  'Oregon':               { statefaceChar: 'k', name: 'Oregon' },
  'Pennsylvania':         { statefaceChar: 'l', name: 'Pennsylvania' },
  'Puerto Rico':          { statefaceChar: '3', name: 'Puerto Rico' },
  'Rhode Island':         { statefaceChar: 'm', name: 'Rhode Island' },
  'South Carolina':       { statefaceChar: 'n', name: 'South Carolina' },
  'South Dakota':         { statefaceChar: 'o', name: 'South Dakota' },
  'Tennessee':            { statefaceChar: 'p', name: 'Tennessee' },
  'Texas':                { statefaceChar: 'q', name: 'Texas' },
  'United States':        { statefaceChar: 'z', name: 'United States' },
  'Utah':                 { statefaceChar: 'r', name: 'Utah' },
  'Vermont':              { statefaceChar: 't', name: 'Vermont' },
  'Virginia':             { statefaceChar: 's', name: 'Virginia' },
  'Washington':           { statefaceChar: 'u', name: 'Washington' },
  'West Virginia':        { statefaceChar: 'w', name: 'West Virginia' },
  'Wisconsin':            { statefaceChar: 'v', name: 'Wisconsin' },
  'Wyoming':              { statefaceChar: 'x', name: 'Wyoming' },
}

var getStateChar = function(stateName) {
  var state = states[stateName];
  if (!state) {
    console.log(stateName, 'not found in stateface');
    return stateName;
  }

  return state.statefaceChar;
}

module.exports = getStateChar;
