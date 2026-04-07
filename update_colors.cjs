const fs = require('fs');
const path = require('path');

// 1. Update globals.css
const globalsPath = path.join(__dirname, 'apps/web/src/app/globals.css');
let globalsContent = fs.readFileSync(globalsPath, 'utf8');

const newRootColors = `
:root {
  --background: #060608;
  --foreground: #E4E4E7;
  --card: #0A0A0E;
  --card-foreground: #E4E4E7;
  --popover: #0A0A0E;
  --popover-foreground: #E4E4E7;
  --primary: #FF3300;
  --primary-foreground: #000000;
  --secondary: #00FF41;
  --secondary-foreground: #000000;
  --muted: #111111;
  --muted-foreground: #888888;
  --accent: #222222;
  --accent-foreground: #ffffff;
  --destructive: #FF3300;
  --destructive-foreground: #ffffff;
  --border: #333333;
  --input: #222222;
  --ring: #FF3300;
  --chart-1: #FF3300;
  --chart-2: #00FF41;
  --chart-3: #FFB000;
  --chart-4: #00E5FF;
  --chart-5: #EAB308;
  --radius: 0rem;
}`;

const newDarkColors = `
.dark {
  --background: #060608;
  --foreground: #E4E4E7;
  --card: #0A0A0E;
  --card-foreground: #E4E4E7;
  --popover: #0A0A0E;
  --popover-foreground: #E4E4E7;
  --primary: #FF3300;
  --primary-foreground: #000000;
  --secondary: #00FF41;
  --secondary-foreground: #000000;
  --muted: #111111;
  --muted-foreground: #888888;
  --accent: #222222;
  --accent-foreground: #ffffff;
  --destructive: #FF3300;
  --destructive-foreground: #ffffff;
  --border: #333333;
  --input: #222222;
  --ring: #FF3300;
  --chart-1: #FF3300;
  --chart-2: #00FF41;
  --chart-3: #FFB000;
  --chart-4: #00E5FF;
  --chart-5: #EAB308;
}`;

globalsContent = globalsContent.replace(/:root\s*{[^}]*}/, newRootColors);
globalsContent = globalsContent.replace(/\.dark\s*{[^}]*}/, newDarkColors);

fs.writeFileSync(globalsPath, globalsContent);

// 2. Replace hardcoded colors in files
const filesToUpdate = [
  'apps/web/src/app/page.tsx',
  'apps/web/src/app/projects/page.tsx',
  'apps/web/src/components/header.tsx',
  'apps/web/src/app/map/map-view.tsx'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Mappings
    const replacements = [
      { from: /bg-\[\#060608\]/g, to: 'bg-background' },
      { from: /bg-\[\#0A0A0E\]/g, to: 'bg-card' },
      { from: /bg-\[\#111111\]/g, to: 'bg-muted' },
      { from: /bg-\[\#111\]/g, to: 'bg-muted' },
      { from: /bg-\[\#222\]/g, to: 'bg-accent' },
      { from: /bg-\[\#FF3300\]/g, to: 'bg-primary' },
      { from: /bg-\[\#00FF41\]/g, to: 'bg-secondary' },

      { from: /text-\[\#E4E4E7\]/g, to: 'text-foreground' },
      { from: /text-\[\#888888\]/g, to: 'text-muted-foreground' },
      { from: /text-\[\#888\]/g, to: 'text-muted-foreground' },
      { from: /text-\[\#FF3300\]/g, to: 'text-primary' },
      { from: /text-\[\#00FF41\]/g, to: 'text-secondary' },

      { from: /border-\[\#333333\]/g, to: 'border-border' },
      { from: /border-\[\#333\]/g, to: 'border-border' },
      { from: /border-\[\#222\]/g, to: 'border-accent' },
      { from: /border-\[\#FF3300\]/g, to: 'border-primary' },
      { from: /border-\[\#00FF41\]/g, to: 'border-secondary' },
      
      { from: /ring-\[\#FF3300\]/g, to: 'ring-primary' },
      { from: /ring-\[\#00FF41\]/g, to: 'ring-secondary' },
      
      { from: /selection:bg-\[\#FF3300\]/g, to: 'selection:bg-primary' },
      { from: /hover:bg-\[\#FF3300\]/g, to: 'hover:bg-primary' },
      { from: /hover:text-\[\#FF3300\]/g, to: 'hover:text-primary' },
      { from: /hover:border-\[\#FF3300\]/g, to: 'hover:border-primary' },
      { from: /hover:bg-\[\#00FF41\]/g, to: 'hover:bg-secondary' },
      { from: /hover:text-\[\#00FF41\]/g, to: 'hover:text-secondary' },
      { from: /hover:border-\[\#00FF41\]/g, to: 'hover:border-secondary' },
      { from: /hover:bg-\[\#111\]/g, to: 'hover:bg-muted' },
      
      { from: /shadow-\[0_0_15px_\#FF3300\]/g, to: 'shadow-[0_0_15px_var(--color-primary)]' },
      { from: /shadow-\[0_0_10px_\#00FF41\]/g, to: 'shadow-[0_0_10px_var(--color-secondary)]' },
      { from: /from-\[\#FF3300\]/g, to: 'from-primary' },
      { from: /from-\[\#00FF41\]/g, to: 'from-secondary' },
      { from: /to-\[\#111\]/g, to: 'to-muted' },
    ];

    replacements.forEach(({ from, to }) => {
      content = content.replace(from, to);
    });

    // Also replace inline hex color values for style={{}} objects
    content = content.replace(/'#FF3300'/g, "'var(--color-primary)'");
    content = content.replace(/'#00FF41'/g, "'var(--color-secondary)'");

    fs.writeFileSync(filePath, content);
    console.log('Updated ' + file);
  }
});
