const fs = require('fs');

let content = fs.readFileSync('src/components/MenuContact.tsx', 'utf8');

// I will just completely replace the component with the new one.
// The new logic requires moving the menu items out so they can be reused.
