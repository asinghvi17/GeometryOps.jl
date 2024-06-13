import{_ as s,c as i,o as a,a6 as n}from"./chunks/framework.Xb6lhUcw.js";const o=JSON.parse('{"title":"If we want to inject adaptivity, we would do something like:","description":"","frontmatter":{},"headers":[],"relativePath":"source/methods/clipping/predicates.md","filePath":"source/methods/clipping/predicates.md","lastUpdated":null}'),t={name:"source/methods/clipping/predicates.md"},h=n(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Predicates</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ExactPredicates, ExactPredicates</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Codegen</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ExactPredicates</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ext</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ExactPredicates</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Codegen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> group!, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@genpredicate</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GeometryOps</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _False, _True, _booltype, _tuple_point</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GeoInterface </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GI</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #= Determine the orientation of c with regards to the oriented segment (a, b).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    Return 1 if c is to the left of (a, b).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    Return -1 if c is to the right of (a, b).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    Return 0 if c is on (a, b) or if a == b. =#</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    orient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a, b, c; exact) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> _orient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_booltype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(exact), a, b, c)</span></span></code></pre></div><p>If <code>exact</code> is <code>true</code>, use <code>ExactPredicates</code> to calculate the orientation.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    _orient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, a, b, c) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ExactPredicates</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">orient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_tuple_point</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a, Float64), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_tuple_point</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(b, Float64), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_tuple_point</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(c, Float64))</span></span></code></pre></div><p>If <code>exact</code> is <code>false</code>, calculate the orientation without using <code>ExactPredicates</code>.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _orient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(exact</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_False</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, a, b, c)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> _cross</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(exact, a, b)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #= Determine the sign of the cross product of a and b.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    Return 1 if the cross product is positive.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    Return -1 if the cross product is negative.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    Return 0 if the cross product is 0. =#</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    cross</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a, b; exact) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> _cross</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_booltype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(exact), a, b)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #= If \`exact\` is \`true\`, use exact cross product calculation created using</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    \`ExactPredicates\`generated predicate. Note that as of now \`ExactPredicates\` requires</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    Float64 so we must convert points a and b. =#</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    _cross</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, a, b) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> _cross_exact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_tuple_point</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a, Float64), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_tuple_point</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(b, Float64))</span></span></code></pre></div><p>Exact cross product calculation using <code>ExactPredicates</code>.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    @genpredicate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _cross_exact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        group!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        group!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        ext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a, b)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span></code></pre></div><p>If <code>exact</code> is <code>false</code>, calculate the cross product without using <code>ExactPredicates</code>.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _cross</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_False</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, a, b)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        c_t1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(b)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        c_t2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(b)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        c_val </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isapprox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(c_t1, c_t2)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        else</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            sign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(c_t1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c_t2)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c_val</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> .</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Predicates</span></span></code></pre></div><h1 id="If-we-want-to-inject-adaptivity,-we-would-do-something-like:" tabindex="-1">If we want to inject adaptivity, we would do something like: <a class="header-anchor" href="#If-we-want-to-inject-adaptivity,-we-would-do-something-like:" aria-label="Permalink to &quot;If we want to inject adaptivity, we would do something like: {#If-we-want-to-inject-adaptivity,-we-would-do-something-like:}&quot;">​</a></h1><p>function cross(a, b, c) # try Predicates._cross_naive(a, b, c) # check the error bound there # then try Predicates._cross_adaptive(a, b, c) # then try Predicates._cross_exact end</p><hr><p><em>This page was generated using <a href="https://github.com/fredrikekre/Literate.jl" target="_blank" rel="noreferrer">Literate.jl</a>.</em></p>`,13),e=[h];function p(l,k,r,d,E,c){return a(),i("div",null,e)}const y=s(t,[["render",p]]);export{o as __pageData,y as default};
