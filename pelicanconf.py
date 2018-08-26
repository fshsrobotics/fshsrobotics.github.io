#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Kris'
SITENAME = 'FSHS Robotics'
SITEURL = ''
THEME = 'themes/fshsrobotics'

DISPLAY_PAGES_ON_MENU = False
DISPLAY_CATEGORIES_ON_MENU = True
USE_FOLDER_AS_CATEGORY = True 
ARTICLE_PATHS = ['articles']
PAGE_PATHS = ['pages']
STATIC_PATHS = ['file', 'extra', 'pages']
MENUITEMS = ()
OUTPUT_PATH = 'public/'
DELETE_OUTPUT_DIRECTORY = True
EXTRA_PATH_METADATA = {
    'extra/404.html': {'path': '404.html'}
}
ARTICLE_EXCLUDES = [
    'extra'
]

PATH = 'content'

TIMEZONE = 'Australia/Sydney'

DEFAULT_LANG = 'English'

PLUGIN_PATHS = ["plugins"]
PLUGINS = ["pelican-page-hierarchy"]

PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'
SLUGIFY_SOURCE = 'basename'

MARKDOWN = {
    'extensions' : ['markdown.extensions.codehilite', 'markdown.extensions.extra', 'markdown.extensions.meta'],
    'extension_configs': {
        'markdown.extensions.codehilite': {'css_class': 'highlight'},
        'markdown.extensions.tables':{},
        'markdown.extensions.extra': {},
        # if you have nothing to configure there is no need to add a empty config
        'markdown.extensions.meta': {}, 
        'markdown.extensions.toc': {},
    }
    # By default Pelican already sets the output_format to html5 so it is only needed if you want something else
    #'output_format': 'html5',
}

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

