import csv
from pathlib import Path


audio = set()
missing = set()
with open('./static/data/written_rhyme_decision.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        f1 = Path(f"/Users/jonathanslawitsky/Downloads/Audio and Video Recordings/{row['Sound1']}.wav")
        f2 = Path(f"/Users/jonathanslawitsky/Downloads/Audio and Video Recordings/{row['Sound2']}.wav")

        audio.add(row['Sound1'])
        audio.add(row['Sound2'])
        if not f1.exists():
            missing.add(row['Sound1'])
        if not f2.exists():
            missing.add(row['Sound2'])

import pdb; pdb.set_trace()