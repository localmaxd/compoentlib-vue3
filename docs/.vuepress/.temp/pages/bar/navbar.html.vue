<template><h2 id="导航条组件" tabindex="-1"><a class="header-anchor" href="#导航条组件" aria-hidden="true">#</a> 导航条组件</h2>
<navbarIndex></navbarIndex>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menu-index</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menuItem</span><span class="token punctuation">></span></span>option 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>menuItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SubMenu</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>option2<span class="token punctuation">"</span></span> <span class="token attr-name">SubMode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menu-item-group</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menuItem</span><span class="token punctuation">></span></span>option 1-1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>menuItem</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menuItem</span><span class="token punctuation">></span></span>option 1-2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>menuItem</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menuItem</span><span class="token punctuation">></span></span>option 1-3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>menuItem</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>menu-item-group</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sub-menu</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>option 1-4<span class="token punctuation">"</span></span> <span class="token attr-name">SubMode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menu-item-group</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menuItem</span><span class="token punctuation">></span></span>option 2-1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>menuItem</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menuItem</span><span class="token punctuation">></span></span>option 2-2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>menuItem</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menuItem</span><span class="token punctuation">></span></span>option 2-3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>menuItem</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>menu-item-group</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sub-menu</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SubMenu</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menuItem</span><span class="token punctuation">></span></span>option 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>menuItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>menu-index</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h3>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">mode</td>
<td style="text-align:center">菜单排列</td>
<td style="text-align:center">String</td>
<td style="text-align:center">vertical</td>
</tr>
<tr>
<td style="text-align:center">subMode</td>
<td style="text-align:center">高度</td>
<td style="text-align:center">String</td>
<td style="text-align:center">hor</td>
</tr>
<tr>
<td style="text-align:center">title</td>
<td style="text-align:center">标题</td>
<td style="text-align:center">String</td>
<td style="text-align:center">&quot;&quot;</td>
</tr>
</tbody>
</table>
</template>
