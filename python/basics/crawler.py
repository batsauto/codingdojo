
from urllib2 import urlopen

from bs4 import BeautifulSoup

import pprint

url = 'http://www.codingdojo.com/'

soup = BeautifulSoup(urlopen(url), "html.parser")
# print soup


# Part 1


def print_href(url):
    tags = soup.find_all('a', {"href": True})
    hrefs = [tag.get('href') for tag in tags]
    href_set = set(hrefs)

    for href in href_set:
        pprint.pprint(href)

print_href(url)


# Part 2


def count_href(url):
    tags = soup.find_all('a', {"href": True})
    dict_of_tags = {}
    for tag in tags:
        if str(tag['href']) in dict_of_tags:
            dict_of_tags[str(tag['href'])] += 1
        else:
            dict_of_tags[str(tag['href'])] = 1
        pprint.pprint(dict_of_tags)

count_href(url)
