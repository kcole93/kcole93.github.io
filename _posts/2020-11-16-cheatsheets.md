---
layout: post
title: "Workflow Cheatsheets"
date: 2020-11-16
---

# Performing OCR on Images and/or PDFs

## Combine Images and Convert to PDF
```
combine image-01.png image-02.png output.pdf
```
Uses Imagemagick.

## OCR a PDF File
```
ocrmypdf -l eng+ben input.pdf output.pdf
```
`-l`: Language flag, multiple may be set.
`--force-ocr`: May be necessary for wrongly-encoded PDF source files, as is often the case with Bengali documents.

### Image Processing
A number of image processing commands may also be used:
`--deskew`: will correct pages were scanned at a skewed angle by rotating them back into place.
`--remove-background`: attempts to detect and remove a noisy background from grayscale or color images. Monochrome images are ignored. This should not be used on documents that contain color photos as it may remove them.

Click [here](https://ocrmypdf.readthedocs.io/en/latest/index.html) for full documentation on ocrmypdf.
