from weasyprint import HTML

with open('dist/en.html', 'r') as readfile1:
    data1 = readfile1.read().replace('="/css', '="css')

with open('dist/en_pdf.html', 'w') as file_output1:
    file_output1.write(data1)

with open('dist/de.html', 'r') as readfile1:
    data1 = readfile1.read().replace('="/css', '="css')

with open('dist/de_pdf.html', 'w') as file_output1:
    file_output1.write(data1)


HTML('dist/en_pdf.html').write_pdf('PdfOutput/En.pdf')
HTML('dist/de_pdf.html').write_pdf('PdfOutput/De.pdf')
# HTML('dist/de.html').write_pdf('out2pdf.pdf') 