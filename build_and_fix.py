import subprocess, shutil, os, glob

# 1. Ensure index.html points to src/app.js for Vite build
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Make sure script tag in index.html points to ./src/app.js for Vite entry
if "./src/app.js" not in html:
    html = html.replace('./index.js?v=2026_v9', './src/app.js')
    html = html.replace('./index.js', './src/app.js')
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)

# 2. Run Vite build
print("Running Vite build...")
subprocess.run(['powershell', '-ExecutionPolicy', 'Bypass', '-Command', 'npx vite build'], check=True)

# 3. Copy dist files to root
for f in glob.glob('dist/*'):
    if os.path.isfile(f):
        shutil.copy(f, '.')

# 4. Embed CSS in root index.html AND set script src to compiled ./index.js?v=2026_v10
with open('index.css', 'r', encoding='utf-8') as f:
    css = f.read()

with open('dist/index.html', 'r', encoding='utf-8') as f:
    dist_html = f.read()

dist_html = dist_html.replace('./src/app.js', './index.js?v=2026_v10')
if '<style>' not in dist_html:
    style_tag = f'<style>\n{css}\n</style>'
    dist_html = dist_html.replace('</head>', f'    {style_tag}\n  </head>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(dist_html)

print("Build & Fix Completed Successfully!")
