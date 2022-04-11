<template><h2 id="模态框组件" tabindex="-1"><a class="header-anchor" href="#模态框组件" aria-hidden="true">#</a> 模态框组件</h2>
<modalIndex></modalIndex>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>
        <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>350<span class="token punctuation">"</span></span>
        <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span>
        <span class="token attr-name">:boderRadius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span>
        <span class="token attr-name">headerColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ffffff<span class="token punctuation">"</span></span>
        <span class="token attr-name">headerText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>this is a super model<span class="token punctuation">"</span></span>
        <span class="token attr-name">contentText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Modal body text<span class="token punctuation">"</span></span>
        <span class="token attr-name">postion</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span>
        <span class="token attr-name">:btnGroupShow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
        <span class="token attr-name">confirmText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Yes<span class="token punctuation">"</span></span>
        <span class="token attr-name">cancelText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>No<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h3>
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
<td style="text-align:center">width</td>
<td style="text-align:center">宽度</td>
<td style="text-align:center">Number</td>
<td style="text-align:center">300</td>
</tr>
<tr>
<td style="text-align:center">height</td>
<td style="text-align:center">高度</td>
<td style="text-align:center">Number</td>
<td style="text-align:center">200</td>
</tr>
<tr>
<td style="text-align:center">boderRadius</td>
<td style="text-align:center">弧度</td>
<td style="text-align:center">Number</td>
<td style="text-align:center">10</td>
</tr>
<tr>
<td style="text-align:center">headerColor</td>
<td style="text-align:center">头部颜色</td>
<td style="text-align:center">String</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">headerText</td>
<td style="text-align:center">头部文字</td>
<td style="text-align:center">String</td>
<td style="text-align:center">#fff</td>
</tr>
<tr>
<td style="text-align:center">contentText</td>
<td style="text-align:center">内容</td>
<td style="text-align:center">String</td>
<td style="text-align:center">&quot;&quot;</td>
</tr>
<tr>
<td style="text-align:center">position</td>
<td style="text-align:center">位置</td>
<td style="text-align:center">String</td>
<td style="text-align:center">center</td>
</tr>
<tr>
<td style="text-align:center">btnGroupShow</td>
<td style="text-align:center">是否显示按钮</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">true</td>
</tr>
<tr>
<td style="text-align:center">confirmText</td>
<td style="text-align:center">确认文字</td>
<td style="text-align:center">String</td>
<td style="text-align:center">yes</td>
</tr>
<tr>
<td style="text-align:center">cancelText</td>
<td style="text-align:center">取消文字</td>
<td style="text-align:center">String</td>
<td style="text-align:center">no</td>
</tr>
</tbody>
</table>
</template>
