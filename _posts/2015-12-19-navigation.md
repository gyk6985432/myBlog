---
layout: page
title: 列表
url: http://gyk6985432.github.io/myBlog//2015/12/19/navigation/
---
# test

{% for node in site.pages %}
    {% if node.layout == "page" %}

        [{{ node.title }}]({{ node.url }})

    {% endif %}
{% endfor %}