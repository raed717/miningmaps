import fs from 'fs';
import path from 'path';

const files = [
  'apps/web/src/app/page.tsx',
  'apps/web/src/components/header.tsx',
  'apps/web/src/components/footer.tsx',
  'apps/web/src/app/projects/page.tsx',
  'apps/web/src/app/map/map-view.tsx',
  'apps/web/src/components/home/cinematic-hero.tsx', // just in case
];

for (const file of files) {
  const fullPath = path.resolve(file);
  if (!fs.existsSync(fullPath)) continue;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Replace imports
  content = content.replace(/import \{.*?Syne.*?Fira_Code.*?\} from "next\/font\/google";/, 'import { Inter, JetBrains_Mono } from "next/font/google";');
  content = content.replace(/import \{.*?Fira_Code.*?Syne.*?\} from "next\/font\/google";/, 'import { Inter, JetBrains_Mono } from "next/font/google";');
  content = content.replace(/import \{.*?Fira_Code.*?\} from "next\/font\/google";/, 'import { JetBrains_Mono } from "next/font/google";');
  content = content.replace(/import \{.*?Syne.*?\} from "next\/font\/google";/, 'import { Inter } from "next/font/google";');

  // Replace font instantiations
  content = content.replace(/const syne = Syne\(\{.*\}\);/, 'const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });');
  content = content.replace(/const fira = Fira_Code\(\{.*\}\);/, 'const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });');

  // Replace class names
  content = content.replace(/syne\.className/g, 'inter.className');
  content = content.replace(/fira\.className/g, 'mono.className');
  
  // If we only have mono, and no inter, make sure we only replace fira.
  // wait the import regex replaces the whole line.
  
  fs.writeFileSync(fullPath, content);
}

// Check DESIGN_SYSTEM.md and CLAUDE.md
const mdFiles = ['DESIGN_SYSTEM.md', 'CLAUDE.md'];
for (const file of mdFiles) {
  const fullPath = path.resolve(file);
  if (!fs.existsSync(fullPath)) continue;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  content = content.replace(/Syne/g, 'Inter');
  content = content.replace(/Fira Code/g, 'JetBrains Mono');
  content = content.replace(/Fira_Code/g, 'JetBrains_Mono');
  
  fs.writeFileSync(fullPath, content);
}

console.log('Fonts updated!');