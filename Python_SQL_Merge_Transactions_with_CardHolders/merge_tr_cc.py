import sqlite3

import pandas as pd
from pandas import DataFrame

sqlite_file = 'bank_transactions.sqlite'    # name of the sqlite database file
table_name1 = 'transactions'	# name of the table to be created
table_name2 = 'card_numbers'	# name of the table to be created
new_field = 'my_1st_column' # name of the column
field_type = 'INTEGER'  # column data type

# Connecting to the database file
conn = sqlite3.connect(sqlite_file)
c = conn.cursor()







# Creating monthly transactions table 
c.execute('CREATE TABLE transactions(Date TEXT, Description TEXT, Card INTEGER , Amount REAL)')

# Creating credit card holder table

c.execute('CREATE TABLE cards( CardHolder TEXT, Card INTEGER)')

# Insert the values from the csv file into the table 'transactions' 

read_transactions.to_sql('transactions', conn, if_exists='append', index = False) 

# Insert the values from the csv file into the table 'cards' 

read_cards = pd.read_csv ('/Users/t_daw/Projects/accounting/cards.csv')
read_cards.to_sql('cards', conn, if_exists='append', index = False) 



# print tables 

read_cards_df = pd.DataFrame(read_cards, columns= ['CardHolder','Card'])

print (read_cards_df) 


read_transactions_df = pd.DataFrame(read_transactions, columns= ['Date', 'Description', 'Card', 'Amount'])

print (read_transactions_df) 

# merge monthly bank transactions with list of company card holders

df_merge_table = pd.merge(read_cards_df, read_transactions_df, on='Card')


# save merged table as csv


export_csv = df_merge_table.to_csv ('/file_location/transactions_cards_merge.csv', index = None, header=True) 

print (df_merge_table)


# Committing changes and closing the connection to the database file

conn.commit()
conn.close()