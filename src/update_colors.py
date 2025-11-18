#!/usr/bin/env python3

# Read the file
with open('/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all slate colors with emerald/green neon theme
replacements = {
    'text-slate-600': 'text-emerald-100/80',
    'text-slate-700': 'text-emerald-200',
    'text-slate-800': 'text-emerald-200',
    'text-slate-900': 'text-emerald-300',
    'text-slate-500': 'text-emerald-100/60',
    'text-slate-400': 'text-emerald-100/50',
    'text-slate-300': 'text-emerald-200/90',
    'text-slate-200': 'text-emerald-100',
    'text-slate-100': 'text-emerald-50',
    'bg-slate-900': 'bg-gradient-to-br from-zinc-900 to-black',
    'bg-slate-800': 'bg-zinc-900',
    'bg-slate-50': 'bg-emerald-500/5',
    'bg-slate-100': 'bg-emerald-500/10',
    'border-slate-200': 'border-emerald-500/20',
    'border-slate-800': 'border-emerald-500/30',
    
    # Update specific gradient boxes to have darker backgrounds with neon accents
    'from-blue-50 to-blue-100 border border-blue-200': 'from-blue-950/50 to-blue-900/50 border border-blue-500/30',
    'text-blue-900': 'text-blue-400',
    'from-cyan-50 to-cyan-100 border border-cyan-200': 'from-cyan-950/50 to-cyan-900/50 border border-cyan-500/30',
    'text-cyan-900': 'text-cyan-400',
    'from-purple-50 to-purple-100 border border-purple-200': 'from-purple-950/50 to-purple-900/50 border border-purple-500/30',
    'text-purple-900': 'text-purple-400',
    'from-orange-50 to-orange-100 border border-orange-200': 'from-orange-950/50 to-orange-900/50 border border-orange-500/30',
    'text-orange-900': 'text-orange-400',
    'from-green-50 to-green-100 border border-green-200': 'from-green-950/50 to-green-900/50 border border-green-500/30',
    'text-green-900': 'text-green-400',
    'from-pink-50 to-pink-100 border border-pink-200': 'from-pink-950/50 to-pink-900/50 border border-pink-500/30',
    'text-pink-900': 'text-pink-400',
    'from-indigo-50 to-indigo-100 border border-indigo-200': 'from-indigo-950/50 to-indigo-900/50 border border-indigo-500/30',
    'text-indigo-900': 'text-indigo-400',
    'from-red-50 to-red-100 border border-red-200': 'from-red-950/50 to-red-900/50 border border-red-500/30',
    'text-red-900': 'text-red-400',
    'from-amber-50 to-amber-100 border border-amber-200': 'from-amber-950/50 to-amber-900/50 border border-amber-500/30',
    'text-amber-900': 'text-amber-400',
    'from-teal-50 to-teal-100 border border-teal-200': 'from-teal-950/50 to-teal-900/50 border border-teal-500/30',
    'text-teal-900': 'text-teal-400',
    
    # Single color backgrounds
    'bg-orange-50 border border-orange-200': 'bg-orange-950/50 border border-orange-500/30',
    'bg-green-50 border border-green-200': 'bg-green-950/50 border border-green-500/30',
    'bg-purple-50 border border-purple-200': 'bg-purple-950/50 border border-purple-500/30',
    'bg-blue-50 border border-blue-200': 'bg-blue-950/50 border border-blue-500/30',
    'from-blue-50 to-indigo-50 border border-blue-200': 'from-blue-950/50 to-indigo-950/50 border border-blue-500/30',
    'bg-amber-50 border border-amber-200': 'bg-amber-950/50 border border-amber-500/30',
    'text-amber-800': 'text-amber-300',
    'from-orange-50 to-red-50 border border-orange-200': 'from-orange-950/50 to-red-950/50 border border-orange-500/30',
}

# Apply replacements
for old, new in replacements.items():
    content = content.replace(old, new)

# Write back
with open('/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Colors updated successfully!")
