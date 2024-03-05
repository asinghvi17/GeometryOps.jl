import{_ as s,c as e,o as a,a7 as t}from"./chunks/framework.Bhh3e6bl.js";const u=JSON.parse('{"title":"Extent embedding","description":"","frontmatter":{},"headers":[],"relativePath":"source/transformations/extent.md","filePath":"source/transformations/extent.md","lastUpdated":null}'),n={name:"source/transformations/extent.md"},i=t(`<h1 id="Extent-embedding" tabindex="-1">Extent embedding <a class="header-anchor" href="#Extent-embedding" aria-label="Permalink to &quot;Extent embedding {#Extent-embedding}&quot;">​</a></h1><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    embed_extent(obj)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Recursively wrap the object with a GeoInterface.jl geometry,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">calculating and adding an \`Extents.Extent\` to all objects.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">This can improve performance when extents need to be checked multiple times,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">such when needing to check if many points are in geometries, and using their extents</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">as a quick filter for obviously exterior points.</span></span></code></pre></div><p>Keywords</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">THREADED_KEYWORD</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CRS_KEYWORD</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">embed_extent(x; threaded=false, crs=nothing) =</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    apply(identity, GI.PointTrait, x; calc_extent=true, threaded, crs)</span></span></code></pre></div><hr><p><em>This page was generated using <a href="https://github.com/fredrikekre/Literate.jl" target="_blank" rel="noreferrer">Literate.jl</a>.</em></p>`,6),l=[i];function p(r,h,o,d,c,k){return a(),e("div",null,l)}const m=s(n,[["render",p]]);export{u as __pageData,m as default};
