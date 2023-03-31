import{_ as s,o as n,c as a,N as l}from"./chunks/framework.318754cd.js";const u=JSON.parse('{"title":"gn","titleTemplate":"构建工具","description":"","frontmatter":{"title":"gn","titleTemplate":"构建工具"},"headers":[],"relativePath":"docs/c_cpp/build_tools/gn/index.md","lastUpdated":null}'),e={name:"docs/c_cpp/build_tools/gn/index.md"},p=l(`<h2 id="什么是gn" tabindex="-1">什么是gn <a class="header-anchor" href="#什么是gn" aria-label="Permalink to &quot;什么是gn&quot;">​</a></h2><p>gn 即 Generate ninjia ,顾名思义就是用来生成ninjia编译文件的工具，可以理解为cmake工具。</p><h2 id="基本的目录结构" tabindex="-1">基本的目录结构 <a class="header-anchor" href="#基本的目录结构" aria-label="Permalink to &quot;基本的目录结构&quot;">​</a></h2><div class="language-gn"><button title="Copy Code" class="copy"></button><span class="lang">gn</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">│  .gn</span></span>
<span class="line"><span style="color:#A6ACCD;">│  BUILD.gn</span></span>
<span class="line"><span style="color:#A6ACCD;">│  main.cpp</span></span>
<span class="line"><span style="color:#A6ACCD;">├─build</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  BUILD.gn</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  BUILDCONFIG.gn</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─toolchain</span></span>
<span class="line"><span style="color:#A6ACCD;">│          BUILD.gn</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="生成可执行文件" tabindex="-1">生成可执行文件 <a class="header-anchor" href="#生成可执行文件" aria-label="Permalink to &quot;生成可执行文件&quot;">​</a></h2><div class="language-gn"><button title="Copy Code" class="copy"></button><span class="lang">gn</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">execucutable(&quot;main&quot;){</span></span>
<span class="line"><span style="color:#A6ACCD;">    include_dirs = [ # 头文件路径</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;//include&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    sources = [ # 源文件</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;main.cpp&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    deps = [ # 连接动态库/静态库</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;:hello&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    lib_dirs = [ # 其他库文件路径</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;//&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;/lib&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    libs = [ # 要连接的其他库</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;hello&quot; # hello.so/hello.a 或 libhello.so/libhello.a</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="生成动态库-静态库" tabindex="-1">生成动态库/静态库 <a class="header-anchor" href="#生成动态库-静态库" aria-label="Permalink to &quot;生成动态库/静态库&quot;">​</a></h2><div class="language-gn"><button title="Copy Code" class="copy"></button><span class="lang">gn</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">shared_library(&quot;hello&quot;){ # output: libhello.so/libhello.dll</span></span>
<span class="line"><span style="color:#A6ACCD;">    sources = [</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;hello.cpp&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">static_library(&quot;hello&quot;){</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8),o=[p];function t(c,i,r,C,A,d){return n(),a("div",null,o)}const y=s(e,[["render",t]]);export{u as __pageData,y as default};
