import{_ as s,o as a,c as n,N as l}from"./chunks/framework.318754cd.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/c_cpp/cpp/qt/index.md","lastUpdated":null}'),p={name:"docs/c_cpp/cpp/qt/index.md"},o=l(`<h2 id="设置窗口置顶" tabindex="-1">设置窗口置顶 <a class="header-anchor" href="#设置窗口置顶" aria-label="Permalink to &quot;设置窗口置顶&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-Zemlw" id="tab-Nf6a05M" checked="checked"><label for="tab-Nf6a05M">方法一</label><input type="radio" name="group-Zemlw" id="tab-v0hPxQu"><label for="tab-v0hPxQu">方法二</label></div><div class="blocks"><div class="language-cpp active"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight has-focused-lines"><code><span class="line"><span style="color:#FFCB6B;">Widget</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Widget</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">QWidget </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">parent</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    : </span><span style="color:#82AAFF;">QWidget</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">parent</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ui</span><span style="color:#89DDFF;">(new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ui</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">Widget</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ui</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">setupUi</span><span style="color:#89DDFF;">(this);</span></span>
<span class="line has-focus"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this-&gt;</span><span style="color:#82AAFF;">setWindowFlag</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Qt</span><span style="color:#89DDFF;">::</span><span style="color:#F07178;">FramelessWindowHint</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">true);</span><span style="color:#676E95;font-style:italic;">     //设置无边框窗体 </span></span>
<span class="line has-focus"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this-&gt;</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Qt</span><span style="color:#89DDFF;">::</span><span style="color:#F07178;">WA_TranslucentBackground</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">true);</span><span style="color:#676E95;font-style:italic;">       //背景半透明属性设置  </span></span>
<span class="line has-focus"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this-&gt;</span><span style="color:#82AAFF;">setWindowFlag</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Qt</span><span style="color:#89DDFF;">::</span><span style="color:#F07178;">WindowStaysOnTopHint</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">true);</span><span style="color:#676E95;font-style:italic;">    //窗口置顶  </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight has-focused-lines"><code><span class="line"><span style="color:#FFCB6B;">Widget</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Widget</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">QWidget </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">parent</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    : </span><span style="color:#82AAFF;">QWidget</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">parent</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ui</span><span style="color:#89DDFF;">(new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ui</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">Widget</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ui</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">setupUi</span><span style="color:#89DDFF;">(this);</span></span>
<span class="line has-focus"><span style="color:#676E95;font-style:italic;">    // 置顶 需导入windows.h </span></span>
<span class="line has-focus"><span style="color:#F07178;">    ::</span><span style="color:#82AAFF;">SetWindowPos</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">HWND</span><span style="color:#89DDFF;">(this-&gt;</span><span style="color:#82AAFF;">winId</span><span style="color:#89DDFF;">()),</span><span style="color:#F07178;"> HWND_TOPMOST</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> SWP_NOMOVE </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> SWP_NOSIZE </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> SWP_SHOWWINDOW</span><span style="color:#89DDFF;">);</span><span style="color:#F07178;"> </span></span>
<span class="line has-focus"><span style="color:#676E95;font-style:italic;">    // 不置顶</span></span>
<span class="line has-focus"><span style="color:#F07178;">    ::</span><span style="color:#82AAFF;">SetWindowPos</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">HWND</span><span style="color:#89DDFF;">(this-&gt;</span><span style="color:#82AAFF;">winId</span><span style="color:#89DDFF;">()),</span><span style="color:#F07178;"> HWND_NOTOPMOST</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> SWP_NOMOVE </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> SWP_NOSIZE </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> SWP_SHOWWINDOW</span><span style="color:#89DDFF;">);</span><span style="color:#F07178;">   </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></div></div><h2 id="窗口最小化" tabindex="-1">窗口最小化 <a class="header-anchor" href="#窗口最小化" aria-label="Permalink to &quot;窗口最小化&quot;">​</a></h2><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">this-&gt;</span><span style="color:#82AAFF;">setWindowState</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Qt</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">WindowMinimized</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h2 id="窗口关闭" tabindex="-1">窗口关闭 <a class="header-anchor" href="#窗口关闭" aria-label="Permalink to &quot;窗口关闭&quot;">​</a></h2><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">qApp</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">quit</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span></code></pre></div>`,6),e=[o];function t(c,F,r,y,D,i){return a(),n("div",null,e)}const C=s(p,[["render",t]]);export{A as __pageData,C as default};