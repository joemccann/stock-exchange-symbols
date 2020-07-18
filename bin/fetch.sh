#! /bin/sh

curl https://old.nasdaq.com/screening/companies-by-name.aspx\?letter\=0\&exchange\=nasdaq\&render\=download >> ./csv/NASDAQ.csv
curl https://old.nasdaq.com/screening/companies-by-name.aspx\?letter\=0\&exchange\=nyse\&render\=download >> ./csv/NYSE.csv
curl https://old.nasdaq.com/screening/companies-by-name.aspx\?letter\=0\&exchange\=amex\&render\=download >> ./csv/AMEX.csv

