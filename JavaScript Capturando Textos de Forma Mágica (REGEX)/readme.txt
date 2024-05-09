/----------DADOS----------------------------------------------------------------------------------------------/

João Fulano,123.456.789-00,21 de Maio de 1993,(21) 3079-9987,Rua do Ouvidor,50,20040-030,Rio de Janeiro

Maria Fulana, 98765432100,11 de Abril de 1995,(11) 933339871,Rua Vergueiro,3185,04101-300,São Paulo

denise teste, 987.654.321.  00,28 de Dezembro de 1991,(31)45562712,SCS Qd. 8 Bl. B-50,11,70333-900,Rio Grande

/----------QUANTIFIERS----------------------------------------------------------------------------------------/

? = Zero ou uma vez
* = Zero ou mais vezes
+ = Uma ou mais vezes

{n} = Exatemente n vezes
{n,} = No mínimo n vezes
{n, m} = No mínimo n+1 vezes, no máximo m vezes

/----------ETC------------------------------------------------------------------------------------------------/

\s = White Space = [\t\n\r\f]
\d = Todos os digitos [0-9]
\w = Word Char = [A-Za-z0-9_]
\b = Word Boundary
\B = Non Word Boundary

?: = Non Capturing Group (Colocar no início)
^ = Começa com o próximo termo
$ = Termina com o termo anterior

EX: Bom dia seu gay

RegExp ->  ^Bom.+gay$ -> Irá dar match