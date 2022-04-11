from selenium import webdriver
from time import sleep
from bs4 import BeautifulSoup
from webdriver_manager.chrome import ChromeDriverManager
import pandas as pd
import numpy as np
from time import sleep
from random import randint

#concepts = ["string","hash-table","dynamic-programming","math","depth-first-search","sorting","greedy","database","breadth-first-search","tree","binary-search","matrix","binary-tree","two-pointers","bit-manipulation","stack","design","heap-priority-queue","graph","simulation","backtracking","prefix-sum","counting","sliding-window","linked-list","union-find","recursion","ordered-set","monotonic-stack","binary-search-tree","trie","divide-and-conquer","bitmask","queue","enumeration","geometry","memoization","game-theory","segment-tree","hash-function","topological-sort","interactive","binary-indexed-tree","data-stream","string-matching","rolling-hash","shortest-path","combinatorics","randomized","number-theory","monotonic-queue","iterator","merge-sort","concurrency","brainteaser","probability-and-statistics","doubly-linked-list","quickselect","bucket-sort","suffix-array","minimum-spanning-tree","counting-sort","shell","line-sweep","reservoir-sampling","eulerian-circuit","strongly-connected-component","radix-sort","rejection-sampling","biconnected-component"]
concepts = ["array"]

status = "UNSOLVED"

options = webdriver.ChromeOptions()

options.add_argument('--headless')

driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

page_url = "https://leetcode.com/tag/"

base_url = "https://leetcode.com"

problems = [["TITLE", "DIFFICULTY", "LINK", "CONCEPT", "STATUS"]]

for concept in concepts:
    url = page_url + concept
    driver.get(url)
    sleep(15)
    content = driver.page_source
    soup = BeautifulSoup(content, "html.parser")

    problems_table = soup.find("tbody")
  
    for row in problems_table.find_all("tr"):
        if row.find("i", {"class" : "fa-lock"}) == None:
            problem = row.find("td", {"label": "Title"})
            difficulty = row.find("td", {"label": "Difficulty"}).find("span").text
            title = problem['value']
            link = base_url + row.find("a")['href']
            problems.append([title, difficulty, link, concept, status])
    
    print(concept + " done")
    df = pd.DataFrame(problems)
    df.to_csv('problems.csv', mode='a', index=False,
                  encoding='utf-8', header=False)
    problems = []






