"""Read-only checks of the generated public guides and shared fee source."""
import ast
import json
import re
from pathlib import Path
import pdfplumber
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[2]
rates = json.loads((ROOT / 'invoices/rates.json').read_text(encoding='utf-8'))
assert len(rates['web']['items']) == 30
assert len(rates['editing']['items']) == 5
assert [row['ngn'] for row in rates['web']['care']] == [30000,60000,120000]

source = Path('D:/repos/BTI/scripts/generate-invoices.py')
if source.exists():
    tree = ast.parse(source.read_text(encoding='utf-8-sig'))
    original = next(ast.literal_eval(node.value) for node in tree.body if isinstance(node,ast.Assign) and any(isinstance(t,ast.Name) and t.id=='RATES' for t in node.targets))
    assert [(row['title'],row['scope'],row['ngn']) for row in rates['web']['items']] == original
    print('All 30 web categories, scopes and fees exactly match the supplied general-guide source.')

files = sorted((ROOT / 'public/invoices').rglob('*.pdf'))
assert len(files) == 5
for file in files:
    reader = PdfReader(file)
    expected = 4 if file.parent.name == 'web-development' else 2
    assert len(reader.pages) == expected
    text = '\n'.join(page.extract_text() for page in reader.pages)
    assert all(c not in text for c in ['\ufffd','\u2011','\u2013','\u2014'])
    assert not re.search(r'Account number\s*:\s*\d',text,re.I)
    assert not re.search(r'PayPal\s*.*@',text,re.I)
    assert 'Not issued.' in text and 'not a bill' in text
    key = {'web-development':'web','video-editing':'editing','motion-design':'motion'}[file.parent.name]
    currency = file.stem
    for row in rates[key]['items']:
        if row[currency] is not None:
            assert f'{row[currency]:,}' in text, (file,row['title'])
    with pdfplumber.open(file) as pdf:
        for page in pdf.pages:
            assert page.chars
            assert all(39 <= c['x0'] <= c['x1'] <= page.width-39 and 25 <= c['top'] <= c['bottom'] <= page.height-15 for c in page.chars), file
    mirror = ROOT / 'output/pdf/service-invoices' / file.parent.name / file.name
    assert file.read_bytes() == mirror.read_bytes()
    print(f'{file.relative_to(ROOT)}: {expected} pages; fees, glyphs, bounds, privacy and mirror passed.')
