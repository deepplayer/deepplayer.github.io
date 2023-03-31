import{_ as s,o as a,c as n,N as e}from"./chunks/framework.318754cd.js";const A=JSON.parse('{"title":"python","description":"","frontmatter":{"title":"python"},"headers":[],"relativePath":"docs/python/index.md","lastUpdated":null}'),t={name:"docs/python/index.md"},l=e(`<h2 id="requirements-txt" tabindex="-1">requirements.txt <a class="header-anchor" href="#requirements-txt" aria-label="Permalink to &quot;requirements.txt&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 记录环境里面的依赖包和精确地版本号。</span></span>
<span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">freeze</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">requirements.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 获取当前环境的依赖包</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">##################################################</span></span>
<span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pipreqs</span></span>
<span class="line"><span style="color:#FFCB6B;">pipreqs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--encoding=utf8</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--force</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 获取当前目录下使用的依赖包</span></span>
<span class="line"></span></code></pre></div>`,2),o=[l];function p(c,r,i,y,C,d){return a(),n("div",null,o)}const D=s(t,[["render",p]]);export{A as __pageData,D as default};