from weasyprint import HTML
import os

import subprocess

build_data = subprocess.Popen(['npm','run', 'build'], stdout=subprocess.PIPE)

with open('log/log.txt', 'w') as file_output_log:
    file_output_log.write('----------- START BUILD------------------')
    file_output_log.write(str(build_data.stdout.read()))
    file_output_log.write('-------------------- FINISHED BUILD ------------------')

print('BUILD FINISHED')

with open('dist/de.html', 'r') as readfile1:
    data1 = readfile1.read().replace('="/css', '="css')

with open('dist/de_pdf.html', 'w') as file_output1:
    file_output1.write(data1)

print('HTML TRANSFERED')


otherlog=HTML('dist/de_pdf.html').write_pdf('PdfOutput/De.pdf')

print('PDF BUILD FINISHED')

with open('log/log.txt', 'w') as file_output_log:
    file_output_log.write('----------- START PDF------------------')
    file_output_log.write(str(otherlog))
    file_output_log.write('-------------------- FINISHED PDF ------------------')

print('LOG BUILD FINISHED')
