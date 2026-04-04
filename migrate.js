const fs = require('fs');
const path = require('path');
const routesDir = path.join(__dirname, 'apps/web/src/routes');
const appDir = path.join(__dirname, 'apps/web/src/app');

const mappings = {
  'home.tsx': 'page.tsx',
  'dashboard.tsx': 'dashboard/page.tsx',
  'contact.tsx': 'contact/page.tsx',
  'map.tsx': 'map/page.tsx',
  'projects.tsx': 'projects/page.tsx',
  'project-details.tsx': 'projects/[id]/page.tsx',
  'post.tsx': 'post/page.tsx',
  'post-details.tsx': 'post/[id]/page.tsx'
};

for (const [routeFile, appFile] of Object.entries(mappings)) {
  const routePath = path.join(routesDir, routeFile);
  const appPath = path.join(appDir, appFile);
  
  if (fs.existsSync(routePath)) {
    let content = fs.readFileSync(routePath, 'utf8');
    
    // Process imports
    content = content.replace(/import\s*\{\s*([^}]+)\s*\}\s*from\s*['\"]react-router(-dom)?['\"];?/g, (match, imports) => {
      let nextLink = false;
      let nextRouter = false;
      let nextParams = false;
      const others = [];
      imports.split(',').forEach(i => {
        const item = i.trim();
        if (item === 'Link') nextLink = true;
        else if (item === 'useNavigate') nextRouter = true;
        else if (item === 'useParams') nextParams = true;
        else if (item) others.push(item);
      });
      
      let res = '';
      if (others.length > 0) res += `import { ${others.join(', ')} } from "react-router";\n`;
      if (nextLink) res += `import Link from "next/link";\n`;
      if (nextRouter) res += `import { useRouter } from "next/navigation";\n`;
      return res;
    });

    content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');
    content = content.replace(/const\s+(\w+)\s*=\s*useNavigate\(\);?/g, 'const $1 = useRouter();');
    
    if (appFile.includes('[id]')) {
      content = content.replace(/export\s+default\s+function\s+(\w+)\s*\(\)\s*\{/g, 'import { use } from "react";\nexport default function $1({ params }: { params: Promise<{ id: string }> }) {');
      content = content.replace(/const\s+\{\s*id\s*\}\s*=\s*useParams\(\);?/g, 'const { id } = use(params);');
    }

    fs.mkdirSync(path.dirname(appPath), { recursive: true });
    fs.writeFileSync(appPath, content);
    console.log('Wrote ' + appPath);
  } else {
    console.log('Missing ' + routePath);
  }
}
