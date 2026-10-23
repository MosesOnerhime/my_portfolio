"""Build public-safe general price guides and reusable invoice templates.

Run with Python + ReportLab + pypdf. All pricing comes from ../rates.json.
Original invoices and client/payment-account details are never copied.
"""
import json
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[2]
DATA = json.loads((ROOT / 'invoices/rates.json').read_text(encoding='utf-8'))
OUTPUT = ROOT / 'output/pdf/service-invoices'
FONT = Path('C:/Windows/Fonts')
pdfmetrics.registerFont(TTFont('Invoice', str(FONT / 'arial.ttf')))
pdfmetrics.registerFont(TTFont('InvoiceBold', str(FONT / 'arialbd.ttf')))
pdfmetrics.registerFontFamily('Invoice', normal='Invoice', bold='InvoiceBold')
INK, ACCENT, MUTED, LINE, PALE = map(colors.HexColor, ['#17212A', '#465D70', '#555F65', '#CBD0D2', '#F1F2EF'])
WIDTH = A4[0] - 88
STYLES = {
    'title': ParagraphStyle('title', fontName='InvoiceBold', fontSize=28, leading=31, textColor=INK, spaceAfter=9),
    'heading': ParagraphStyle('heading', fontName='InvoiceBold', fontSize=13, leading=17, textColor=ACCENT, spaceBefore=14, spaceAfter=7, keepWithNext=True),
    'body': ParagraphStyle('body', fontName='Invoice', fontSize=9.5, leading=13.3, textColor=INK, spaceAfter=8),
    'small': ParagraphStyle('small', fontName='Invoice', fontSize=8.5, leading=11.5, textColor=MUTED, spaceAfter=6),
    'cell': ParagraphStyle('cell', fontName='Invoice', fontSize=8.5, leading=11.5, textColor=INK),
    'white': ParagraphStyle('white', fontName='InvoiceBold', fontSize=8.5, leading=11.5, textColor=colors.white),
}


def p(text, style='body'):
    return Paragraph(text, STYLES[style])


def money(value, currency):
    return ('₦' if currency == 'ngn' else '$') + f'{value:,.0f}'


def rate(row, currency):
    value = row.get(currency)
    if value is None:
        return 'Quoted for scope'
    high = row.get(currency + 'Max')
    return money(value, currency) + (f' - {money(high, currency)}' if high else '') + ('+' if row.get('plus') else '')


def heading(title, currency, subtitle):
    return [p(title, 'title'), p(f'{currency.upper()} | GENERAL GUIDE | 23 OCTOBER 2026', 'small'), p(subtitle), Spacer(1, 5)]


def rates_table(rows, currency, price_title='Starting fee'):
    cells = [[p('Service / scope', 'white'), p(price_title, 'white')]]
    for row in rows:
        cells.append([p(f'<b>{escape(row["title"])}</b><br/>{escape(row["scope"])}', 'cell'), p(escape(rate(row, currency)), 'cell')])
    table = Table(cells, colWidths=[WIDTH - 112, 112], repeatRows=1, hAlign='LEFT')
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), INK), ('ROWBACKGROUNDS', (0, 1), (-1, -1), [PALE, colors.white]),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'), ('LEFTPADDING', (0, 0), (-1, -1), 9),
        ('RIGHTPADDING', (0, 0), (-1, -1), 9), ('TOPPADDING', (0, 0), (-1, -1), 7), ('BOTTOMPADDING', (0, 0), (-1, -1), 7),
    ]))
    return table


def footer(total):
    def draw(canvas, doc):
        canvas.saveState()
        canvas.setStrokeColor(LINE)
        canvas.line(44, 37, A4[0] - 44, 37)
        canvas.setFont('Invoice', 8)
        canvas.setFillColor(MUTED)
        canvas.drawString(44, 24, 'Moses Onerhime | mosesonerhime.com | General guide, not a bill')
        canvas.drawRightString(A4[0] - 44, 24, f'{doc.page} / {total}')
        canvas.restoreState()
    return draw


