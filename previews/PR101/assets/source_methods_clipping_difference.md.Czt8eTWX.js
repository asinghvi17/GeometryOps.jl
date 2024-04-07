import{_ as s,c as i,o as a,a7 as n}from"./chunks/framework.DPen7re8.js";const y=JSON.parse('{"title":"Difference Polygon Clipping","description":"","frontmatter":{},"headers":[],"relativePath":"source/methods/clipping/difference.md","filePath":"source/methods/clipping/difference.md","lastUpdated":null}'),l={name:"source/methods/clipping/difference.md"},t=n(`<h1 id="Difference-Polygon-Clipping" tabindex="-1">Difference Polygon Clipping <a class="header-anchor" href="#Difference-Polygon-Clipping" aria-label="Permalink to &quot;Difference Polygon Clipping {#Difference-Polygon-Clipping}&quot;">​</a></h1><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> difference</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    difference(geom_a, geom_b, [T::Type]; target::Type)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Return the difference between two geometries as a list of geometries. Return an empty list</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">if none are found. The type of the list will be constrained as much as possible given the</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">input geometries. Furthermore, the user can provide a \`taget\` type as a keyword argument and</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">a list of target geometries found in the difference will be returned. The user can also</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">provide a float type that they would like the points of returned geometries to be.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># Example</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`jldoctest</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">import GeoInterface as GI, GeometryOps as GO</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">poly1 = GI.Polygon([[[0.0, 0.0], [5.0, 5.0], [10.0, 0.0], [5.0, -5.0], [0.0, 0.0]]])</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">poly2 = GI.Polygon([[[3.0, 0.0], [8.0, 5.0], [13.0, 0.0], [8.0, -5.0], [3.0, 0.0]]])</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">diff_poly = GO.difference(poly1, poly2; target = GI.PolygonTrait())</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GI.coordinates.(diff_poly)</span></span></code></pre></div><p>output</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element Vector{Vector{Vector{Vector{Float64}}}}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [[[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">function difference(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    geom_a, geom_b, ::Type{T} = Float64; target=nothing,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">) where {T&lt;:AbstractFloat}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    return _difference(TraitTarget(target), T, GI.trait(geom_a), geom_a, GI.trait(geom_b), geom_b)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#= The &#39;difference&#39; function returns the difference of two polygons as a list of polygons.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">The algorithm to determine the difference was adapted from &quot;Efficient clipping of efficient</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">polygons,&quot; by Greiner and Hormann (1998). DOI: https://doi.org/10.1145/274363.274364 =#</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">function _difference(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    ::TraitTarget{GI.PolygonTrait}, ::Type{T},</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    ::GI.PolygonTrait, poly_a,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    ::GI.PolygonTrait, poly_b,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">) where T</span></span></code></pre></div><p>Get the exterior of the polygons</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ext_a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">getexterior</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(poly_a)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ext_b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">getexterior</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(poly_b)</span></span></code></pre></div><p>Find the difference of the exterior of the polygons</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    a_list, b_list, a_idx_list </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> _build_ab_list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T, ext_a, ext_b, _diff_delay_cross_f, _diff_delay_bounce_f)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    polys </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> _trace_polynodes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T, a_list, b_list, a_idx_list, _diff_step)</span></span></code></pre></div><p>if no crossing points, determine if either poly is inside of the other</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isempty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(polys)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        a_in_b, b_in_a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> _find_non_cross_orientation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a_list, b_list, ext_a, ext_b)</span></span></code></pre></div><p>add case for if they polygons are the same (all intersection points!) add a find_first check to find first non-inter poly!</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b_in_a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a_in_b  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># b in a and can&#39;t be the same polygon</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            poly_a_b_hole </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Polygon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tuples</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ext_a), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tuples</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ext_b)])</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            push!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(polys, poly_a_b_hole)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        elseif</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b_in_a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a_in_b </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># polygons don&#39;t intersect</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            push!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(polys, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tuples</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(poly_a))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> polys</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    remove_idx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> falses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(polys))</span></span></code></pre></div><p>If the original polygons had holes, take that into account.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nhole</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(poly_a) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        _add_holes_to_polys!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T, polys, GI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">gethole</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(poly_a), remove_idx)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nhole</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(poly_b) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hole </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">gethole</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(poly_b)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            hole_poly </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Polygon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(StaticArrays</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hole))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            new_polys </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> intersection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hole_poly, poly_a, T; target </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PolygonTrait)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(new_polys) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                append!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(polys, new_polys)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span></code></pre></div><p>Remove uneeded collinear points on same edge</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> polys</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        _remove_collinear_points!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(p, remove_idx)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> polys</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><h1 id="Helper-functions-for-Differences-with-Greiner-and-Hormann-Polygon-Clipping" tabindex="-1">Helper functions for Differences with Greiner and Hormann Polygon Clipping <a class="header-anchor" href="#Helper-functions-for-Differences-with-Greiner-and-Hormann-Polygon-Clipping" aria-label="Permalink to &quot;Helper functions for Differences with Greiner and Hormann Polygon Clipping {#Helper-functions-for-Differences-with-Greiner-and-Hormann-Polygon-Clipping}&quot;">​</a></h1><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#= When marking the crossing status of a delayed crossing, the chain start point is crossing</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">when the start point is a entry point and is a bouncing point when the start point is an</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">exit point. The end of the chain has the opposite crossing / bouncing status. =#</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_diff_delay_cross_f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (x, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#= When marking the crossing status of a delayed bouncing, the chain start and end points</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">are crossing if the current polygon&#39;s adjacent edges are within the non-tracing polygon and</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">we are tracing b_list or if the edges are outside and we are on a_list. Otherwise the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">endpoints are marked as crossing. x is a boolean representing if the edges are inside or</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">outside of the polygon and y is a variable that is true if we are on a_list and false if we</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">are on b_list. =#</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_diff_delay_bounce_f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">⊻</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#= When tracing polygons, step forwards if the most recent intersection point was an entry</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">point and we are currently tracing b_list or if it was an exit point and we are currently</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">tracing a_list, else step backwards, where x is the entry/exit status and y is a variable</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">that is true if we are on a_list and false if we are on b_list. =#</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_diff_step</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">⊻</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Many type and target combos aren&#39;t implemented</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _difference</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TraitTarget{Target}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Type{T}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    trait_a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GI.AbstractTrait</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, geom_a,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    trait_b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GI.AbstractTrait</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, geom_b,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {Target, T}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    @assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;Difference between </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$trait_a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$trait_b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with target </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$Target</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> isn&#39;t implemented yet.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nothing</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><hr><p><em>This page was generated using <a href="https://github.com/fredrikekre/Literate.jl" target="_blank" rel="noreferrer">Literate.jl</a>.</em></p>`,22),e=[t];function p(h,k,r,d,g,o){return a(),i("div",null,e)}const c=s(l,[["render",p]]);export{y as __pageData,c as default};
