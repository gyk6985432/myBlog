---
layout: page
title: 列表
---
# test

{% for node in site.pages %}
    {% if node.layout == "page" %}

        [{{ node.title }}]({{ node.url }})

    {% endif %}
{% endfor %}