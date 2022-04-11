<template><h2 id="轮播图组件" tabindex="-1"><a class="header-anchor" href="#轮播图组件" aria-hidden="true">#</a> 轮播图组件</h2>
<carouselIndex></carouselIndex>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slider-com</span>
      <span class="token attr-name">:autoplay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
      <span class="token attr-name">:duration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2000<span class="token punctuation">"</span></span>
      <span class="token attr-name">:initial</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span>
      <span class="token attr-name">:hasDot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
      <span class="token attr-name">:hasDirector</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
      <span class="token attr-name">:urlObject</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>urlObject<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slider-com</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h3>
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
<td style="text-align:center">autoplay</td>
<td style="text-align:center">自动播放</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">true</td>
</tr>
<tr>
<td style="text-align:center">duration</td>
<td style="text-align:center">循环速度</td>
<td style="text-align:center">Number</td>
<td style="text-align:center">200</td>
</tr>
<tr>
<td style="text-align:center">initial</td>
<td style="text-align:center">初始第几张</td>
<td style="text-align:center">Number</td>
<td style="text-align:center">0</td>
</tr>
<tr>
<td style="text-align:center">hasDot</td>
<td style="text-align:center">是否有点</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">true</td>
</tr>
<tr>
<td style="text-align:center">hasDirector</td>
<td style="text-align:center">是否有指示器</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">true</td>
</tr>
<tr>
<td style="text-align:center">urlObject</td>
<td style="text-align:center">图片数据</td>
<td style="text-align:center">Object</td>
<td style="text-align:center">&quot;&quot;</td>
</tr>
</tbody>
</table>
</template>
