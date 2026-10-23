# General rates and invoices

These are general guides and **unissued templates**, not client bills. No account details, client-specific invoices, actual payment records, or third-party PayPal accounts are included. Original documents remain untouched in the source repositories.

## Organized files

| Service | Editable text | PDF guide and template |
| --- | --- | --- |
| Motion design, Nigeria | [NGN](motion-design/ngn.md) | [PDF](../public/invoices/motion-design/ngn.pdf) |
| Motion design, international | [USD](motion-design/usd.md) | [PDF](../public/invoices/motion-design/usd.pdf) |
| Video editing, Nigeria | [NGN](video-editing/ngn.md) | [PDF](../public/invoices/video-editing/ngn.pdf) |
| Video editing, international | [USD](video-editing/usd.md) | [PDF](../public/invoices/video-editing/usd.pdf) |
| Website development, Nigeria | [NGN](web-development/ngn.md) | [PDF](../public/invoices/web-development/ngn.pdf) |

## Maintain a single price source

`rates.json` is the public-safe source shared by the website and document builder. Edit it first, then run `python -X utf8 invoices/tools/build_invoices.py` with ReportLab, pypdf, and Windows Arial installed. Final PDFs are written under `output/pdf/service-invoices/` and copied to their matching public download paths. Markdown companions are regenerated too. Do not put private client information in this JSON or any public template.

Motion and web fees retain the existing general-invoice prices and their different payment schedules. Editing fees are new indicative proposals created for this update. They cover **editing only**: posting on Furreal accounts and paid-media usage, licensing, exclusivity and campaign management are quoted separately, as confirmed by Moses.

For a real invoice, duplicate a template privately, fill all client/scope fields, calculate actual totals and any applicable tax treatment, confirm the payment arrangement, and supply the verified payment destination privately. No tax registration, exemption, late fee, automatic payment, campaign result or universal turnaround is implied. NGN/USD offers are separate prices, not a currency conversion.

See [provenance](PROVENANCE.md) for source boundaries and the basis of the new packages. Public documents intentionally omit financial account details from the original templates.
