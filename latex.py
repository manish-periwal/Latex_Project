import os
import fileinput


myDict={'title': ' ','author' : ' ','pgb' : ' ','univ' : ' ','date' : ' '}
myList=[]
with open('input1.txt','r') as fin:
    for line in fin.readlines():
        myList.append(line)
i=0
for key,value in myDict.items():
    myDict[key]=myList[i]
    i=i+1

test =r'''\documentclass{article}
\usepackage[utf8]{inputenc}
\begin{document}
	\begin{titlepage}
    \begin{center}
        \vspace*{2.5cm}
        
        \textbf{%(title)s}
        
        \vspace{1.5cm}
        
        \textbf{%(author)s}
        
        \vfill
        
        Project Given By\\
        %(pgb)s
        
        \vspace{0.8cm}
        
        %(univ)s\\
        %(date)s\\
        
    \end{center}
\end{titlepage}
\end{document}'''

test1=r'''\documentclass[red]{mythesis}
\usepackage[utf8]{inputenc}
\begin{document}
	\begin{titlepage}
	    \begin{center}
	    	\thesistitle{%(title)s}{%(author)s}{%(pgb)s}{%(univ)s}{%(date)s}  
    	\end{center}
	\end{titlepage}
\end{document}
'''
with open('preamble.tex','w') as fout:
    fout.write(test1 % (myDict))
