---
layout: 'default'
title: 'Boring of open the same programs every morning or every time that you change projects? Giessen Wetzlar developers'
description: 'Well i was in the same place that you so i did a little research and check what other team member where using to start the day faster. Giessen Wetzlar developers '
draft: false
navigation: false
readTime: '5 MIN'
tag: 'vuejs,cli,tmux'
author: 'WRITTEN BY Ismael Garcia'
publishedAt: '15-06-2022'


image:  
    src: '/blog/tmuxp.png'  
    alt: 'Boring of open the same programs every morning or every time that you change projects? Giessen Wetzlar developers'  
    width: 400  
    height: 300

head:
    htmlAttrs:
        lang: 'en'
    bodyAttrs:
        class: ''
    meta:
        - name: 'description' 
          content: 'Boring of open the same programs every morning or every time that you change projects? Giessen Wetzlar developers'
        - name: 'keywords' 
          content: 'Boring of open the same programs every morning or every time that you change projects? Giessen Wetzlar developers'
        - name: 'robots'
          content: 'index, follow'    
        - name: 'author'      
          content: 'Leamsigc'

---



::blogHero
---
imageUrl: '/blog/tmuxp.png'
imageAlt: 'Boring of open the same programs every morning or every time that you change projects'
---

#title
Boring of open the same programs every morning or every time that you change projects

#descriptionSmall
Well i was in the same place that you so i did a little research and check what other team member where using to start the day faster

#username
Ismael Garcia

#date
Wed,27,Jul


#description
Well i was in the same place that you so i did a little research and check what other team member where using to start the day faster
My start of the day is kind of repetitive or let say is almost the same when i start the working day.
::


My start of the day is kind of repetitive or let say is almost the same when i start the working day.

- Open the chat application that i user to communicate with my team
- Open my time tracker application - so i can have a clear view of where my time is going every day.
- Open firefox with a couple tabs that a need for the day
  - Check emails
  - Check the ticket system
  - Check my calendar for the day
  - See the latest changes that the repo have

The solution for me was the fallowing

[tmuxp](https://github.com/tmux-python/tmuxp)

> tmux session manager

INSTALL STEPS

> pip install --user tmuxp

Create and `yml` file in the `~/.config/tmuxp/{filename}.yaml`

Here is mine :

```yaml
session_name: Start
start_directory: ~/ # load session relative to config location (project root).
before_script: echo "Starting of the day"
# shell_command_before:
# - '[ -f .venv/bin/activate ] && source .venv/bin/activate && reset'
windows:
  - window_name: Start the day
    focus: true
    layout: tiled
    options:
      main-pane-height: 35
    panes:
      - shell_command:
          - firefox # https://leamsigc.com/ add the link to the tab that firefox sould open
      - shell_command:
          - code # Open vscode
          - bpytop # #https://github.com/aristocratos/bpytop and alternative to htop
      - shell_command:
          - superproductivity & bg # https://super-productivity.com/ Time tricker
          - element-desktop & bg
```

## How to use

Start the day by open the terminal and run the fallowing command

> tmuxp load start #Remember the filename is start for my side so for you it would depend in the filename

### Recommendations

- [tmux](https://github.com/tmux/tmux)
- [bpytop](https://github.com/aristocratos/bpytop)
- [super-productivity](https://super-productivity.com/)
