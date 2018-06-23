#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Kris'
SITENAME = 'FSHS Robotics'
SITEURL = ''
THEME = 'themes/moderack'

DISPLAY_PAGES_ON_MENU = False
DISPLAY_CATEGORIES_ON_MENU = True
USE_FOLDER_AS_CATEGORY = True 
ARTICLE_PATHS = ['articles','']
PAGE_PATHS = ['pages',]
MENUITEMS = ()
OUTPUT_PATH = 'public/'

PATH = 'content'

TIMEZONE = 'Australia/Sydney'

DEFAULT_LANG = 'English'

PLUGIN_PATHS = ["plugins"]
PLUGINS = ["pelican-page-hierarchy"]

PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'
SLUGIFY_SOURCE = 'basename'

# Feed generation is usually not desired when developing
# FEED_ALL_ATOM = None
# CATEGORY_FEED_ATOM = None
# TRANSLATION_FEED_ATOM = None
# AUTHOR_FEED_ATOM = None
# AUTHOR_FEED_RSS = None

# # Blogroll
# LINKS = (('Pelican', 'http://getpelican.com/'),
#          ('Python.org', 'http://python.org/'),
#          ('Jinja2', 'http://jinja.pocoo.org/'),
#          ('You can modify those links in your config file', '#'),)

# # Social widget
# SOCIAL = (('You can add links in your config file', '#'),
#           ('Another social link', '#'),)

# DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True