def invoice_template(discipline, currency, terms, sample=None):
    story = heading('Invoice template', currency, 'Not issued. Replace every bracketed field and confirm the scope before sending to a client.')
    fields = [
        ('Prepared by', 'Moses Onerhime | mosesonerhime11@gmail.com'),
        ('Billed to', '[Client / company name and contact]'),
        ('Invoice / issue date', '[Unique invoice number] | [Issue date]'),
        ('Project / delivery', '[Project name] | [Agreed delivery date]'),
        ('Service / scope', f'{discipline}: [Agreed deliverables, format, duration/pages and exclusions]'),
    ]
    story.append(Table([[p(f'<b>{label}</b>', 'cell'), p(escape(value), 'cell')] for label, value in fields], colWidths=[124, WIDTH-124], style=TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'), ('BOTTOMPADDING',(0,0),(-1,-1),10), ('TOPPADDING',(0,0),(-1,-1),6), ('LINEBELOW',(0,0),(-1,-1),.4,LINE)])))
    story.append(Spacer(1, 13))
    rows = [['Description', 'Amount'], ['[Agreed core service]', money(sample, currency) if sample else '[Agreed amount]'], ['[Approved add-ons only]', '[Amount / none]'], ['[Agreed discount]', '[Amount / none]'], ['[Applicable tax treatment, confirmed before issue]', '[Amount / not applicable]'], ['Total service fee', '[Final total]']]
    if sample:
        rows += [['Example service fee only', money(sample, currency)], ['Example 50% deposit', money(sample / 2, currency)], ['Example 50% before final delivery', money(sample / 2, currency)]]
        assert sample / 2 + sample / 2 == sample
    else:
        rows += [['Optional first month of care', '[Selected care fee / none]'], ['Total due on completion and approval', '[Final agreed total]']]
    table = Table([[p(escape(a), 'cell'), p(escape(b), 'cell')] for a,b in rows], colWidths=[WIDTH - 150, 150], style=TableStyle([('BACKGROUND',(0,0),(-1,0),PALE),('VALIGN',(0,0),(-1,-1),'TOP'),('TOPPADDING',(0,0),(-1,-1),8),('BOTTOMPADDING',(0,0),(-1,-1),8),('LINEBELOW',(0,-1),(-1,-1),.6,LINE)]))
    story.append(table)
    if sample:
        story.append(p('Illustrative amount only. Update the base fee, add-ons, discount, tax treatment and all totals before issue. The example is not an amount owed.', 'small'))
    story += [p('Payment and delivery', 'heading'), p(escape(terms)), p('Payment details are supplied privately on the issued invoice. This public template contains no bank account, third-party payment email, client details, late fee or payment request.', 'small'), p('Two consolidated revision rounds within the agreed brief. Additional scope requires a separate written quote. State any usage, source-file or posting agreement explicitly before issue.', 'small')]
    return story


def build(kind, currency):
    key = {'motion-design': 'motion', 'video-editing': 'editing', 'web-development': 'web'}[kind]
    data = DATA[key]
    story = heading(data['title'] + ' rates', currency, data['description'])
    story.append(p(data['basis'] + '. ' + DATA['currencyNote'], 'small'))
    if key == 'web':
        story += [rates_table(data['items'][:15], currency), PageBreak()]
        story += heading('Functional websites', currency, 'Commerce, bookings and custom platforms. Each row is an alternative starting scope.')
        story += [rates_table(data['items'][15:], currency), p('The fintech / regulated-data fee is for discovery and architecture only, not a complete platform build.', 'small'), PageBreak()]
        story += heading('Scope and monthly care', currency, 'Care is optional and separate from the one-off website fee.')
        for title, text in [('Included in the build',data['includes']),('Provider costs and exclusions',data['excludes'])]:
            story += [p(title,'heading'), p(escape(text))]
        story += [rates_table(data['care'],currency,'Monthly fee'), p(escape(data['careTerms'])), p('Optional additions','heading'), p(escape(data['additions'])), p('Web payment','heading'), p(escape(data['payment'])), PageBreak()]
        story += invoice_template(data['title'],currency,data['payment'])
        pages = 4
    else:
        story.append(rates_table(data['items'],currency,'Typical fee' if key == 'motion' else 'Starting fee'))
        if key == 'motion':
            story += [p('Typical showcase quote','heading'), p(money(data['standard'][currency],currency) + ' for one polished product showcase. The ranges above are alternatives, not amounts to add together.')]
        for title, text in [('Included',data['includes']),('Quoted separately',data['excludes']),('Payment',data['payment'])]:
            story += [p(title,'heading'), p(escape(text))]
        if key == 'editing':
            story += [p(escape(data['posting']),'small'), p('These editing packages are new indicative recommendations, not past invoice totals. Quotes are valid for 14 days; timing and any additional permissions are agreed before booking.','small')]
        story += [PageBreak()] + invoice_template(data['title'],currency,data['payment'], data['standard'][currency] if key == 'motion' else data['items'][1][currency])
        pages = 2
    target = OUTPUT / kind / (currency + '.pdf')
    target.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(str(target),pagesize=A4,leftMargin=44,rightMargin=44,topMargin=39,bottomMargin=48,title=f'{data["title"]} - {currency.upper()} general rates and invoice template',author='Moses Onerhime')
    doc.build(story,onFirstPage=footer(pages),onLaterPages=footer(pages))
    reader = PdfReader(target)
    assert len(reader.pages) == pages, (target,len(reader.pages),pages)
    public = ROOT / 'public/invoices' / kind / target.name
    public.parent.mkdir(parents=True,exist_ok=True)
    public.write_bytes(target.read_bytes())
    markdown = ROOT / 'invoices' / kind / (currency + '.md')
    markdown.parent.mkdir(parents=True,exist_ok=True)
    markdown.write_text('\n'.join([
        f'# {data["title"]}: {currency.upper()}', '', data['basis'], '', data['description'], '',
        '| Service | Scope | Fee |','| --- | --- | --- |',
        *[f'| {row["title"]} | {row["scope"]} | {rate(row,currency)} |' for row in data['items']], '',
        '## Included',data['includes'],'','## Separate scope',data['excludes'],'','## Payment',data['payment'],'',
        data.get('posting',''),'',
        '## Reusable invoice fields','- Client: [Name and contact]','- Number and issue date: [Fill before sending]','- Project and delivery: [Agreed scope and date]','- Service, add-ons, discount and applicable tax treatment: [Confirm]','- Total and payment schedule: [Calculate from the agreed fee]','- Payment destination: [Supply privately on the issued invoice]','',
        'This is a general price guide and unissued invoice template, not a bill. The PDF contains an illustrative example where relevant.',
        f'\nPDF: [Download](../../public/invoices/{kind}/{currency}.pdf)',
    ]),encoding='utf-8')
    print(f'{target.relative_to(ROOT)}: {pages} pages, {target.stat().st_size} bytes')


if __name__ == '__main__':
    for discipline,currencies in [('motion-design',['ngn','usd']),('video-editing',['ngn','usd']),('web-development',['ngn'])]:
        for currency in currencies:
            build(discipline,currency)
