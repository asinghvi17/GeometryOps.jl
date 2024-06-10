import{_ as a,c as s,o as e,a6 as n}from"./chunks/framework.CdwGe8rB.js";const m=JSON.parse('{"title":"Creating Geometry","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials/creating_geometry.md","filePath":"tutorials/creating_geometry.md","lastUpdated":null}'),p={name:"tutorials/creating_geometry.md"},i=n(`<h1 id="Creating-Geometry" tabindex="-1">Creating Geometry <a class="header-anchor" href="#Creating-Geometry" aria-label="Permalink to &quot;Creating Geometry {#Creating-Geometry}&quot;">​</a></h1><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import GeoInterface as GI</span></span>
<span class="line"><span>import GeometryOps as GO</span></span>
<span class="line"><span>import GeoFormatTypes as GFT</span></span>
<span class="line"><span>import CoordinateTransformations</span></span>
<span class="line"><span>import Proj</span></span>
<span class="line"><span>using CairoMakie</span></span></code></pre></div><p>The first thing we need to do is decide which Coordinate Reference System (CRS) we will be working in. Here, we start with the most common geographic CRS, <a href="https://epsg.io/4326" target="_blank" rel="noreferrer">WGS84</a>.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>crs = GFT.EPSG(4326)</span></span></code></pre></div><p>Let&#39;s start by making a single point with CRS info included.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>point = GI.Point(0, 0; crs)</span></span></code></pre></div><p>Now, let&#39;s plot our point.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fig, ax, plt = plot(point)</span></span></code></pre></div><p>Let&#39;s create a set of points, and have a bit more fun with plotting.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>x = [-5, 0, 5, 0]</span></span>
<span class="line"><span>y = [0, -5, 0, 5]</span></span>
<span class="line"><span>points = GI.Point.(zip(x,y); crs)</span></span>
<span class="line"><span>plot!(ax, points; marker = &#39;✈&#39;, markersize = 30)</span></span>
<span class="line"><span>fig</span></span></code></pre></div><p>Points can be combined into a single MultiPoint geometry.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>x = [-5, -5, 5, 5]</span></span>
<span class="line"><span>y = [-5, 5, 5, -5]</span></span>
<span class="line"><span>multipoint = GeoInterface.MultiPoint(GI.Point.(zip(x, y); crs))</span></span>
<span class="line"><span>plot!(ax, multipoint, marker = &#39;☁&#39;, markersize = 30)</span></span>
<span class="line"><span>display(fig)</span></span></code></pre></div><p>Let&#39;s create a line between two points.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>p1 = GI.Point.(-5, 0; crs)</span></span>
<span class="line"><span>p2 = GI.Point.(5, 0; crs)</span></span>
<span class="line"><span>line = GI.LineString([p1,p2]; crs)</span></span>
<span class="line"><span>plot!(ax, line)</span></span>
<span class="line"><span>fig</span></span></code></pre></div><p>Now, let&#39;s create a line connecting multiple points (i.e. a LineString). This time we get a bit more fancy with point creation.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>r = 2;</span></span>
<span class="line"><span>k = 10;</span></span>
<span class="line"><span>ϴ = 0:0.01:2pi</span></span>
<span class="line"><span>x = r .* (k + 1) .* cos.(ϴ) .- r .* cos.((k + 1) .* ϴ)</span></span>
<span class="line"><span>y = r .* (k + 1) .* sin.(ϴ) .- r .* sin.((k + 1) .* ϴ)</span></span>
<span class="line"><span>lines = GI.LineString(GI.Point.(zip(x,y)); crs)</span></span>
<span class="line"><span>plot!(ax, lines; linewidth = 3)</span></span>
<span class="line"><span>fig</span></span></code></pre></div><p>We can also create a single <code>LinearRing</code> trait, the building block of a polygon. A <code>LinearRing</code> is simply a <code>LineString</code> with the same beginning and endpoint, i.e., an arbitrary closed shape composed of point pairs.</p><p>A <code>LinearRing</code> is composed of a series of points listed in clockwise order (i.e., winding order). I always think of a polygon as filled to the right of the lines as one progresses from point <code>n</code> to point <code>n+1</code>.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ring1 = GI.LinearRing(GI.getpoint(lines))</span></span></code></pre></div><p>Now, let&#39;s make the <code>LinearRing</code> into a <code>Polygon</code>.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>polygon1 = GI.Polygon([ring1]; crs)</span></span></code></pre></div><p>Now, we can use GeometryOperations and CoordinateTransformations to shift <code>polygon1</code> vertically up, to avoid plotting over our earlier results.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>xoffset = 0.</span></span>
<span class="line"><span>yoffset = 50.</span></span>
<span class="line"><span>f = CoordinateTransformations.Translation(xoffset, yoffset)</span></span>
<span class="line"><span>polygon1 = GO.transform(f, polygon1)</span></span>
<span class="line"><span>plot!(polygon1)</span></span>
<span class="line"><span>fig</span></span></code></pre></div><p>Polygons can contain &quot;holes&quot;. The first <code>LinearRing</code> in a polygon is the exterior, and all subsequent <code>LinearRing</code>s are treated as holes in the leading <code>LinearRing</code>.</p><p><code>GeoInterface</code> offers the <code>GI.getexterior(poly)</code> and <code>GI.gethole(poly)</code> methods to get the exterior ring and an iterable of holes, respectively.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Some packages always consider the secondary <code>LinearRings</code> holes, others look at the winding order, where the polygons are filled inward if they have a <a href="/GeometryOps.jl/previews/PR151/api#GeometryOps.isclockwise-Tuple{Any}">clockwise</a> winding order and outward if they have a counterclockwise winding order.</p><p>Hopefully, these are details that you&#39;ll never have to deal with. But it is good to know.</p></div><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>hole = GI.LinearRing(GI.getpoint(multipoint))</span></span>
<span class="line"><span>polygon1 = GI.Polygon([ring1, hole]; crs)</span></span></code></pre></div><p>Shift <code>polygon1</code> to the right, to avoid plotting over our earlier results.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>xoffset = 50.</span></span>
<span class="line"><span>yoffset = 0.</span></span>
<span class="line"><span>f = CoordinateTransformations.Translation(xoffset, yoffset)</span></span>
<span class="line"><span>polygon1 = GO.transform(f, polygon1)</span></span>
<span class="line"><span>plot!(polygon1)</span></span>
<span class="line"><span>display(fig)</span></span></code></pre></div><p><code>Polygon</code>s can also be grouped together as a <code>MultiPolygon</code>.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>r = 5</span></span>
<span class="line"><span>x = cos.(reverse(ϴ)) .* r .+ xoffset</span></span>
<span class="line"><span>y = sin.(reverse(ϴ)) .* r .+ yoffset</span></span>
<span class="line"><span>ring2 =  GI.LinearRing(GI.Point.(zip(x,y)))</span></span>
<span class="line"><span>polygon2 = GI.Polygon([ring2])</span></span>
<span class="line"><span>multipolygon = GI.MultiPolygon([polygon1, polygon2]; crs)</span></span></code></pre></div><p>Shift <code>multipolygon</code> up, to avoid plotting over our earlier results.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>xoffset = 0.</span></span>
<span class="line"><span>yoffset = 50.</span></span>
<span class="line"><span>f = CoordinateTransformations.Translation(xoffset, yoffset)</span></span>
<span class="line"><span>multipolygon = GO.transform(f, multipolygon)</span></span>
<span class="line"><span>plot!(multipolygon)</span></span>
<span class="line"><span>display(fig)</span></span></code></pre></div><p>Great, now we can make <code>Points</code>, <code>MultiPoints</code>, <code>Lines</code>, <code>LineStrings</code>, <code>Polygons</code> (with holes), and <code>MultiPolygons</code>.</p><p>But where does the <code>crs</code> information come in? To show this, we need to use <code>GeoMakie</code> that can interpret the <code>crs</code> information that we&#39;ve included with our geometries.</p><p>add additional packages</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GeoMakie</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GeoJSON</span></span></code></pre></div><p>Now specify the source and destination projections for our map. Remember that the very first thing we did was set our source coordinate system.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>source = crs;</span></span>
<span class="line"><span>dest = &quot;+proj=natearth2&quot; #see [https://proj.org/en/9.4/operations/projections/natearth2.html]</span></span></code></pre></div><p>Open the Natural Earth continental outlines, which are available from <a href="https://www.naturalearthdata.com/" target="_blank" rel="noreferrer">https://www.naturalearthdata.com/</a>, and bundled with GeoMakie as well.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">land_path </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GeoMakie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">assetpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ne_110m_land.geojson&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;/home/runner/.julia/packages/GeoMakie/DMLIe/assets/ne_110m_land.geojson&quot;</span></span></code></pre></div><p>Read the land data into a <code>GeoJSON.FeatureCollection</code>.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">land_geo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GeoJSON</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">read</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">read</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(land_path, String))</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>FeatureCollection with 127 Features</span></span></code></pre></div><p>create a figure with a <code>GeoAxis</code> from GeoMakie, that can handle the projections between CRS.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fig = Figure(size=(1000, 500));</span></span>
<span class="line"><span>ga = GeoAxis(</span></span>
<span class="line"><span>    fig[1, 1];</span></span>
<span class="line"><span>    source=crs, # \`source\` and \`dest\` set the CRS</span></span>
<span class="line"><span>    dest=dest,</span></span>
<span class="line"><span>    xticklabelsvisible = false,</span></span>
<span class="line"><span>    yticklabelsvisible = false,</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>nothing #hide</span></span></code></pre></div><p>Plot <code>land</code> for context.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>poly!(ga, land_geo, color=:black)</span></span>
<span class="line"><span>display(fig)</span></span></code></pre></div><p>Now let&#39;s make a <code>Polygon</code> like before.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>plot!(multipolygon; color = :green)</span></span>
<span class="line"><span>display(fig)</span></span></code></pre></div><p>Great, we can make geometries and plot them on a map... now let&#39;s export the data to common geospatial data formats.</p><p>Typically, you&#39;ll also want to include attibutes with your geometries. The easiest way to do that is to create a table with a <code>:geometry</code> column. Let&#39;s do this using <a href="https://github.com/JuliaData/DataFrames.jl" target="_blank" rel="noreferrer"><code>DataFrames</code></a>.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>using DataFrames</span></span>
<span class="line"><span>import Shapefile</span></span>
<span class="line"><span>import GeoJSON</span></span>
<span class="line"><span>import GeoParquet</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>df = DataFrame(geometry=[polygon1, polygon2])</span></span></code></pre></div><p>now lets add a couple of attributes to the geometries</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>df[!,:id] = [&quot;a&quot;, &quot;b&quot;]</span></span>
<span class="line"><span>df[!, :name] = [&quot;polygon 1&quot;, &quot;polygon 2&quot;]</span></span></code></pre></div><p>now let&#39;s save as a GeoJSON</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn = &quot;shapes.json&quot;</span></span>
<span class="line"><span>GeoJSON.write(fn, df)</span></span></code></pre></div><p>now let&#39;s save as a Shapefile</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn = &quot;shapes.shp&quot;</span></span>
<span class="line"><span>Shapefile.write(fn, df)</span></span></code></pre></div><p>now let&#39;s save as a GeoParquet</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn = &quot;shapes.parquet&quot;</span></span>
<span class="line"><span>GeoParquet.write(fn, df, (:geometry,))</span></span></code></pre></div><p>And there we go, you can now create mapped geometries from scratch, plot them on a map, and save in multiple geospatial data formats.</p>`,63),t=[i];function o(l,c,d,r,h,g){return e(),s("div",null,t)}const k=a(p,[["render",o]]);export{m as __pageData,k as default};
