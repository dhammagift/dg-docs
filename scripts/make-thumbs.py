#!/usr/bin/env python3
"""Make small webp copies of big images: static/img/*.png over 150 KB -> static/img/thumb/<name>.webp, 360 px wide.
Originals stay untouched. Run after adding a big image: python3 scripts/make-thumbs.py"""
import os, glob
from PIL import Image

SRC, OUT, MAX_KB, WIDTH = 'static/img', 'static/img/thumb', 150, 360
os.makedirs(OUT, exist_ok=True)
for p in sorted(glob.glob(SRC + '/*.png')):
    if os.path.getsize(p) < MAX_KB * 1024:
        continue
    im = Image.open(p)
    h = round(im.height * WIDTH / im.width)
    out = os.path.join(OUT, os.path.basename(p)[:-4] + '.webp')
    im.convert('RGBA').resize((WIDTH, h), Image.LANCZOS).save(out, 'WEBP', quality=82, method=6)
    print(out, os.path.getsize(out) // 1024, 'KB')
