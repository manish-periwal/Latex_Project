
\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{mythesis}[2017/12/25 Thesis class]


\newcommand{\headlinecolor}{\normalcolor}
\LoadClass{article}
\RequirePackage{xcolor}
\definecolor{slcolor}{HTML}{882B21}


\DeclareOption{green}{\renewcommand{\headlinecolor}{\color{green}}}
\DeclareOption{red}{\renewcommand{\headlinecolor}{\color{slcolor}}}
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{article}}
\ProcessOptions\relax


\newcommand{\thesistitle}[5]{%
	\vspace*{2.5cm}

	\textbf{title: #1}

	\vspace{1.5cm}

	\textbf{(author): #2}

	\vfill

	Project Given By\\
	(pgb): #3

	\vspace{0.8cm}

	(univ):#4\\
	(date):#5\\
}
\renewenvironment{titlepage}{%
	\fontsize{25}{30}\fontfamily{phv}\fontseries{b}
	\fontshape{sl}\selectfont\headlinecolor
	\medskip
}
{}