# Accounting_Automation
projects to speed up mundane accounting tasks


Every month, I review credit card transactions and upload them into Quickbooks. There are several employees who have company
cards but sometimes fail to send receipts. Our bank does not provide an easily downloadable spreadsheet with transactions along with the card number they are charged to,  throughout the month. At the end of the month, they do provide a pdf with this information. 

I used tabula to parse the pdf and manually cleaned up the data into a csv with 4 columns (Date, Description, Card [ cc #], Amount).
I have another table (in csv format) with CardHolder name and Card #. 

The merge_tr_cc.py file uses python with pandas to join these two tables. This way, I can quickly tell who purchased what.

My next next step is to automate the email process. The goal is to automatically send each employee a list of their credit card
transactions and ask them to verify that these transactions are correct and to provide me with receipts. 
