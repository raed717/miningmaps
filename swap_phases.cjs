const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'apps/web/src/components/home/cinematic-hero.tsx');
let content = fs.readFileSync(file, 'utf8');

const pattern = /\{\/\* --- PHASE 1: Ancient Terrain --- \*\/\}[\s\S]*?\{\/\* --- PHASE 3: Modern Operations --- \*\/\}/;

const newSections = `{/* --- PHASE 1: Logo Highlight --- */}
        <motion.div
          style={{ opacity: p1Opacity, scale: p1Scale }}
          className="absolute inset-0 flex items-center justify-center bg-background"
        >
          {/* Gritty Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
          
          {/* Wireframe Grid Layer */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          
          <motion.div
            style={{ y: p1TextY }}
            className="z-10 flex flex-col items-center justify-center w-full max-w-5xl px-4"
          >
            {/* The Full Logo - Increased Size */}
            <div className="relative w-80 md:w-[36rem] aspect-square drop-shadow-[0_0_30px_rgba(255,176,0,0.3)]">
              <img 
                src="/images/general/full-logo.png" 
                alt="Adamson Geomatics Full Logo" 
                className="w-full h-full object-contain"
              />
              
              {/* Scanning laser over logo */}
              <div className="absolute inset-0 overflow-hidden mix-blend-overlay pointer-events-none rounded-full">
                <motion.div 
                  animate={{ top: ['-20%', '120%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-1 bg-white shadow-[0_0_20px_#fff]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- PHASE 2: Ancient Terrain --- */}
        <motion.div
          style={{ opacity: p2Opacity, scale: p2Scale }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1686968719625-3faf853a543e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          />
          {/* Gritty Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black" />
          <div className="absolute w-[60vw] h-[60vw] rounded-full bg-amber-900/30 blur-[100px]" />
          <motion.div style={{ y: p2TextY }} className="z-10 text-center px-4">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-stone-300 to-stone-700 drop-shadow-2xl">
              Ancient <br /> Terrain
            </h2>
            <p className="mt-6 text-xl text-stone-400 font-mono tracking-widest max-w-lg mx-auto bg-black/40 backdrop-blur-sm p-2 rounded-md">
              MILLIONS OF YEARS OF GEOLOGICAL PRESSURE
            </p>
          </motion.div>
        </motion.div>

        {/* --- PHASE 3: Modern Operations --- */}`;

content = content.replace(pattern, newSections);
fs.writeFileSync(file, content);
console.log('Swapped cinematic phases!');