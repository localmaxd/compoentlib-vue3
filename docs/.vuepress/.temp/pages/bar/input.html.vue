<template><div class="inputs-wrapper">
<input-index></input-index>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputCom</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入用户名<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">:clearable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputCom</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputCom</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入密码<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">:clearable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span>false<span class="token punctuation">"</span></span> <span class="token attr-name">:show-password</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputCom</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h3>
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
<td style="text-align:center">type</td>
<td style="text-align:center">类型</td>
<td style="text-align:center">String{default/primary/dashed}</td>
<td style="text-align:center">primary</td>
</tr>
<tr>
<td style="text-align:center">placeholder</td>
<td style="text-align:center">提示信息</td>
<td style="text-align:center">String</td>
<td style="text-align:center">&quot;&quot;</td>
</tr>
<tr>
<td style="text-align:center">disabled</td>
<td style="text-align:center">是否禁用</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">false</td>
</tr>
<tr>
<td style="text-align:center">clearable</td>
<td style="text-align:center">是否可清除</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">false</td>
</tr>
<tr>
<td style="text-align:center">showPassword</td>
<td style="text-align:center">是否可显示密码</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">false</td>
</tr>
<tr>
<td style="text-align:center">name</td>
<td style="text-align:center">姓名</td>
<td style="text-align:center">String</td>
<td style="text-align:center">&quot;&quot;</td>
</tr>
<tr>
<td style="text-align:center">value</td>
<td style="text-align:center">输入框的值</td>
<td style="text-align:center">String</td>
<td style="text-align:center">&quot;&quot;</td>
</tr>
</tbody>
</table>
</template>

<style>
.inputs-wrapper{
    width: 100%;
    margin-top: 10%;
    margin-left: 30%;
}
</style>
